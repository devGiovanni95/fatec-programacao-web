import PromptSync from "prompt-sync";

const prompt = PromptSync();

const numero = prompt("Digite um numero: ");

//console.log(`Olá ${name}`);

function cacularArea(lado: number){
    return lado * lado
}

console.log("A area do quadrado:", cacularArea(Number(numero)));