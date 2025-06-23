
function soma(numA, numB) {
    let resultado = numA + numB;
    console.log(`Soma: ${resultado}`);
}

function subtracao(numA, numB) {
    let resultado = numA - numB;
    console.log(`Subtração: ${resultado}`);
}

function multiplicacao(numA, numB) {
    let resultado = numA * numB;
    console.log(`Multiplicação: ${resultado}`);
}

function divisao(numA, numB) {
    if (numB === 0) {
        console.log("Erro: Não é possível dividir por zero!");
    } else {
        let resultado = numA / numB;
        console.log(`Divisão: ${resultado}`);
    }
}

function porcentagem(percentual, valorTotal) {
    let resultado = (percentual / 100) * valorTotal;
    console.log(`${percentual}% de ${valorTotal}: ${resultado}`);
}



soma(15, 7);

subtracao(50, 30);


multiplicacao(6, 9);


divisao(100, 5);


porcentagem(20, 400);



