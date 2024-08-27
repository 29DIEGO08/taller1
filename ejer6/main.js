let num = 53;

var valor;

if (num > 0) {
    valor = "POSITIVO (+)";
}
else if(num < 0) {
    valor = "NEGATIVO (-)";
}
else{
    valor = "EL NUMERO ES IGUAL A CERO (0)";
}

console.log("EL NUMERO ES " + valor);