'use strict';

const URL_BASE = 'https://adriantaf.github.io/';
let jsonFileProyectos = URL_BASE + "src/json/proyectos.json";

const MAIN = document.getElementById('main');
const TEMPLATE_PROYECTO = document.getElementById('template-proyecto').content;

function createItems(data) {
	let elementosOrdenados = [];

	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		let clonTemplate = document.importNode(TEMPLATE_PROYECTO, true);
		let fragment = document.createDocumentFragment();
		fragment.appendChild(clonTemplate);

		fragment.getElementById('nombre').innerText = element.nombre;
		fragment.getElementById('descripcion').innerText = element.descripcion;
		fragment.getElementById('version').innerText = parseFloat(element.version);
		fragment.getElementById('tecnologias').innerText = element.tecnologias[0];
		fragment.getElementById('estado').innerText = element.estado ? "Completado" : "En proceso";

		// LINK
		if (element.preview) {
			fragment.getElementById('link').href = `https://adriantaf.github.io/${element.id}`;
		} else {
			fragment.getElementById('link').parentNode.removeChild(fragment.getElementById('link'));
		}
		// ICONO TOP
		if (!element.is_top) {
			fragment.getElementById('top-icon').parentNode.removeChild(fragment.getElementById('top-icon'));
			// CONTAINER ACTIONS
			if (!element.preview) {
				fragment.getElementById('cont-actions').parentNode.removeChild(fragment.getElementById('cont-actions'));
			}
		}
		if (element.src.length < 2) {
			fragment.getElementById('scroll-icon').parentNode.removeChild(fragment.getElementById('scroll-icon'));
		}

		let fragmentImages = document.createDocumentFragment();
		element.src.forEach(srcImage => {
			let image = document.createElement('img');
			image.src = `./res/img-proyectos/${srcImage}`;
			image.classList.add('card__slider__img');
			fragmentImages.appendChild(image);
		});		

		fragment.getElementById('slider').append(fragmentImages);

		element.is_top ? elementosOrdenados.unshift(fragment) : elementosOrdenados.push(fragment);
	}

	elementosOrdenados.forEach(item => MAIN.appendChild(item));
}

fetch(jsonFileProyectos)
	.then(response => response.json())
	.then(data => createItems(data));
