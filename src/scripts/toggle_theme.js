// themeToggle.js
const btnTheme = document.getElementById('btn-theme');
const txtBtnTheme = document.getElementById('txt-theme');
const html = document.documentElement;

function toggleTheme() {
  const isDark = html.classList.toggle('dark');
  txtBtnTheme.innerText = `Tema ${isDark ? 'claro' : 'oscuro'}`;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Inicializar el tema desde localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  html.classList.add('dark');
  txtBtnTheme.innerText = `Tema claro`;
} else {
  html.classList.remove('dark');
  txtBtnTheme.innerText = `Tema oscuro`;
}

if (btnTheme) {
  btnTheme.addEventListener('click', toggleTheme);
}
