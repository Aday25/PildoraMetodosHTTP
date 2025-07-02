const simulationBox = document.getElementById("simulation");
const select = document.getElementById("methodSelect");

const explanations = {
  GET: "🔍 La madrastra mira en su espejo mágico: 'Servidor, servidor, muéstrame los datos'. No cambia nada, solo quiere mirar.",
  POST: "📬 El cartero llega con un paquete nuevo para el servidor. 'Aquí hay información para crear algo nuevo'.",
  PUT: "🧱 Un albañil reemplaza por completo una pared: 'Este recurso debe quedar así, completo'.",
  PATCH: "🎯 Un pintor retoca solo una esquina del mural: 'Solo vengo a cambiar un detalle'.",
  DELETE: "🗑️ Un limpiador borra lo que le piden: 'Este recurso ya no sirve, lo elimino'.",
  HEAD: "👀 Una pitonisa mira el sobre sin abrirlo: 'Sólo quiero saber si hay una carta, no me importa el contenido'.",
  OPTIONS: "📋 Una reportera pregunta: '¿Qué está permitido hacer aquí?'. El servidor responde con la lista.",
  TRACE: "🔁 El detective que sabe por dónde ha pasado una solicitud, dice: 'Repíteme lo que te envié' y el servidor repite exactamente lo mismo. Es para depurar.",
  CONNECT: "🔐 Se abre un túnel secreto para hablar de forma segura, como HTTPS."
};

document.getElementById("sendButton").addEventListener("click", () => {
  const method = select.value;
  simulationBox.innerHTML = "";

  if (!method) {
    simulationBox.innerHTML = "⚠️ Por favor, selecciona un método primero.";
    return;
  }

  const msg = explanations[method];
  simulationBox.innerHTML = `<strong>${method}</strong>: ${msg}`;
});
