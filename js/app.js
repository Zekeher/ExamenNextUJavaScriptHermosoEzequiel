// Variables declaradas Globales
var numberSave;
var resultado;
var valor1 = 0;
var valor2 = 0;
var operation = null;
var addSigno = "+";
var addPunto = null
var calculadora = document.getElementById("display");

// Animacion al presionar o cliclear un boton
function pressButton(boton){
  document.getElementById(boton).style.transitionDuration = "1s";
  setTimeout(function(){document.getElementById(boton).style.transform = "scale(0.8)"}, 100);
  setTimeout(function(){document.getElementById(boton).style.transform = "scale(1)"}, 350);

}

// Detector de presionar tecla
document.onkeypress = function(data){
  switch (data.key) {
    case "0" : addNumeros(0); pressButton("0"); break;
    case "1" : addNumeros(1); pressButton("1"); break;
    case "2" : addNumeros(2); pressButton("2");break;
    case "3" : addNumeros(3); pressButton("3");break;
    case "4" : addNumeros(4); pressButton("4");break;
    case "5" : addNumeros(5); pressButton("5");break;
    case "6" : addNumeros(6); pressButton("6");break;
    case "7" : addNumeros(7); pressButton("7");break;
    case "8" : addNumeros(8); pressButton("8");break;
    case "9" : addNumeros(9); pressButton("9");break;
    case "*" : multiplicar(); pressButton("por");break;
    case "+" : sumar(); pressButton("mas"); break;
    case "-" : restar(); pressButton("menos"); break;
    case "/" : dividir(); pressButton("dividido"); break;
    case "." : punto(); pressButton("punto"); break;
    case "Enter" : resultado(); pressButton("igual"); break;
    case "=" : resultado(); pressButton("igual"); break;
    default:break;
  }
}
// Detector al cliclear un boton
document.onmousedown = function(data){
  pressButton("" +data.srcElement.id + "");

  switch (data.srcElement.id) {
    case "on" : borrarNumber(); break;
    case "0" : addNumeros(0); break;
    case "1" : addNumeros(1); break;
    case "2" : addNumeros(2); break;
    case "3" : addNumeros(3); break;
    case "4" : addNumeros(4); break;
    case "5" : addNumeros(5); break;
    case "6" : addNumeros(6); break;
    case "7" : addNumeros(7); break;
    case "8" : addNumeros(8); break;
    case "9" : addNumeros(9); break;
    case "sign" : sign(); break;
    case "por" : multiplicar(); break;
    case "mas" : sumar(); break;
    case "menos" : restar(); break;
    case "dividido" : dividir(); break;
    case "punto" : punto(); break;
    case "igual" : resultado(); break;
    default:break;
  }
}

// Declaraciones de Funciones

/** Funcion Borrar */
function borrarNumber(){
  calculadora.innerHTML = 0;
  addPunto = null;
  addSigno = "+";
  operation = null;
  valor1 = 0;
  valor2 = 0;
}
/** Funcion Sumar */
function sumar(){
  if((calculadora.innerHTML === 0 || calculadora.innerHTML === "0") && valor2 === 0){
    console.log("debe ingresar un numero");
  }else{
    if(operation !== "sum"){
      console.log(calculadora.innerHTML)
      valor1 = parseFloat(calculadora.innerHTML);
      console.log(valor1)
      calculadora.innerHTML = 0;
      valor2 = 0;
      operation = "sum";
    }else{
        if(valor2 !== 0){
          valor1 = parseFloat(calculadora.innerHTML);
          var resultSum = valor1 + valor2;
          calculadora.innerHTML = resultSum;
          console.log(calculadora.innerHTML.length);
        }else{
          if(calculadora.innerHTML === 0 || calculadora.innerHTML === "0"){
            console.log("debe ingresar un numero");
          }else{
        valor2 = parseFloat(calculadora.innerHTML);
        var resultSum = valor1 + valor2;
        calculadora.innerHTML = resultSum;
        }
      }
    }
  }
}

/** Funcion Restar */
function restar(){
  if((calculadora.innerHTML === 0 || calculadora.innerHTML === "0") && valor2 === 0){
    console.log("debe ingresar un numero");
  }else{
    if(operation !== "rest"){
      valor1 = parseFloat(calculadora.innerHTML);
      calculadora.innerHTML = 0;
      valor2 = 0;
      operation = "rest";
    }else{

        if(valor2 !== 0){
          valor1 = parseFloat(calculadora.innerHTML);
          var resultRest = valor1 - valor2;
          calculadora.innerHTML = resultRest;
        }else{
          if(calculadora.innerHTML === 0 || calculadora.innerHTML === "0"){
            console.log("debe ingresar un numero");
          }else{
        valor2 = parseFloat(calculadora.innerHTML);
        var resultRest = valor1 - valor2;
        calculadora.innerHTML = resultRest;
        }
      }
    }
  }
}

/** Funcion Dividir */
function dividir(){
  if((calculadora.innerHTML === 0 || calculadora.innerHTML === "0") && valor2 === 0){
    console.log("debe ingresar un numero");
  }else{
    if(operation !== "div"){
      valor1 = parseFloat(calculadora.innerHTML);
      calculadora.innerHTML = 0;
      valor2 = 0;
      operation = "div";
    }else{

        if(valor2 !== 0){
          valor1 = parseFloat(calculadora.innerHTML);
          var resultDiv = valor1 / valor2;
          calculadora.innerHTML = resultDiv;
        }else{
          if(calculadora.innerHTML === 0 || calculadora.innerHTML === "0"){
            console.log("debe ingresar un numero");
          }else{
        valor2 = parseFloat(calculadora.innerHTML);
        var resultDiv = valor1 / valor2;
        calculadora.innerHTML = resultDiv;
        }
      }
    }
  }
}

/** Funcion Multiplicar */
function multiplicar(){
  if((calculadora.innerHTML === 0 || calculadora.innerHTML === "0") && valor2 === 0){
    console.log("debe ingresar un numero");
  }else{
    if(operation !== "multi"){
      valor1 = parseFloat(calculadora.innerHTML);
      calculadora.innerHTML = 0;
      valor2 = 0;
      operation = "multi";
    }else{

        if(valor2 !== 0){
          valor1 = parseFloat(calculadora.innerHTML);
          var resultMulti = valor1 * valor2;
          calculadora.innerHTML = resultMulti;
        }else{
          if(calculadora.innerHTML === 0 || calculadora.innerHTML === "0"){
            console.log("debe ingresar un numero");
          }else{
        valor2 = parseFloat(calculadora.innerHTML);
        var resultMulti = valor1 * valor2;
        calculadora.innerHTML = resultMulti;
        }
      }
    }
  }
}

/** Funcion Resultado segun la operacion deseada */
function resultado(result){
  if((calculadora.innerHTML === 0 || calculadora.innerHTML === "0") && valor2 === 0){
    console.log("debe ingresar un numero o realizar una operacion");
  }else{
    if(operation === "sum"){
      sumar();
    }
    if(operation === "rest"){
      restar();
    }
    if(operation === "div"){
      dividir();
    }
    if(operation === "multi"){
      multiplicar();
    }
  }
}

/** Funcion Agregar Punto */
function punto(){
  if(addPunto !== "."){
    if(calculadora.innerHTML === "0"){
      calculadora.innerHTML = "0."
      addPunto = "."
    }else{
      calculadora.innerHTML += "."
      addPunto = "."
    }
  }
}

/** Funcion Cambiar de signo */
function sign(){
  if(calculadora.innerHTML === "0"){}else{
    if(addSigno === "+"){
      addSigno = "-"
      numberSave = calculadora.innerHTML.split("-");
      if(numberSave[1] === null || numberSave[1] === undefined || numberSave[1] === "undefined" || numberSave[1] === "null"){
        numberSave = calculadora.innerHTML;
      } else{
        numberSave = numberSave[1];
      }
      calculadora.innerHTML = "-" + numberSave;
    }else{
      addSigno = "+"
      numberSave = calculadora.innerHTML.split("-");
      if(numberSave[1] === null || numberSave[1] === undefined || numberSave[1] === "undefined" || numberSave[1] === "null"){
        numberSave = calculadora.innerHTML;
      } else{
        numberSave = numberSave[1];
      }
      calculadora.innerHTML = numberSave;
    }
  }
}

/** Funcion Insertar Numero visible */
function addNumeros(number){
  if(calculadora.innerHTML.length <= 7){
    if(calculadora.innerHTML === "0"){
      calculadora.innerHTML = number;
      numberSave = calculadora.innerHTML;
    }else {
        calculadora.innerHTML += number;
        numberSave = calculadora.innerHTML.split("-");
        if(numberSave[1] === null || numberSave[1] === undefined || numberSave[1] === "undefined" || numberSave[1] === "null"){
          numberSave = calculadora.innerHTML;
        } else{
          numberSave = numberSave[1];
        }
    }
  }
}
