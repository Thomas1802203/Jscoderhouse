for(let cliente =1; cliente <=1;cliente++){
    let nombre = prompt ("Ingrese su nombre");
    
    alert(`Cliente #${cliente}nombre:${nombre}`) 
}
alert("Bienvenido")

let respuesta = prompt("¿Tienes 18 años o mas?");

if(respuesta === "si"){
    alert("Puedes comprar en esta paginga")
}else{
    alert("No puedes comprar en esta pagina")
}

let numeroUno = parseFloat(prompt("Ingrese el precio que desea pagar"))
let numeroDos = parseFloat(prompt("si desea otro producto adicione otro precio"))
alert("El total es de")
alert(numeroUno + numeroDos)

function calculadora(numeroUno, numeroDos, operacion){
    switch (operacion){
        case "+":
            return numeroUno + numeroDos;
            break;
    }
}
let resultado= calculadora(1500, 2100, "+");
console.log(resultado);