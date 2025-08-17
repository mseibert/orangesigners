import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, url } = context;
  
  // Skip authentication for static assets, API endpoints, and auth page
  if (url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/_astro/') ||
      url.pathname.startsWith('/favicon') ||
      url.pathname === '/auth' ||
      url.pathname.includes('.')) {
    return next();
  }

  // Skip authentication during development
  if (import.meta.env.DEV) {
    return next();
  }

  // Skip authentication during build time
  if (import.meta.env.BUILD) {
    return next();
  }

  // Skip authentication when no token is available
  if (!import.meta.env.SINGERTOKEN) {
    return next();
  }

  // Skip authentication when SKIP_AUTH is set
  if (import.meta.env.SKIP_AUTH === 'true') {
    return next();
  }

  const expectedToken = import.meta.env.SINGERTOKEN;
  
  // Check for Authorization header
  const authHeader = request.headers.get('Authorization');
  
  // If authorization header is present, validate it
  if (authHeader && authHeader.startsWith('Basic ')) {
    const encodedCredentials = authHeader.substring(6);
    const credentials = atob(encodedCredentials);
    const [username, password] = credentials.split(':');
    
    // For Basic Auth, we'll use the token as both username and password
    if (password === expectedToken) {
      return next();
    }
  }
  
  // Check if this is a bot/crawler request (which should be allowed for generation)
  const userAgent = request.headers.get('User-Agent') || '';
  const isBot = userAgent.includes('bot') || 
                userAgent.includes('crawler') || 
                userAgent.includes('spider') ||
                userAgent.includes('vercel') ||
                userAgent.includes('build') ||
                userAgent.includes('deploy');
  
  // Allow bot requests to pass through (for generation)
  if (isBot) {
    return next();
  }
  
  // Redirect to our beautiful auth page for real users
  return Response.redirect(new URL('/auth', url), 302);
});
