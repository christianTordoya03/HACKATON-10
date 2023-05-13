/*1. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no
es divisible entre 2”. */

/*function divisible(){
    const x = prompt("Ingrese un número entero: ")
    return x % 2 ? alert(`${x} no es divisible entre 2`) : alert(`${x} es divisible entre 2`);
}
divisible(); */

/*2. Crear un programa que determine si un número introducido en un Prompt es par
o no, la respuesta será mostrada en un Alert. */

/*function par(){
    const x = prompt("Ingrese un número entero: ")
    return x % 2 ? alert(`${x} no es par`) : alert(`${x} es par`);
}
par(); */


/*3. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
No considerar el caso en que ambos números son iguales. */

/*function menor(){
    const a = prompt("Ingresa un número entero: ")
    const b = prompt("Ingresa el número entero a comparar: ")
    const min = Math.min(a,b)
    return alert(`el menor número es ${min}`)
}
menor(); */


/*4. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número
mayor. Considerar el caso en que 2 números sean iguales. */

/*function mayor(){
    const a = prompt("Ingresa el primer número entero: ")
    const b = prompt("Ingresa el segundo número entero: ")
    const c = prompt("Ingresa el tercer número entero: ")
    const max = Math.max(a,b,c)
    return alert(`El mayor número es ${max}`)
}

mayor(); */

/*5. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es
lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o
domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. */

/*function semana(){
    const dia = prompt("Ingresa un día de la semana: ").toLowerCase();
    if(dia == "lunes"){
        return alert("bienvenido al lunes de tortura.");
    }
    if(dia == "martes"){
        return alert("bienvenido al martes, otro lunes pero más ligero.");
    }
    if(dia == "miércoles"){
        return alert("bienvenido al miércoles, ya falta poco soldado.");
    }
    if(dia == "jueves"){
        return alert("bienvenido al jueves, ya se siente a viernes.");
    }
    if(dia == "viernes"){
        return alert("bienvenido al viernes, hoy nos perdemos gente.");
    }
    if(dia == "sábado"){
        return alert("bienvenido al sábado, hoy se sale.");
    }
    if(dia == "domingo"){
        return alert("bienvenido al domingo,no te emociones, mañana es lunes.")
    }
    if(dia != "lunes" || "martes" || "miércoles" || "jueves" || "viernes" || "sábado" || "domingo"){
        return alert("Ingresa un día de la semana.");
    }
}
semana();*/     

/*6. Crea un programa que pregunte al usuario un número. Mostrar los números que
son múltiplos de 5 desde 1 hasta el número introducido por el usuario */

/*function multiplos(){
    const x = prompt("Ingresa un número entero: ")
    for(i = 1; i <= x; i++){
        if(i % 5 == 0 ){
            console.log(i)
        }
    }
}
multiplos(); */

/*7. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
solo al mostrar los números indicados por el usuario. */

/*function loteria(){
    const a = prompt("Ingresa un número del 1 al 50: ")
    const b = prompt("Vuelve a ingresar un número del 1 al 50: ")
    for( let i = 1; i <= 50; i++){
        if(i == a){
            console.log("¡Lotería!")
        }else if(i == b){
            console.log("¡Lotería!")
        }else{
            console.log(i)
        }
    }
}
loteria(); */

/*8. Crea un programa que solicite al usuario números, si lo que este introduce es un
número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe
ingresar el número 0. Finalmente mostrar la lista de números capturados en
pantalla o en la consola.
 */

function lista(){
    const x = prompt("Ingresa un número: ")
    const list = []
    console.log(list)
}
lista();