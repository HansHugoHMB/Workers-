const EMAILS_NAMESPACE = EMAILS_NAMESPACE; // Utilise ton Binding Name défini dans Cloudflare

async function handleRequest(request) {
  if (request.method === 'POST') {
    const formData = await request.formData();
    const email = formData.get('email');

    if (email) {
      const id = Date.now();
      await EMAILS_NAMESPACE.put(id.toString(), email);
      return new Response('Email ajouté avec succès!', { status: 200 });
    } else {
      return new Response('Email invalide', { status: 400 });
    }
  }

  return new Response('Méthode non supportée', { status: 405 });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
