//WebCode
//Arreglos
/*
let array = ["dato1",1,Boolean];
console.log("Tamaño array: " + array.length);
array.push("insert nuevo val");
console.log(array[3]);
console.log("nuevo tamaño array: " + array.length);
console.log(array[3]);

5*1 = 5
5*2 = 10
5*3 = 15
5*4 = 20
5*5 = 25
5*6 = 30
fin del arreglo valor de la posicion = 30

let tabla= [];


for (let i = 1;i<=10;i++){
    tabla.push(5*i);
    console.log("5*"+i+"= "+ 5*i);
    if(tabla.length>=6){
        break;
    }
}
console.log("fin del arreglo, valor de la posicion = "+tabla[5]);
console.log(tabla);
*/

//eliminar elementos
let array = ["dato1","dato2","dato3"];
array.push("dato4");
console.log(array[3]);

//Eliminar
array.splice(1,1);
console.log(array);


