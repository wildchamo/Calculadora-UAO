function Calcular() {
    let input1 = document.getElementById("InputValor1")
    let value1 = parseInt(input1.value);
    let input2 = document.getElementById("InputValor2")
    let value2 = parseInt(input2.value);
    let operacion = document.getElementById("inputOperacion");
    let valorOperacion = operacion.value;

    res = 0;


    if (valorOperacion === "sumar") {
        res=sumar(value1, value2);
    } else if (valorOperacion === "restar") {
        res=restar(value1, value2);
    } else if (valorOperacion === "multiplicar") {
        res=multiplicar(value1, value2);
    } else {
        res=dividir(value1, value2);
    }

    document.getElementById("result").innerHTML = "<strong>" + res + "</strong>";
}



function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}
 let operacion = document.getElementById("inputOperacion");
    let valorOperacion = operacion.value;