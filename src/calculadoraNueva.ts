let bt1Enviar = <HTMLButtonElement>document.getElementById("bt1Enviar");
let bt2Enviar = <HTMLButtonElement>document.getElementById("bt2Enviar");
let bt3Enviar = <HTMLButtonElement>document.getElementById("bt3Enviar");
let bt4Enviar = <HTMLButtonElement>document.getElementById("bt4Enviar");
let bt5Enviar = <HTMLButtonElement>document.getElementById("bt5Enviar");
let bt6Enviar = <HTMLButtonElement>document.getElementById("bt6Enviar");
let bt7Enviar = <HTMLButtonElement>document.getElementById("bt7Enviar");
let bt8Enviar = <HTMLButtonElement>document.getElementById("bt8Enviar");

let numero_1 = <HTMLInputElement>document.getElementById("numero_1");
let numero_2 = <HTMLInputElement>document.getElementById("numero_2");

let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");

let suma = <HTMLParagraphElement>document.getElementById("suma");
let resta = <HTMLParagraphElement>document.getElementById("resta");
let multiplicacion = <HTMLParagraphElement>document.getElementById("multiplicacion");
let division = <HTMLParagraphElement>document.getElementById("division");
let potencia = <HTMLParagraphElement>document.getElementById("potencia");
let borra = <HTMLParagraphElement>document.getElementById("borra");

let primerNumero: number;
let segundoNumero: number;

function sumar(num1: number, num2: number): number {
  return num1 + num2;
}

function restar(num1: number, num2: number): number {
  return num1 - num2;
}

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

function dividir(num1: number, num2: number): number {
   return num1 / num2;
}

function potenciar(num1: number, num2: number): number {
  if num2 === 0 {
     return 1;
   } else {   
      return (Math.pow(num1, num2));
  }
 }

 function mensajeBorrar(){
    borra.innerHTML = "Debe ingresar nuevos valores numericos";
    console.log(borra.innerHTML);
 }


 bt1Enviar.addEventListener("click", () => {
   rotulo1.innerHTML = "Ingrese el primer número";
   primerNumero = Number(numero_1.value);
 };
 
 bt2Enviar.addEventListener("click", () => {
   rotulo2.innerHTML = "Ingrese el segundo número";
   segundoNumero = Number(numero_2.value); 
 };

bt3Enviar.addEventListener("click", () => {
  suma.innerHTML = `El resultado de sumar ${primerNumero} y ${segundoNumero} es : ` + sumar(primerNumero, segundoNumero);
  console.log(suma.innerHTML);
};

bt4Enviar.addEventListener("click", () => {
  resta.innerHTML = `El resultado de restar ${primerNumero} y ${segundoNumero} es : ` + restar(primerNumero, segundoNumero);
  console.log(resta.innerHTML);
};

bt5Enviar.addEventListener("click", () => {
  multiplicacion.innerHTML = `El resultado de multiplicar ${primerNumero} y ${segundoNumero} es : ` + multiplicar(primerNumero, segundoNumero);
  console.log(multiplicacion.innerHTML);
};

bt6Enviar.addEventListener("click", () => {
  if (segundoNumero !== 0) {
    division.innerHTML = `El resultado de dividir ${primerNumero} y ${segundoNumero} es : ` + dividir(primerNumero, segundoNumero);
  } else {
    division.innerHTML = `No se puede dividir por cero`;
  };
  console.log(division.innerHTML);
 };
 
bt7Enviar.addEventListener("click", () => {
  potencia.innerHTML = `El resultado de elevar ${primerNumero} a la ${segundoNumero} es : ` + potenciar(primerNumero, segundoNumero);
  console.log(potencia.innerHTML); 
};

bt8Enviar.addEventListener("click", () => {
  location.reload(mensajeBorrar());
};


