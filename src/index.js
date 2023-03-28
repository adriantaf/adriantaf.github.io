'use strict';

const contenedorPrincipal = document.getElementById('main');
const ignorarRepos = ['adriantaf.github.io', 'sublime-text'];
const NM_palabrasMayusculas = ['nasa', 'api', 'imc', 'js', 'css', 'html'];
let GithubNombreUsuario = 'adriantaf';
let GithubReposLink = `https://api.github.com/users/${GithubNombreUsuario}/repos`;

function main(json) {
	const templateCard = document.getElementById('template-card').content;

	json.forEach(elemento => {
		if (!ignorarRepos.includes(elemento.name)) {
			let cloneTemplateCard = templateCard.cloneNode(true);
			let nombreRepo = elemento.name;
			let nombreRepoNormalizado = normalizarNombre(nombreRepo);
			let linkGithubPages = `https://${GithubNombreUsuario}.github.io/${nombreRepo}`;

			cloneTemplateCard.getElementById('nombre').textContent = nombreRepoNormalizado;
			cloneTemplateCard.getElementById('link').href = linkGithubPages;

			contenedorPrincipal.appendChild(cloneTemplateCard);
		}
	});
}

function normalizarNombre(nombre) {
	// ---- Separar el nombre
	let arrayNombre = nombre.split('-');

	// Primer palabra del nombre
	let primerPalabraNombre = arrayNombre[0];

	// ---- Hacer mayusculas las palabras seleccionadas
	if (NM_palabrasMayusculas.includes(primerPalabraNombre)) {

		arrayNombre.forEach((elemento, i, arr) => {
			if (NM_palabrasMayusculas.includes(elemento)) {
				arr[i] = elemento.toUpperCase();
			}
		});

	} else {
		// ---- Hacer mayuscula la inicial dela primer palabra del nombre
		// Guardar la iniciar de la primer palabra
		let inicialNombre = arrayNombre[0].charAt(0);
		// Hacer mayuscula la primer letra de la primer palabra
		let primerPalabraNombreEnMayuscula = arrayNombre[0].replace(inicialNombre, inicialNombre.toUpperCase());
		// Cambiar la primer palabra con la primer palabra normalizada
		arrayNombre[0] = primerPalabraNombreEnMayuscula;

		arrayNombre.forEach((elemento, i, arr) => {
			if (NM_palabrasMayusculas.includes(elemento)) {
				arr[i] = elemento.toUpperCase();
			}
		});
	}

	// ---- Unir el nombre
	let nombreNormalizado = arrayNombre.join(' ');

	return nombreNormalizado;
}

fetch(GithubReposLink)
.then(response => response.json())
.then(json => main(json))