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

  // Skip authentication during development, build time, or when prerendering
  // Also skip for static assets and when no token is available
  if (import.meta.env.DEV || 
      import.meta.env.BUILD || 
      import.meta.env.PRERENDER ||
      !import.meta.env.SINGERTOKEN ||
      import.meta.env.SKIP_AUTH === 'true') {
    return next();
  }

  const expectedToken = import.meta.env.SINGERTOKEN;
  
  // Check for Authorization header
  const authHeader = request.headers.get('Authorization');
  
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
  
  // If no authorization header is present, redirect to auth page
  // This handles both generation requests (which will be allowed) and real users
  if (!authHeader) {
    // Only redirect if this is not a generation request
    if (!isBot && !import.meta.env.BUILD && !import.meta.env.PRERENDER) {
      return Response.redirect(new URL('/auth', url), 302);
    }
    return next();
  }
  
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
  
  // Redirect to our beautiful auth page instead of showing browser dialog
  return Response.redirect(new URL('/auth', url), 302);
});
