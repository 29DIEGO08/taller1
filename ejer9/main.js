let numero = parseInt(prompt("introduce un número del 1 al 4"));

let resultado

switch(numero) {
    case 1:
        resultado = "Opción 1 seleccionada"
        break;
    case 2:
        resultado = "Opción 2 seleccionada"
        break;
    case 3:
        resultado = "Opción 3 seleccionada"
        break;
    case 4:
        resultado = "Opción 4 seleccionada"
        break;
    default:
        resultado = "Opción no valida"
}
alert(resultado);
console(resultado);