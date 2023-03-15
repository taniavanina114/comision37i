/* 1- La Escuela Café de las 3am solicita un sistema, donde le permita a sus estudiantes
presentarse de una manera más interactiva y eficiente , por eso deciden acudir a un
programador para crear un sistema, en el cual se podrá ingresar el nombre, edad, actividad
favorita y deporte favorito en una tarjeta de presentación predeterminada.*/

let nombreAlumno, edadAlumno, actividadFavoritaAlumno, deporteFavoritoAlumno;

nombreAlumno= prompt('Ingresar el nombre del alumno: ');
edadAlumno= prompt('Ingrese edad del alumno: ');
actividadFavoritaAlumno= prompt('Ingrese activida favorita del alumno: ');
deporteFavoritoAlumno= prompt('Ingrese deporte favorito del alumno: ');

document.write(`El nombre del Alumno es: ${nombreAlumno} su edad es ${edadAlumno} su actividad favorita es ${actividadFavoritaAlumno} y su deporte favortio es ${deporteFavoritoAlumno} <br> `);



/*3- Realizar un programa que lea cuatro valores numericos e informar su suma y producto.*/
let num1, num2, num3, num4, suma, producto;

num1= parseInt(prompt(`ingresar el primer número: `));
num2= parseInt(prompt(`ingresar el segundo número: `));
num3= parseInt(prompt(`ingresar el tercero número: `));
num4= parseInt(prompt(`ingresar el cuarto número: `));

suma= num1 + num2 + num3 +num4;
producto= num1 * num2 * num3* num4;

document.write(`el valor de suma de ${num1} + ${num2} + ${num3} + ${num4} es ${suma}, y el valor del multiplicador de ${num1} * ${num2} * ${num3} * ${num4} es ${producto} <br>`);


/* 4- Se debe desarrollar un programa que pida el ingreso del pecio de un articulo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador ( Ingresar por teclado un precio de sin decimales, es decir un entero:2, 7, 90 etc.)*/

let precioArticulo= prompt('Ingresar precio del articulo: ');
let montoAPagar= precioArticulo *5;

document.write(`El precio del articulo es ${precioArticulo} y el total a pagar es ${montoAPagar} <br>`);

/*2- Ingresar dos números
● Si el primero es mayor que el segundo mostrar en consola la suma de ambos
● Si el primero es menor que el segundo mostrar en consola la resta del segundo
menos el primero.
● Si son iguales mostrar en consola la multiplicación de ambos.
(ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3)*/






/*5- Ingresar 3 números
● indicar cual es el mayor
● indicar cual es el menor
● obtener la raíz cuadrada del segundo número*/