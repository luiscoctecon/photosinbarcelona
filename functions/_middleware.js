export async function onRequest(context) {
  const { request } = context

  // Pass through the request
  const response = await context.next()

  // Only modify JS and CSS files
  if (request.url.includes('/assets/')) {
    const url = new URL(request.url)
    
    if (url.pathname.endsWith('.js')) {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          'Content-Type': 'application/javascript; charset=utf-8',
        },
      })
    }
    
    if (url.pathname.endsWith('.css')) {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          'Content-Type': 'text/css; charset=utf-8',
        },
      })
    }
  }

  return response
}
