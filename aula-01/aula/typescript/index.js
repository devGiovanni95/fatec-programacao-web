"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const numero = prompt("Digite um numero: ");
//console.log(`Olá ${name}`);
function cacularArea(lado) {
    return lado * lado;
}
console.log("A area do quadrado:", cacularArea(Number(numero)));
