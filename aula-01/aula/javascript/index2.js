//precisamos usar isto no package.json pra usa import
//"type":"module",     

import PromptSync from "prompt-sync";

const prompt = PromptSync();

const name = prompt("Qual o seu nome ?");

console.log(`Olá ${name}`);

