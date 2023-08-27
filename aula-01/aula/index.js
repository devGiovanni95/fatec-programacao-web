"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const aluno = {
    nome: "teste",
    mediaFinal: 7.5,
    situacao: "aprovado"
};
console.log("🚀 ~ file: index.ts:17 ~ aluno:", aluno);
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
