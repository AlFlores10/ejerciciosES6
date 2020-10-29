// 1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.

let ejercicio1 = ['Cristiano', 'Messi', 'Neymar', 'Mbappe'];
ejercicio1.sort();
console.log(ejercicio1);


// 2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es.

let ejercicio2 = ['Cristiano', 'Messi', 'Neymar', 'Mbappe'];
console.log(Array.isArray(ejercicio2));


// 3 - Construye una función capaz de clonar un array.

const clonarArray = (array)=> {
    let newArray = JSON.stringify(array);
    newArray = JSON.parse(newArray);
    return newArray;
};
let arrayClonada = clonarArray(ejercicio2);
console.log(arrayClonada);


// 4 - Escribe una función capaz de borrar elementos duplicados del siguiente array.

let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

const borraArray = (array) => {
    let newArray = array.filter((elem, index) => array.indexOf(elem) === index);
    return newArray;
};
let arrayBorrada = borraArray(array1);
console.log(arrayBorrada);


// 5 - Escribe una función capaz de concatenar dos arrays.

let array2 = [1,2,3,4,5,6,7,8,9]; let array3 = [10,11,2,3,4,12,13,14,15];

const concatenaArray = (arg1, arg2) => {
    let newArray = arg1.concat(arg2);
    return newArray;
};
let arrayConcatenada = concatenaArray(array2, array3);
console.log(arrayConcatenada);


// 6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.

const excluyeArray = (arg1) => {
    let excluye = arg1.filter((elem, index) => arg1.indexOf(elem) === index);
    return excluye;
};
let arrayExcluida = excluyeArray(arrayConcatenada);
console.log(arrayExcluida);

// 7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
// es primo o no.

const numPrimos = (numero) => {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  };
let resultadoPrimos = numPrimos(5);
console.log(resultadoPrimos);



// 8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, una vez hecho esto, pedirá un número al usuario 
// mediante prompt y comprobará si el número introducido coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un 
// resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido por el usuario será del 1 al 10. 

const crearNumAleatorio = () =>{
	const promesaNum = new Promise((resolve, reject)=>{

        let arrayAleatoria = [];

        for (let i = 0; i < 5; i++) {
          let numAleatorio = Math.floor(Math.random() * 10);
          arrayAleatoria.push(numAleatorio);
        }

        let numUsuario = parseInt(prompt('Introduce un numero para verificar'));
        let resultado = arrayAleatoria.find( numUsuario => numUsuario == arrayAleatoria);
        if(resultado == true) {
          resolve.json(console.log('El numero se encuentra en el array'));
        }else {
          reject.json(console.log('El numero NO se encuentra en el array'));
        }
  });
	return promesaNum;
}

crearNumAleatorio()
.then()
.catch();

