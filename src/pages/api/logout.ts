import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  // Clear the authentication cookie
  cookies.delete('singer-auth', { path: '/' });
  
  // Redirect to auth page
  return redirect('/auth');
};
