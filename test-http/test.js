const answers = {
  q1: {
    correct: "GET",
    explanation: "GET se usa para obtener datos sin modificar nada. Es como mirar por una ventana."
  },
  q2: {
    correct: "PATCH",
    explanation: "PATCH se usa para actualizar solo una parte de un recurso, no todo."
  },
  q3: {
    correct: "DELETE",
    explanation: "DELETE elimina recursos. Es como borrar algo del servidor."
  },
  q4: {
    correct: "POST",
    explanation: "POST se usa para crear nuevos recursos, enviando datos al servidor."
  },
  q5: {
    correct: "HEAD",
    explanation: "HEAD obtiene solo los encabezados, sin el contenido. Es útil para comprobar si un recurso existe."
  },
  q6: {
    correct: "OPTIONS",
    explanation: "OPTIONS muestra qué métodos están permitidos para un recurso."
  },
  q7: {
    correct: "CONNECT",
    explanation: "CONNECT se usa para abrir un túnel seguro, como en conexiones HTTPS."
  },
  q8: {
    correct: "TRACE",
    explanation: "TRACE permite ver el camino que sigue una petición. Es útil para depurar."
  },
  q9: {
    correct: "HEAD",
    explanation: "HEAD es como GET, pero sin el contenido. Sirve para revisar metadatos."
  }
};

document.getElementById("quizForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;

  // Recorremos todas las preguntas (divs con clase "question")
  const questionDivs = document.querySelectorAll(".question");

  questionDivs.forEach((div, index) => {
    const qKey = `q${index + 1}`;
    const selected = div.querySelector(`input[name=${qKey}]:checked`);

    // Eliminar feedback anterior si lo hay
    const previous = div.querySelector(".feedback");
    if (previous) previous.remove();

    const message = document.createElement("div");
    message.className = "feedback";

    if (selected) {
      if (selected.value === answers[qKey].correct) {
        score++;
        message.textContent = `✅ ¡Correcto! ${answers[qKey].explanation}`;
        message.style.color = "green";
      } else {
        message.textContent = `❌ Incorrecto. Elegiste "${selected.value}", pero la respuesta correcta es "${answers[qKey].correct}". ${answers[qKey].explanation}`;
        message.style.color = "red";
      }
    } else {
      message.textContent = `❌ No respondiste esta pregunta. La correcta es "${answers[qKey].correct}". ${answers[qKey].explanation}`;
      message.style.color = "orange";
    }

    div.appendChild(message);
  });

  const result = document.getElementById("result");
  result.innerHTML = `<strong>Obtuviste ${score} de ${questionDivs.length} respuestas correctas.</strong>`;
  result.style.color = score === questionDivs.length ? "green" : "black";
});
