console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado)

function perimetroCuadrado(lado) {
    return lado*4;
}

perimetroCuadrado()
//console.log("El perimetro del Cuadrado mide:" + perimetroCuadrado)

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
function areaCuadrado (lado){
    return lado*lado;
}
//console.log("El area del Cuadrado mide:" + areaCuadrado);

console.groupEnd();

function calcularPerimetroCuadrado(){
const input =document.getElementById("InputCuadrado");
const value =input.value;
const perimetro =perimetroCuadrado(value);
alert(perimetro);

}
function calcularAreaCuadrado(){
    const input =document.getElementById("InputCuadrado");
    const value =input.value;
    const area =areaCuadrado(value);
    alert(area);
    

}
