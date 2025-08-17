import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url } = context;
  
  // Skip authentication for static assets and API endpoints
  if (url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/_astro/') ||
      url.pathname.startsWith('/favicon') ||
      url.pathname.includes('.')) {
    return next();
  }

  // Skip authentication during development, build time, or when prerendering
  // Also skip for static assets and when no token is available
  if (import.meta.env.DEV || 
      import.meta.env.BUILD || 
      import.meta.env.PRERENDER ||
      !import.meta.env.SINGERTOKEN) {
    return next();
  }

  const expectedToken = import.meta.env.SINGERTOKEN;
  
  // Check for Authorization header
  const authHeader = request.headers.get('Authorization');
  
  // If no authorization header is present, this might be a generation request
  // Skip authentication in this case to allow proper generation
  if (!authHeader) {
    return next();
  }
  
  if (authHeader && authHeader.startsWith('Basic ')) {
    const encodedCredentials = authHeader.substring(6);
    const credentials = atob(encodedCredentials);
    const [username, password] = credentials.split(':');
    
    // For Basic Auth, we'll use the token as both username and password
    if (password === expectedToken) {
      return next();
    }
  }
  
  // Return 401 with Basic Auth challenge
  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Orange Singers Website"',
      'Content-Type': 'text/plain'
    }
  });
});
