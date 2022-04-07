export default async request => {
    try {
      const body = await request.text();
    
      return new Response('OK');
    } catch (err) {
      const errorText = 'Unable to handle test';
      return new Response(errorText, { status: 500 });
    }
  };