const alunos = [
    {
        nome: 'Ana',
        nota: 8,
        turma: '2A',
    },
    {
        nome: 'Gabriel',
        nota: 5,
        turma: '2B',
    },
    {
        nome: 'Lucas',
        nota: 8,
        turma: '2C',
    },
];
function alunosAprovados(alunos, media){
    let aprovados = [];
    for(let i = 0; i < alunos.length; i++){
        let {nota, nome} = alunos[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 5));