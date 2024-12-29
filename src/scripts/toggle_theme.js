// themeToggle.js
const btnTheme = document.getElementById('btn-theme');
const txtBtnTheme = document.getElementById('txt-theme');
const html = document.documentElement;
const THEME = {
  dark: "dark",
  light: "light"
}
const STR_THEME = {
  dark: "oscuro",
  light: "claro"
}

function toggleTheme() {
  const themeIsDark = html.getAttribute('data-theme') === THEME.dark;
  html.setAttribute('data-theme', themeIsDark ? THEME.light : THEME.dark);
  localStorage.setItem('theme', themeIsDark ? THEME.light : THEME.dark);
  // Modificar el botón
  txtBtnTheme.innerText = `Tema ${themeIsDark ? STR_THEME.light : STR_THEME.dark}`;
  document.body.style.transition = "background .6s";
    document.getElementById('main-container').style.transition = "background .6s";
}

// Inicializar el tema desde localStorage
const savedTheme = localStorage.getItem('theme') || THEME.dark;
html.setAttribute('data-theme', savedTheme === THEME.dark ? THEME.dark : THEME.light);
txtBtnTheme.innerText = `Tema ${savedTheme === THEME.dark ? STR_THEME.light : STR_THEME.dark}`;


if (btnTheme) {
  btnTheme.addEventListener('click', toggleTheme);
}
