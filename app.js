//Variables

"use strict"
const formulario = document.getElementById("form");

const peso = document.getElementById("peso");

const altura = document.getElementById("altura");

const resultado_imc = document.getElementById("result");
//Eventos

Eventos();
function Eventos(){
    document.addEventListener("DOMContentLoaded", function(){
        console.log("OK");
    })

    formulario.addEventListener("submit", Obtener_valores)

}

//Funciones
function Obtener_valores(e){
    
    e.preventDefault();
    let x = peso.value;
    let y = altura.value;
    if(x == "" || isNaN(x) || y == "" || isNaN(y)){
        alert("Debes llenar todos los campos");
    }else{
  
        
        let resultado = x / (y*y);

        let div3 = document.getElementById("recomendaciones");
        div3.style.display = "block";

        if (resultado<18.5){ resultado_imc.innerHTML = "su peso está por debajo de lo normal"; div3.innerHTML="Es importante tener en cuenta la alimentación de la siguiente manera";}
        else if (resultado>=18.5 && resultado<=24.9){ resultado_imc.innerHTML ="su peso es normal"; div3.innerHTML="";}
        else if (resultado>= 25 && resultado<= 29.9){ resultado_imc.innerHTML = "usted tiene sobrepeso"; div3.innerHTML="";}
        else if(resultado> 30){ resultado_imc.innerHTML = " usted sufre de obesidad"; div3.innerHTML="Cuidado, es momento de prestar atención a su salud";}

        let div = document.getElementById("result2");
        div.innerHTML = resultado;
        let div2 = document.getElementById("resultado");
        div2.style.display = "block";
        
    }
}