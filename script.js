// var myName = undefined // esto ocurre detras de camaras por medio de hoisting
// function myFunction(){ ... }

console.log("probando")

//* HOISTING => proceso de prelecture que ocurre en JS donde se cojen las variables creadas con "var" y funciones creadas con "function" y se suben al inicio del código.

// console.log("antes de declarar", myAge) // ReferenceError: Cannot access 'myAge' before initialization
console.log("antes de declarar", myName)

let myAge = 42;
var myName = "jorge"

console.log("despues de declarar", myAge)
console.log("despues de declarar", myName)

// let myAge = 43; // SyntaxError: Identifier 'myAge' has already been declared
var myName = "bob"
console.log("despues de crear la nueva variable, mismo nombre", myName)


// que ocurren con funciones?


myFunction() // 

function myFunction() {
  console.log("ejecutando la funcion")
}

myFunction()

// eston pudiese ser un problema.
function myFunction() {
  console.log("nueva funcion con el mismo nombre")
}

myFunction()



//* SCOPES


// SCOPE GLOBAL

let myHobby = "cocinar"
// esta variable va a ser accesible EN CUALQUIER LUGAR de mi código.

function unaFuncion() {
  for(let i = 0; i < 10; i++) {
    if (true) {
      console.log(myHobby)
    }
  }
}
unaFuncion()


// SCOPE DE BLOQUE

{
  let myString1 = "variable creada con let" // buena practica
  console.log(myString1)
  var myString2 = "variable creada con var" // mala practica
  console.log(myString2)
  myString3 = "variable creada sin palabra clave. variable global." // MUY mala practica
  console.log(myString3)

  // Al final del bloque, viene un recolector de basuras que elimina todas las variables creadas dentro (con let o const)
}

// console.log(myString1) // ReferenceError: myString1 is not defined
console.log(myString2)
console.log(myString3)


// SCOPE DE FUNCIONES

function someValues() {
  
  let myNumber1 = 10; // buena practica
  var myNumber2 = 11; // mala practica, pero se comporta similar a let o const
  myNumber3 = 12; // MUY mala practica
  
  // Al final del scope, viene un recolector de basuras que elimina todas las variables creadas dentro (con let, const o var)
}

someValues()


// Conclusiones

/* 

- Nunca usar var
- al usar funciones "function" consideras concepto de hoisting
- intentar usar funciones de flecha y adaptarse a la sintaxis
- SIEMPRE declarar las variables
- Estos conceptos son complejos y avanzados. Se usan comunmente en entrevistas tecnicas.

*/


//* REFERENCIAS


let candy1 = 10;
let candy2 = 10;

console.log(candy1 === candy2) // true
//            10   ===  10     // true

let numbersArr1 = [20, 24, 32] // ref. 1234
let numbersArr2 = [20, 24, 32] // ref. 5678

console.log( numbersArr1 === numbersArr2 ) // false
//            ref 1234   ===   ref 5678    // false

console.log( numbersArr1[0] === numbersArr2[0] ) // true

let numbersArr3 = numbersArr1 // cuando asignamos un array sobre otro, estamos pasando su referencia. // ref. 1234

console.log( numbersArr3 === numbersArr1 ) // true
//            ref 1234   ===   ref 1234    // true


numbersArr3.pop() // ref 1234
console.log(numbersArr3)

// que ocurrio con el original?

console.log(numbersArr1)



// ACTIVIDAD


function magicHat(obj) {

  // let abj = rabbit1 // ref 1234

  obj.age = 10; // ref 1234
  obj = { name: "Ada", age: 20 }; // ref 5678
  return obj; // ref 5678
}
  
const rabbit1 = { name: "Bob", age: 30 }; // ref 1234
  
const rabbit2 = magicHat(rabbit1); // ref 5678
  
console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);


// CLASSES EN JS


// como creamos la clase? la plantilla para fabricar objetos.

class Hero {

  constructor(name, secretIdentity) {
    // aqui es donde definimos las propiedades de los objetos a fabricar
    this.name = name;
    this.secretIdentity = secretIdentity; // propiedades dinamicos
    this.isEvil = false; // propiedades estaticas
    this.weapons = []
  }

  // aqui es donde definimos los metodos de los objetos a fabricar
  revealSecretIdentity() {
    return `Yo, ${this.name}, revelo que mi identidad secreta es: ${this.secretIdentity}`
  }

  // podemos hacer metodos como funciones de flecha
  turnEvil = () => {
    this.isEvil = true;
    return `Yo, ${this.name} me he vuelto villano, MUAAHAHAHAA!`
  }

}


let hero1 = new Hero( "Iron Man", "Tony Stark" ) // estamos fabricando 1 objeto
console.log( hero1 )
console.log( hero1.name )
console.log( hero1.revealSecretIdentity() )

let hero2 = new Hero( "Black Widow", "Natasha Romanoff" ) // estamos fabricando 1 objeto
console.log(hero2)
console.log( hero2.revealSecretIdentity() )


let hero3 = new Hero( "Batman", "Bruce Wayne" ) // estamos fabricando 1 objeto
console.log(hero3)
console.log( hero3.revealSecretIdentity() )
console.log( hero3.turnEvil() )

console.log(hero3.isEvil)

