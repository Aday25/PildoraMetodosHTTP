async function loadHTML(id, url) {
  const container = document.getElementById(id);
  if (!container) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error cargando ${url}: ${response.statusText}`);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}


loadHTML('navbar', './components/navbar.html');
loadHTML('footer', './components/footer.html');
