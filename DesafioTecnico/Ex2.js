function fat(valor){
    if(valor == 0) return 1;
    return valor * fat(valor - 1);
}

let continuar;

do{
    let valor;

    do{
        valor = parseInt(prompt("Insira um número inteiro positivo: "));

        if(isNaN(valor) || valor < 0){
            alert("Valor Inválido, tente outro número.")
        }

    }while(isNaN(valor) || valor < 0)

    console.log(`O fatorial de ${valor} é igual a ${fat(valor)}`);

    continuar = prompt("Deseja calcular o fatorial de outro número? Digite 'S' ou 's' para continuar.");

} while (continuar && continuar.toLowerCase() == 's');
