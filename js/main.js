var a = 'Logica condicional';
console.log(a);

var edadLegal=18;

const GRAVEDAD =9.8;

alert('Hola Delfin');

var nombre = prompt('¿Cuál es tu nombre?')
console.log(nombre);
console.log('¿Hola, '+ nombre +'.Un gusto conocerte.');

var actividad1 = prompt('¿Hiciste la tarea  ' + nombre + '?  (Si/No)');
if(actividad1 ==='Si'){
    alert('¡Bien hecho!')
} else {
    alert('¡No te rindas, empieza ya mismo!')
}

var actividad2 = parseInt (prompt('Por favor ingresa el valor en Fahrenheit:') );
console.log("\nGrados Celsius" + ((actividad2 -32) / 1.8));

var actividad3= prompt("Porfavor ingresa los valores: (Ok) ")
n1= parseInt(prompt("Número 1"));
n2= parseInt(prompt("Número 2"));
n3= parseInt(prompt("Número 3"));

if(n1>n2){
    t=n1;
} else{ t=n2;}

if(t>n3){
    mayor=t;
} else{ mayor=n3;}
console.log("El mayor es:" + mayor + " ");