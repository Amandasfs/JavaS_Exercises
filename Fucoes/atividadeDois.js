function calculaIdade(anos){
    return`Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoaUm = {
    nome: 'Amélia',
    idade: 24,
};
const pessoaDois = {
    nome: 'João',
    idade: 86,
};
const pessoaTres = {
    nome: 'Carla',
    idade: 45,
};
console.log(calculaIdade.call(pessoaTres, 40));
console.log(calculaIdade.apply(pessoaUm, [25]));