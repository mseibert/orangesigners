import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Skip authentication for auth page itself and static assets
  if (
    context.url.pathname === '/auth' ||
    context.url.pathname.startsWith('/api/') ||
    context.url.pathname.startsWith('/_astro/') ||
    context.url.pathname.startsWith('/favicon') ||
    context.url.pathname.startsWith('/fonts/') ||
    context.url.pathname.startsWith('/js/') ||
    context.url.pathname.includes('.')
  ) {
    return next();
  }

  // Check if user is authenticated via session cookie
  const isAuthenticated = context.cookies.get('singer-auth')?.value === 'true';
  
  if (!isAuthenticated) {
    // Redirect to auth page
    return context.redirect('/auth');
  }

  // User is authenticated, continue
  return next();
});
