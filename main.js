 let input1=document.getElementById("valor1");
 let valor1=input1.value;
let input2=document.getElementById("valor2");
let valor2=input2.value;
let operacion= document.getElementById("inputOperacion");
let valorOperacion= operacion.value;


//let valorvalor =sumar(valor1,valor2)
//



function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b
}
function multiplicar(a,b){
    return a*b;
}

function dividir (a,b){
    return a/b;
}


function Calcular(valorOperacion){
    let res = 0

    if(valorOperacion==="Sumar"){
        sumar(valor1, valor2);
    }else if(valorOperacion==="Restar"){
        restar(valor1, valor2);
    }else if(valorOperacion==="Multiplicar"){
        multiplicar(valor1,valor2);
    }else{
        dividir(valor1,valor2)
    }
    resultado.innerHTML = "<strong>"+ res + "</strong>";
}

function OnClick(){
    Calcular(valorOperacion);
}