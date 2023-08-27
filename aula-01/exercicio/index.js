"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const nota = [];
let nome = prompt("Digite o nome do aluno: ");
for (let i = 1; i <= 4; i++) {
    let valorDigitado = Number(prompt(`Digite a nota [${i}] : `));
    while (valorDigitado > 10 || valorDigitado < 0) {
        valorDigitado = Number(prompt(`Nota invalida Digite novamente a nota [${i}] : `));
    }
    nota.push(valorDigitado);
}
function calcularMedia(notas) {
    let totalNota = 0, media = 0;
    for (let i = 0; i <= nota.length; i++) {
        if (!isNaN(notas[i])) {
            totalNota += notas[i];
        }
    }
    media = totalNota / nota.length;
    return media;
}
let mediaCalculada = Number(calcularMedia(nota));
const aluno = {
    nome: nome,
    nota: nota,
    media: mediaCalculada
};
function notasAluno() {
    for (let i = 0; i <= 3; i++) {
        console.log(`Nota [${i + 1}] = `, aluno.nota[i]);
    }
}
console.log("Nome do aluno: ", aluno.nome);
notasAluno();
console.log("Média do aluno", aluno.media);
