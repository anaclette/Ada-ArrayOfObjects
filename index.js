const gatos = [
	{
		name: 'Rodolfo',
		shortDesc: 'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
		longDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
		img: 'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
		colores: [ 'tricolor', 'negro', 'blanco', 'naranja', 'rayado' ],
		sexo: 'm'
	},

	{
		name: 'Muzzarella',
		shortDesc: 'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
		longDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
		img: 'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
		colores: [ 'gris' ],
		sexo: 'f'
	},

	{
		name: 'Artilugia',
		shortDesc: 'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
		longDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
		img:
			'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
		colores: [ 'negro', 'blanco' ],
		sexo: 'f'
	},

	{
		name: 'Wosito',
		shortDesc: 'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
		longDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
		img:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
		colores: [ 'rayado' ],
		sexo: 'm'
	},

	{
		name: 'Calamardo',
		shortDesc: 'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
		longDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
		img: 'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
		colores: [ 'negro' ],
		sexo: 'm'
	}
];

const seccionPrincipal = document.querySelector('.adopt');

const mostrarEnHTML = (array) => {
	seccionPrincipal.innerHTML = '';
	array.map((gato) => {
		seccionPrincipal.innerHTML += `
		<div class="card">
		<div class="card_img">
		<img src="${gato.img}" />
		</div>
		<div class="card_info">
		<h3>${gato.name}</h3>
		<p>${gato.shortDesc}</p>
		<button id="ver-mas"> Ver mas </button>
		<i id="corazon" class="fa fa-heart"></i> <p id="likes">0</p>
		</div>
		`;
	});
};

mostrarEnHTML(gatos);

const corazones = document.querySelectorAll('#corazon');
const likes = document.querySelectorAll('#likes');
// likes ahora es un array
let cantidadDeLikes = Number(likes.textContent);
// corazon.onclick = () => {
// 	cuantosLikes++;
// 	likes.textContent = cuantosLikes;
// };
// esto no funciona porque es un NodeList, no es un array
// array son estructuras exclusivas de Javascript
// NodeList son estructuras exclusivas de DOM
// metodos de arrays no pueden aplicarse a listas de nodos
// por eso para trabajar con nodos, no podremos usar MAP sino que deberemos usar for
// para recorrer listas de nodos con Javascript usamos forEach
// la diferencia entre un forEach y un map, es que forEach no retorna nada, map retorta un array.
// forEach se puede usar tanto para Javascript como para listas de nodos

corazones.forEach((corazon, indiceCorazon) => {
	corazon.onclick = () => {
		// console.log('me hicieron click', indiceCorazon);
		let cantidadDeLikes = Number(likes[indiceCorazon].textContent);
		cantidadDeLikes++;
		likes[indiceCorazon].textContent = cantidadDeLikes;
		// sinonimo de:
		// likes.forEach((like, indiceLike) => {
		// 	if (indiceCorazon === indiceLike) {
		// 		let cantidadDeLikes = Number(like.textContent);
		// 		cantidadDeLikes++;
		// 		like.textContent = cantidadDeLikes;
		// 	}
	};
});

const verMas = document.querySelectorAll('#ver-mas');
const modal = document.querySelector('#modal');
const botonCerrar = document.querySelector('.cerrar-modal');
const contenidoModal = document.querySelector('.contenido-modal');
const overlay = document.querySelector('.overlay');

verMas.forEach((boton, indiceBoton) => {
	boton.onclick = () => {
		overlay.classList.remove('oculto');
		modal.classList.remove('oculto');
		contenidoModal.innerHTML = `
		<div class="imagen">
                <img src="${gatos[indiceBoton].img}">
            </div>
            <div class="texto">
                <h3>${gatos[indiceBoton].name}</h3>
                <p>${gatos[indiceBoton].longDesc}</p>
            </div>

            <div class="mas-datos">
                <span>${gatos[indiceBoton].colores}</span><span>${gatos[indiceBoton].sexo}</span>

            </div>
		`;
	};
});

botonCerrar.onclick = () => {
	overlay.classList.add('oculto');
	modal.classList.add('oculto');
};

const form = document.querySelector('form');

form.onsubmit = (e) => {
	e.preventDefault();
	const radios = document.querySelectorAll('input[type=radio]');
	// console.log(radios);
	radios.forEach((radio) => {
		if (radio.checked) {
			// console.log(radio.value);
			seccionPrincipal.innerHTML = '';

			if (radio.value === 'i') {
				return mostrarEnHTML(gatos);
			} else {
				const gatosFiltrados = gatos.filter((gato) => {
					return gato.sexo === radio.value;
				});
				mostrarEnHTML(gatosFiltrados);
			}
		}
	});
};

// PARADIGMAS
// Los paradigmas son distintas formas de resolver problemas

// Paradigma funcional
// Si tenemos un problema, necesitamos una funcion.
// Prohibe usar funciones impuras

// POO Programacion Orientada a Objetos
// Si tenemos un problema, necesitamos un objeto.

// Funciones puras e impuras
// Funciones puras trabajan solo con info contenida dentro de sí sin modificar nada fuera de su scope. Dados los mismos parámetros de entrada, tendremos la misma info de salida.
// No tiene efectos secundarios o colaterales

// Ejemplo de sus diferencias:
let numero = 18;
const funcionImpura = () => {
	numero++;
};
funcionImpura();
console.log(numero);
// si ahora la ejecuto de nuevo cambiara su resultado

const funcionPura = (numeroParam) => {
	numeroParam++;
	return numeroParam;
};
const primero = funcionPura(numero);
const segundo = funcionPura(numero);
console.log(primero);
console.log(segundo);
// no tiene efectos secundarios ni modifiqué nada por fuera del scope

// Siempre tratamos de trabajar con funciones puras ya que dados los mismos parametros de entrada y obteniendo los mismos de salida, deberia ser un principio que cumplan todas las funciones
// Toda funcion deberia ser lo mas cercana posible a un algoritmo, y en todo algoritmo la info de entrada debe coincidir con el resultado o la info de salida. Esa es la definicion de algoritmo y es la manera de pensar de la PC.

// Las funciones impuras, a diferencia de las puras, son imposibles de testear, porque si le paso cierta info de entrada, no hay manera de saber cuál será la de salida
// ejemplo:
const baneadas = [ 'Marian', 'Angie', 'Euge', 'Agus' ];
const agregarAArray = (array, elemento) => {
	return array.push(elemento);
};
console.log(agregarAArray(baneadas, 'Ana'));
console.log(agregarAArray(baneadas, 'Ana'));
console.log(agregarAArray(baneadas, 'Ana'));
console.log(agregarAArray(baneadas, 'Ana'));
// esta es una funcion impura porque el .push modifica el array original
// ahora retorna la nueva posicion del array, un numero
// esta funcion tiene efectos colaterales porque modifica la informacion de salida y no puedo saberlo viendo la función, no tengo claro qué es lo que devolverá al ejecutarla

// Siempre es mejor usar funciones breves y funciones puras

// .pop, .shift, .unshift, .push son metodos impuros y modifican el array original

// forEach vs map
// baneadas.forEach((baneada, i) => {
// 	baneadas[i] = baneada.toUpperCase();
// });
// console.log(baneadas);
// No se aconseja usar forEach en estos casos porque como no retorna nada, es probable que modifiquemos el array original por necesidad, para obtener lo que quiero
// podria entonces hacer:
const baneadasEnMayuscula = [];
baneadas.forEach((baneada, i) => {
	baneadasEnMayuscula[i] = baneada.toUpperCase();
});
console.log(baneadas);
console.log(baneadasEnMayuscula);
// pero no es óptimo ni certero y tiene amplio margen de error
// forEach se aconseja NO usarlo a menos que no quede opción, como cuando trabajamos con elementos de HTML
// en todos los demas casos usaremos .map, .filter, etc

// map retorna info y por lo tanto no necesito modificar el array original para obtener la info que quiero.
// en general, NUNCA modificamos el array original

// Otro principio de programacion:
// siempre tener una única fuente de verdad, es decir un lugar donde está la información sin modificar

// la forma correcta de copiar un array:
const baneadasLargo = [ ...baneadas ];
// la forma correcta de modificar un array:
const baneadasMasLargo = baneadas.map((baneada) => {
	return baneada;
});
// esta funcion está haciendo exactamente lo mismo que la copia de array anterior. Recorre el array y retorna los mismos elementos del array
baneadasMasLargo.push('Sol');
console.log(baneadas);
console.log(baneadasMasLargo);

// arrays y objetos no se guardan en memoria sino que se guarda una referencia de ellos. Por lo tanto cuando modifico la copia de uno, modifico tambien el original.
// Operaciones inmutables. Cómo efectuar copias seguras que no modifiquen el array original
// el sistema de los ... sirve para arrays tanto como:
const copiaBaneadas = baneadas.map((b) => {
	return b;
});
// Copias seguras de objetos
const copiaDeObjeto = { ...gatos };

// Operador spread o propagacion
// Ejemplo:
const arrayGente = [ 'lola', 'mora', 'pola' ];
const masGente = [ 'rodolfo', 'pipo', 'juan' ];

const dosArrays = [ ...arrayGente, ...masGente ];
// esta funcion toma todos los elementos de arrayGente y los coloca dentro de un array nuevo, y todos los elementos de masGente los coloca dentro de un array nuevo
// lo mismo podemos hacer con objetos:

const persona = {
	nombre: 'Ana',
	apodo: 'pocha'
};
const persona2 = {
	nombre: 'Roberto',
	apodo: 'tito'
};
const dosObjetos = { ...persona, ...persona2 };
console.log(dosArrays);
console.log(dosObjetos);

// tambien podemos agregar un elemento al array utilizando esa misma propiedad, o una propiedad al objeto sin modificar el objeto original:

const agregarPersona = [ ...arrayGente, 'persia' ];
const agregarPropiedad = { ...persona, edad: 28 };
console.log(agregarPersona);
console.log(agregarPropiedad);
// son objetos inmutables ya que no modificaran el objeto
// puedo agregar info sin temor a modificar el array u objeto original

// ABM Alta - Baja - Modificacion
// tambien puedo eliminar elementos
const { nombre, apodo } = persona;
// esto quiere decir que adentro del objeto persona hay una propiedad que se llama nombre y otra apodo
const { edad, ...masDatos } = persona;
console.log(masDatos);
// me hice una copia de persona, eliminando la propiedad EDAD

// tambien puedo modificar propiedades de un elemento
const personaActualizada = { ...persona2, apodo: 'rober' };
console.log(personaActualizada);

// estas son las tres operaciones basicas inmutables cuando trabajamos con objetos
// puedo agregar, actualizar y borrar informacion al objeto
