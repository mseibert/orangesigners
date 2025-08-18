import type { APIRoute } from 'astro';

// Direkte Umgebungsvariable in der API-Route
const getExpectedPassword = () => {
  // Versuche verschiedene Wege, die Umgebungsvariable zu laden
  return process.env.SINGERTOKEN || 
         import.meta.env.SINGERTOKEN || 
         'orangesingers-2024';
};

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    const formData = await request.formData();
    const password = formData.get('password') as string;
    
    console.log('Received password:', password ? '***' : 'empty');
    console.log('Received password length:', password ? password.length : 0);
    
    // Get the expected password from environment variable
    const expectedPassword = getExpectedPassword();
    
    console.log('Expected password available:', !!expectedPassword);
    console.log('Expected password length:', expectedPassword ? expectedPassword.length : 0);
    console.log('Expected password starts with:', expectedPassword ? expectedPassword.substring(0, 3) + '...' : 'none');
    
    // Debug: Zeige alle verfügbaren Umgebungsvariablen
    console.log('Environment debug:', {
      processEnv: !!process.env.SINGERTOKEN,
      importMetaEnv: !!import.meta.env.SINGERTOKEN,
      processEnvValue: process.env.SINGERTOKEN,
      importMetaEnvValue: import.meta.env.SINGERTOKEN
    });
    
    console.log('Password comparison:', {
      provided: password,
      expected: expectedPassword,
      matches: password === expectedPassword
    });
    
    if (password === expectedPassword) {
      console.log('Password correct, setting cookie...');
      
      // Set authentication cookie
      cookies.set('singer-auth', 'true', {
        path: '/',
        httpOnly: true,
        secure: import.meta.env.PROD,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      
      console.log('Cookie set successfully');
      
      // Redirect directly instead of returning JSON
      return redirect('/');
    } else {
      console.log('Password incorrect');
      
      // Check if this is a form submission (not AJAX)
      const contentType = request.headers.get('content-type');
      if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
        // Redirect back to auth page with error
        return redirect('/auth?error=wrong-password');
      }
      
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Falsches Passwort' 
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
