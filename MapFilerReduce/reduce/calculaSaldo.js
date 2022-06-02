function calculaSaldo(saldo, itens) {
    if(!saldo || !itens || !itens.length) return 'Por Favo, Envie todos os parâmetros';
    const saldoFinal = itens.reduce((acc, item) => acc - item.preco,saldo);

    return 'O Saldo final será de'+ ' ' + saldoFinal + ' ' + 'reais';
}
lista = [
    {
        preco: 2,
        nome: apple,
    },
    {
        preco: 5.50,
        nome: avocado,
    },
    {
        preco: 1.50,
        nome: orange,
    },
];
saldo = 100;

console.log(calculaSaldo(saldo, lista));