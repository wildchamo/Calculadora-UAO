let input1=document.getElementById("valor1");
let num1=input1.value;  

let input2=document.getElementById("valor2");
let num2=input2.value;

let operacion= document.getElementById("inputOperacion");
let valorOperacion= operacion.value;

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
        sumar(num1, num2);
    }else if(valorOperacion==="Restar"){
        restar(num1, num2);
    }else if(valorOperacion==="Multiplicar"){
        multiplicar(num1,num2);
    }else{
        dividir(num1,num2);
    }
    document.getElementById("result").innerHTML = "<strong>"+ res + "</strong>";
}

function OnClick(){
    Calcular(valorOperacion);
}