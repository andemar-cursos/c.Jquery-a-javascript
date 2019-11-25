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

/*//Lamado de la promesa, con las funciones como param.
getUser
.then(todoBien)
//No se agregan parametros, solo se indica la funciona a llamarse.
.catch(todoMal)*/

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

/*
//Con prommise.race, se ejecuta solo la primera promesa
proimise.race([
	getUser,
	getUserAll,
])
.then(todoBien)
.catch(todoMal)
*/