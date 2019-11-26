//--------------CLASE-01-05---------------//
/*
console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

//Constate promesa, la cual ejecuta todoBien o todoMal
//cuando ocurre o no la ejecucion.
const getUser = new Promise(function(todoBien, todoMal){
	// llamar a un api
	setTimeout(function(){
		//Luego de 3s se ejecuta lo sig.
		//Este si llama la funcion con corchetes y su respectivo parametro.
		todoBien('Se acabó el tiempo 1');
	}, 3000)
})

//Otra promesa, pero con el tiempo de 5s.
const getUserAll = new Promise(function(todoBien, todoMal){
	// llamar a un api
	setTimeout(function(){
		//Luego de 3s se ejecuta lo sig.
		//Este si llama la funcion con corchetes y su respectivo parametro.
		todoBien('Se acabó el tiempo 2');
	}, 5000)
})

//Primer param
function todoBien(message){
	console.log(message);
}

//Segundo param
function todoMal(message){
	console.log(message)
}

//Lamado de la promesa, con las funciones como param.
getUser
.then(todoBien)
//No se agregan parametros, solo se indica la funciona a llamarse.
.catch(todoMal)

//Varias problemesas, que si salen bien, solo obtendran 1 respuesta.
Promise.all([
	getUser,
	//Este como se demora 5s, la promesa terminara en 5s, no en 3
	//como lo es la primera promesa (getUser)
	getUserAll,
])
.then(todoBien)
.catch(todoMal)

//Si almenos uno sale mal, se ejecuta 1 vez el catch
//Si todo sale bien, se obtiene un array con las respectivas respuestas.


//Con prommise.race, se ejecuta solo la primera promesa
proimise.race([
	getUser,
	getUserAll,
])
.then(todoBien)
.catch(todoMal)


*/
//--------------CLASE-06---------------//

/*
//Ajax de JQuery
$.ajax('https://randomuser.me/api/',{
	method: 'GET',
	success: function(data){
		console.log(data)
	},
	error: function(error){
		console.log(error)
	}
});


//Vanilla JS | XMLHttpRequest

fetch('https://randomuser.me/api/')
.then(function(response){
	//console.log(response)
	return response.json()
})
.then(function(user){
	console.log('user', user.results[0].name.first)
})
.catch(function(){
	console.log('algo fallo')
})
*/
//--------------CLASE-07---------------//
/*
////Version 1
//(async function load(){
//	//Esto sirve para esperar la peticion a la API.
//	
//	const response = await fetch('https://yts.lt/api/v2/list_movies.json?genre=action')
//	const data = await response.json()
//	console.log(data)
//})()

//Version 2
(async function load(){
	//Esto sirve para esperar la peticion a la API.
	async function getData(url){
		const response = await fetch(url)
		const data = await response.json()
		return data;
	}
	
	const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
	const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
	console.log(actionList)
	console.log(animationList)
})()
	
//Se puede usar load() para carga la funcion, pero se 'envuelve'
//en (async fun.... ()) para que se ejecute inmediatamente.
*/
//--------------CLASE-08-09-10---------------//
(async function load(){

//Funcion que hace la conexion con la API.
async function getData(url){
	const response = await fetch(url)
	const data = await response.json()
	return data;
}

//Listas de peliculas, traidos mediante API.
const actionList = await getData('https://yts.lt/api/v2/list_movies.json?genre=action')
const dramaList = await getData('https://yts.lt/api/v2/list_movies.json?genre=drama')
const animationList = await getData('https://yts.lt/api/v2/list_movies.json?genre=animation')

console.log(actionList, dramaList, animationList)
	
//vanilla template
function videoItemTemplate(movie){
	return (
		`<div class="primaryPlaylistItem">
			<div class="primaryPlaylistItem-image">
	  			<img src="${movie.medium_cover_image}">
			</div>
			<h4 class="primaryPlaylistItem-title">
	  			${movie.title}
			</h4>
		</div>`
	)
}


const $actionContainer 		= document.querySelector('#action');

actionList.data.movies.forEach( movie => {
	const HTMLString = videoItemTemplate(movie)
	//Esta funcion convierte un string a un DOM de HTML
	const html = document.implementation.createHTMLDocument()
	//Esta linea añade, dentro del body, el string.
	html.body.innerHTML = HTMLString;
	//Esta linea, coge el body del html creado, y saca su primer hijo,
	//que en este caso son los tamplates de peliculas.
	$actionContainer.append(html.body.children[0])
	console.log(HTMLString);
})
	
	
	
//--------DOM---------//

const $dramaContainer 		= document.getElementById('#drama');
const $animationContainer 	= document.getElementById('#animation');

const $featuringConteiner 	= document.getElementById('#featuring');
const $form 	= document.getElementById('#form');
const $home 	= document.getElementById('#home');


const $modal = document.getElementById('modal')
const $overlay = document.getElementById('overlay')
const $hideModal = document.getElementById('hide-modal')


//Este codigo busca una etiqueta 'img' dentro del elemento guardado en $modal.
const $modalTitle 		= $modal.querySelector('h1')
const $modalImg 		= $modal.querySelector('img')
const $modalDescription = $modal.querySelector('p')

})()





////Como se haria en JQuery
//'<div class="primaryPlaylistItem">' +
//	'<div class="primaryPlaylistItem-image">' +
//	  '<img src='+ imgSrc +'>' +
//	'</div> '+
//	'<h4 class="primaryPlaylistItem-title">' +
//	  'Titulo de la peli' +
//	'</h4>' +
//'</div>'








//--------------CLASE-0---------------//
//--------------CLASE-0---------------//
//--------------CLASE-0---------------//
//--------------CLASE-0---------------//
//--------------CLASE-0---------------//
//--------------CLASE-0---------------//
//--------------CLASE-0---------------//


















