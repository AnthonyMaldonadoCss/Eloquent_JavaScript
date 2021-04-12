
/** 
 * Funciones
*/


const cuadrado = function (x) {
    return x * x;
}
console.log(cuadrado);

// Funcion sin parametros

const hacerSonido = function () {
    console.log("pling!")
}
// pling!


// Funcion con parametros

const potencia = function (base, exponente) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
};
console.log(potencia(2, 10));
//1024

/**
 * Vinculaciones y alcances
 */

/**
 * Cada vinculación tiene un alcance, que corresponde a la parte del programa en
 * donde la vinculación es visible.
 */

let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
    // > 60
}
/**
 * y no es visible desde aqui
 */
console.log(x + z);
// > 40

/**
 * cuando en el programa se repite la variable, la funcion solo ve su propia variable, no la global
 */

const dividirEnDos = function (numero) {
    return numero / 2;
}
let numero = 10;
console.log(dividirEnDos(100))
// > 50
console.log(numero)
// > 10

/**
 * Funciones como valores
 */
/**
 * es posible almacenar el valor de una funcion dentro de una variable y pasarla como parametro a otra funcion
 */

let lanzarMisiles = function () {
    sistemaDeMisiles.lanzar("ahora");
};
if (modoSeguro) {
    lanzarMisiles = function () {/*no hacer nada */ }
}

/**
 * notacion de declaracion
 */

function cuadrado() {
    return x * x;
}
console.log("el futuro dice:", futuro());

function futuro() {
    return "nunca tendran autos voladores";
}
/**
 * las declaraciones de funciones no son parte
 * del flujo de control regular
 * de arriba hacia abajo
 */

/**
 * Funciones de flecha
 */

const potencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < base; cuenta++) {
        resultado *= base;
    }
    return resultado;
}