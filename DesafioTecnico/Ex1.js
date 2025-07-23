const a = parseFloat(prompt("Digite o coeficiente a: "));
const b = parseFloat(prompt("Digite o coeficiente b: "));
const c = parseFloat(prompt("Digite o coeficiente c: "));

function bhaskara(a, b, delta){
    result = (-b + delta)/(2*a);
    return result;
}

const delta = Math.pow(b,2) - 4 * a * c;

if(delta < 0) console.log("A equação não possui raízes reais. Delta negativo!");
else if(delta == 0){
    console.log(`A equação possui uma única raiz real, que é x = ${bhaskara(a, b, Math.sqrt(delta))}`);
}
else {
    console.log(`As raízes são x1 = ${bhaskara(a, b, Math.sqrt(delta))} e x2 = ${bhaskara(a, b, -Math.sqrt(delta))}`)
}