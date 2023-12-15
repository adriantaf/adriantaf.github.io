'use strict';

const URL_BASE = 'http://192.168.0.14:3030/';
let jsonFile = URL_BASE + "src/js/data.json";

fetch(jsonFile)
	.then(response => response.json())
	.then(data => data);

function creteItems(data) {
	
}