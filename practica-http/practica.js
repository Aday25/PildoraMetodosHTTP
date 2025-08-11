const mostrar = (data) => {
  document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
}

//  GET - La Madrastra
function hacerGET() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => mostrar(data));
}

//  POST - El Cartero 
function hacerPOST() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Nuevo título',
      body: 'Este es el contenido del nuevo post',
      userId: 1
    })
  })
    .then(res => res.json())
    .then(data => mostrar(data));
}

//  PUT - El Albañil
function hacerPUT() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 1,
      title: 'Título actualizado',
      body: 'Contenido completamente nuevo',
      userId: 1
    })
  })
    .then(res => res.json())
    .then(data => mostrar(data));
}

// 🔧 PATCH - La Pintora
function hacerPATCH() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Título modificado'
    })
  })
    .then(res => res.json())
    .then(data => mostrar(data));
}

//  DELETE - El Limpiador
function hacerDELETE() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
    .then(res => {
      mostrar({ mensaje: 'Post eliminado', status: res.status });
    });
}

// OPTIONS – La Reportera
function hacerOPTIONS() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'OPTIONS'
  })
    .then(res => {
      // Las cabeceras Allow no se devuelven por defecto en esta API
      const allowHeader = res.headers.get('Allow');

      mostrar({
        status: res.status,
        mensaje: 'OPTIONS sirve para preguntar al servidor qué métodos están permitidos en un recurso.',
        resultado: allowHeader ? `Métodos permitidos: ${allowHeader}` : 'La cabecera "Allow" no está disponible en esta respuesta (común en muchas APIs públicas).'
      });
    })
    .catch(error => {
      mostrar({
        status: 'Error',
        mensaje: 'La petición OPTIONS no se pudo completar.',
        detalle: error.message
      });
    });
}

//  HEAD – La Tarotista
function hacerHEAD() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'HEAD'
  })
    .then(res => {
      mostrar({
        status: res.status,
        tipo: res.headers.get('Content-Type'),
        longitud: res.headers.get('Content-Length') || 'No disponible'
      });
    });
}

/*  🔸 No devuelve contenido, pero sí información útil (como si lees la “etiqueta” sin abrir la caja).
    🔸 Sirve para saber si algo existe, o si vale la pena descargarlo.*/

//TRACE – El Detective (no permitido en la mayoría de servidores)

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('navbar', '/components/navbar.html');
  loadHTML('footer', '/components/footer.html');
});


