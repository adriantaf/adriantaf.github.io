'use strict';

const contenedorPrincipal = document.getElementById('main');
const ignorarRepos = ['adriantaf.github.io', 'sublime-text'];
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
	let arrayNombre = nombre.split('-');
	let inicialNombre = arrayNombre[0].charAt(0);
	let primerPalabraNombre = arrayNombre[0].replace(inicialNombre, inicialNombre.toUpperCase());

	arrayNombre[0] = primerPalabraNombre;

	let nombreNormalizado = arrayNombre.join(' ');

	return nombreNormalizado;
}

fetch(GithubReposLink)
.then(response => response.json())
.then(json => main(json))