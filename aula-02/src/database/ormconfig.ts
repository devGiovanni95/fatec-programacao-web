import {DataSource} from 'typeorm'
import dotenv from 'dotenv'
import { join } from 'path';

//le o arquivo
dotenv.config();

//criando as configurações do banco de dados
const dataBase = new DataSource({
    type:'mysql',
    username: process.env.USERNAME,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    database:process.env.DATABASE,
    ssl: {
        rejectUnauthorized: true, 
      },
    entities: [
        //'.src/models/*.ts'
        join(__dirname, '..', 'models/*.{ts,js}')
    ],
    logging: true,  //toda vez que executar uma operação no banco de dados ele escreve no console pra verificar o comando executado
   // synchronize: true  //quando cria uma nova entidade ele apaga tudo e refaz ela automaticamente
})

//devolve uma promessa ok/falha/fica rodando
dataBase.initialize()
.then(() => {
    console.log('Banco conectado com sucesso')
}).catch((erro)=>{
    console.log('Erro ao conectar no banco! ',erro)
})

export default dataBase