let nombre = "Jose Luis";

// window.alert("Bienevenido a la pagina de "+nombre);
console.log(`bienvenido a la pagina de ${nombre}`);

/*
 let vector=[3,5,7,"Andres","Julian"];
 console.log(vector);

 for(let i=0;i<vector.length;i++){
    // console.log("El elemento " +i+ " de vector es:"+vector[i])
     document.write("El elemento " +i+ " de vector es:"+vector[i])
     document.writeln("<p>El elemento " +i+ " de vector es:"+vector[i]+"</p>")
}


let numero=25;
let incrementado=numero++;
let incrementado=++numero;
console.log("numero"+numero)
console.log("incrementado"+incrementado)
*/

let numeroStr=window.prompt("Tabla de multiplicar del..");
let numero=parseInt(numeroStr);

document.write("<h1>Tabla de multiplicar del "+numero+"</h1>");
/*
let multiplicar=[];//no es necesario
for (let i=0; i<=9; i++){
    document.write("<p>" + numero + " * " +i+ " = "+ numero*i+"</p>")
    multiplicar.push(numero*i);
}
console.log(multiplicar);
*/

do {
    numero=parseInt(window.prompt("Tabla de multiplicar del.."));

} while (numero>100 || numero<1);


let j=0
while (j<=9){
    document.write("<p>" + numero + " * " +j+ " = "+ numero*j+"</p>");
    j++;
}