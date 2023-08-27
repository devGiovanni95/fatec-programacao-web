import PromptSync from "prompt-sync";
const prompt = PromptSync();

type situacao = 'aprovado' | 'reprovado' | 'recuperação'

interface Aluno{
    nome: string
    mediaFinal: number
    situacao: situacao
}

const aluno: Aluno = {
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovado"
}
console.log("🚀 ~ file: index.ts:17 ~ aluno:", aluno)

/*
dara erro pois esta tipado
const aluno: Aluno = {
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovadao"
}*/


/*
no ts nao conseguimos criar este campo pois ele esta tipado
aluno.test = 10
*/