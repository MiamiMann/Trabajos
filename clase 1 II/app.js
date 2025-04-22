document.write("<h1> Hola javascript</h1>")
// comentarios 
/*comentario de varias lineas*/

let nombre="Carlos"

let nombres=['Ana','Carlos','Mario']

let datos={
    nombres:"Carlos",
    edad:24,
    notas:[6.5,7,6,2]

}

console.log(nombres)
console.log(datos)

//operadores relacionales

/*
>
<
>=
<=
!=
==
===

*/

let uno=1
let uno_string="1"

console.log(uno==uno_string)

//estructuras de control

if(uno==uno_string)
    console.log("Son iguales")
if(uno==uno_string){
    console.log("Son iguales iguales")
}else{
    console.log("No son iguales iguales")
}

let tipoAlumno="diurno"

switch(tipoAlumno){
    case 'diurno':
        console.log('es alumno diurno')
        break;
    case 'vesértino':
        console.log('es alumno de la noche')
        break;
    default:
        console.log('No es alumno ')

}

//Ciclos while - For

//numeros pares

//if(numero % 2 == 0)

// Muestre los primeros 10 numeros pares

let cont= 0;
while(cont < 20){
    if(cont % 2 == 0)
        console.log(cont)
    cont=cont+1
}

let nom=["Ana","Pablo","Carlos"]

console.log(nom(1))
console.log(nom,length)

//for

for(let i=0;i<nom, length;i++){
    console.log(nom(i))
}

//funciones

function emsake(){
    console.log("hola ")
}

mensaje();

function Saludo(nombre){

    console.log("hola " + nombre)
}

saludo('Carlos')

//Crear una funcion que retorne si un valor es par o no
// y mostrar la cantidad de pares que poseé un arreglo

let numeros=[3,12,25,44,5,7,3,22,66,8]
