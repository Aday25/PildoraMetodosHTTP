const simulationBox = document.getElementById("simulation");
const methodImage = document.getElementById("methodImage"); // Cambié a methodImage que pusiste en HTML
const select = document.getElementById("methodSelect");
const wrapper = document.getElementById("simulationWrapper");

const explanations = {
  GET: "🔍 La madrastra mira en su espejo mágico: 'Servidor, servidor, muéstrame los datos'. No cambia nada, solo quiere mirar.",
  POST: "📬 El cartero llega con un paquete nuevo para el servidor. 'Aquí hay información para crear algo nuevo'.",
  PUT: "🧱 Un albañil reemplaza por completo una pared: 'Este recurso debe quedar así, completo'.",
  PATCH: "🎯 Un pintor retoca solo una esquina del mural: 'Solo vengo a cambiar un detalle'.",
  DELETE: "🗑️ Un limpiador borra lo que le piden: 'Este recurso ya no sirve, lo elimino'.",
  HEAD: "👀 Una pitonisa mira el sobre sin abrirlo: 'Sólo quiero saber si hay una carta, no me importa el contenido'.",
  OPTIONS: "📋 Una reportera pregunta: '¿Qué está permitido hacer aquí?'. El servidor responde con la lista.",
  TRACE: "🔁 El detective que sabe por dónde ha pasado una solicitud, dice: 'Repíteme lo que te envié'.",
  CONNECT: "🔐 Se abre un túnel secreto para hablar de forma segura, como HTTPS."
};

const images = {
  GET: "../public/get.png",
  POST: "../public/post.png",
  PUT: "../public/put.png",
  PATCH: "../public/patch.png",
  DELETE: "../public/delete.png",
  HEAD: "../public/head.png",
  OPTIONS: "../public/options.png",
  TRACE: "../public/trace.png",
  CONNECT: "../public/connect.png"
};

document.getElementById("sendButton").addEventListener("click", () => {
  const method = select.value;
  simulationBox.innerHTML = "";

  if (!method) {
    wrapper.style.display = "none";
    methodImage.style.display = "none";
    return;
  }

  // Mostrar explicación
  const msg = explanations[method];
  simulationBox.innerHTML = `<strong>${method}</strong>: ${msg}`;

  // Intentar cargar la imagen y mostrarla solo si existe
  const imagePath = images[method];

  fetch(imagePath)
    .then(response => {
      if (!response.ok) throw new Error("Imagen no encontrada");
      methodImage.src = imagePath;
      methodImage.alt = `Imagen del método ${method}`;
      methodImage.style.display = "block";
    })
    .catch(() => {
      // Si no hay imagen, ocultar y avisar (opcional)
      methodImage.style.display = "none";
      console.warn(`No hay imagen para el método ${method}`);
    });

  wrapper.style.display = "flex";
});

document.addEventListener('DOMContentLoaded', () => {
  loadHTML('navbar', '/components/navbar.html');
  loadHTML('footer', '/components/footer.html');
});
