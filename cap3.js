/**
 * Ejercicios
    Mínimo
    El capítulo anterior introdujo la función estándar Math.min que devuelve su
    argumento más pequeño. Nosotros podemos construir algo como eso ahora.
    Escribe una función min que tome dos argumentos y retorne su mínimo.
 */

const minNumero = (n1, n2) => {
    let arreglo = [n1, n2];
    let final = Math.min(...arreglo)
    return final;
}

minNumero(5, 12);


