//Definicion de una funcion
/*
function hello(){
    console.log('Hola clase');
    console.log('5IV7');

}
//llamada a la funcion
hello();
hello();
hello();
hello();
hello();

//Retorno de una funcion
function hello(){
    return('Hola clase');
   

}
const result = hello();
console.log(result);
hello();

//Funcion que retorna otra funcion
function hello(){
    return function (){
        return('Hola soy la funcion 2');
    }
        +
   

}
console.log(hello()())

//funcion con parametros
function add(x){
    console.log(x);
}
add(5);

//multiparametros
function add(x,y){

    console.log(x+y);
}
add(5, undefined);

//control de error en multiparametros
function add(x,y){
    if (y===undefined){
        y=0;
    }
    console.log(x+y);
}
add(5, undefined);

//parametro de tipo cadena
function add(name){
    console.log('Hola '+name);
}
add("Clase JS")
*/
//OBJETOS
const user = {
    nombre: 'Alvarado', 
    ApeliidoP: 'Reyes',
    ApellidoM: 'Quiroz',
    edad: 91,
    direccion :{
        calle: 'Nicolas Bravo',
        no: 598,
        colonia: 'Narvarte',
        delegacion: 'Los Pinos'
    },
    amigos :['Raul','Maria'],
    activo:true
}
//consola nombre ApeliidoP ApellidoM
//alert activo
//consola edad
//alert calle no colonia delegacion
//consola amigos
function nombres(user){
    console.log('Nombre: '+user.nombre + ' ' + user.ApeliidoP + ' ' +user.ApellidoM);

}
nombres(user);
function estado(user){
    if (user.activo===true){
        alert('Si es activo');
    }else{
        alert('no esta activo')
    }
}
estado(user);
function edad(user){
    console.log('Edad '+user.edad);

}
edad(user);
function vive(user){
    alert('Calle: ' +user.direccion.calle + ' No: ' +user.direccion.no + ' Colonia: ' + user.direccion.colonia + ' Delegacion: ' +user.direccion.delegacion);
}
vive(user);
function amistad(user){
    console.log('Amigos '+user.amigos);

}
amistad(user);