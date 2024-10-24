'use strict';

// const URL_BASE = 'https://adriantaf.github.io/';
const URL_BASE = 'http://localhost:8080/';
let jsonFileProyectos = URL_BASE + "src/json/proyectos.json";

const MAIN = document.getElementById('main');
const TEMPLATE_PROYECTO = document.getElementById('template-proyecto').content;

function createItems(data) {
	let elementosOrdenados = [];

	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		let clonTemplate = document.importNode(TEMPLATE_PROYECTO, true);
		let fragment = document.createDocumentFragment();
		let fragmentImages = document.createDocumentFragment();
		let tecnologiasString = '';
		fragment.appendChild(clonTemplate);

		fragment.getElementById('nombre').innerText = element.nombre;
		fragment.getElementById('descripcion').innerText = element.descripcion;

		if (element.is_top) {
			// TECNOLOGIAS
			element.tecnologias.forEach((tecnologia, i, arr) => {
				if (tecnologia === 'js') {
					arr[i] = 'JavaScript';
				} else if (tecnologia === 'mysql') {
					arr[i] = 'MySQL';
				} else {
					arr[i] = tecnologia.toUpperCase();
				}
			});

			tecnologiasString = element.tecnologias.join(', ');
			fragment.getElementById('tecnologias').innerText = tecnologiasString;
			fragment.getElementById('top-icon').parentNode.removeChild(fragment.getElementById('top-icon'));
			// LINK
			if (element.url !== "") {
				fragment.getElementById('link').href = element.url;
			} else {
				// fragment.getElementById('link').parentNode.removeChild(fragment.getElementById('link'));
				fragment.getElementById('cont-actions').parentNode.removeChild(fragment.getElementById('cont-actions'));
			}
			// // ICONO TOP
			// if (element.is_top) {
			// 	fragment.getElementById('top-icon').parentNode.removeChild(fragment.getElementById('top-icon'));
			// 	// CONTAINER ACTIONS
			// 	if (element.url === "") {
			// 		fragment.getElementById('cont-actions').parentNode.removeChild(fragment.getElementById('cont-actions'));
			// 	}
			// }
			// SCROLL ICON
			if (element.src.length < 2) {
				fragment.getElementById('scroll-icon').parentNode.removeChild(fragment.getElementById('scroll-icon'));
			}
			// SLIDER
			element.src.forEach(srcImage => {
				let image = document.createElement('img');
				image.src = `./res/img-proyectos/${srcImage}`;
				image.classList.add('card__slider__img');
				fragmentImages.appendChild(image);
			});		

			fragment.getElementById('slider').append(fragmentImages);
			element.is_top ? elementosOrdenados.unshift(fragment) : elementosOrdenados.push(fragment);
		}
	}

	elementosOrdenados.forEach(item => MAIN.prepend(item));
}

fetch(jsonFileProyectos)
	.then(response => response.json())
	.then(data => createItems(data));
