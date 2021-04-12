for (let coche = 0; coche < 7; coche++) {
    if (coche == 0) {
        console.log("#")
    } else if (coche == 1) {
        console.log("##")
    } else if (coche == 2) {
        console.log("###")
    } else if (coche == 3) {
        console.log("####")
    } else if (coche == 4) {
        console.log("#####")
    } else if (coche == 5) {
        console.log("######")
    } else if (coche == 6) {
        console.log("#######")
    } else if (coche == 7) {
        console.log("########")
    } else {
        console.log("alerta aeropuerto")
    }
}
//******* */
let indicador = " "

for (let contador = 0; contador <= 7; contador++) {
    indicador += "#"
    console.log(indicador)
}
/************ */
let saludo = prompt('como te sientes hoy?');
switch (saludo) {
    case "bien":
        alert("solo bien?");
        break;
    case "muy bien":
        alert("estamos mejorando");
        break;
    case "Excelente compadre":
        alert("Asi es que me gusta!")
        break;

    default:
        alert("a tu paso")
        break;
}


//FizzBuzz

for (let entradas = 0; entradas <= 100; entradas++) {
    let contador = entradas;

    if (contador % 3 == 0) {
        // let Fizz = toString.contador;
        console.log(" Fizz")
    } else if (contador % 5 == 0) {
        console.log(" Buzz")
    } else if (contador % 3 && contador % 5) {
        console.log(" FizzBuzz")
    }
    console.log(contador);
}

/** Tablero de ajedrez */

let primerContador = " ";

for (let i = 0; i <= 8; i++) {
    if (i == 0) {
        console.log(" # # # #")
    } else if (i == 1) {
        console.log("# # # #")
    } else if (i == 2) {
        console.log(" # # # #")
    } else if (i == 3) {
        console.log("# # # #")
    } else if (i == 4) {
        console.log(" # # # #")
    } else if (i == 5) {
        console.log("# # # #")
    } else if (i == 6) {
        console.log(" # # # #")
    } else if (i == 7) {
        console.log("# # # #")
    } else {
        console.log("finalizado")
    }
}

for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        console.log("# # # #")
    } else {
        console.log(" # # # #")
    }
}

/**
 *
“La gente piensa que las ciencias de la computación son el arte de
los genios, pero la verdadera realidad es lo opuesto, estas solo
consisten en mucha gente haciendo cosas que se construyen una
sobre la otra, al igual que un muro hecho de piedras pequeñas.”
—Donald Knuth

Eloquent JavaScript
 */