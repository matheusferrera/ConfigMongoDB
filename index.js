import express from "express";
import routerProduto from "./Routers/produto.router.js"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())


//1º passo -> [db/mongo.db.js] -> Ir na conexão no mongo DB (connect > connect your app) colar o link em 
//2º passo -> [respositores/produtos] -> Trocar o db("nomeDB").collenction("nomeColection")
//2º passo -> [index.js] -> Rodar no terminal nodemon index.js

//Caso precise colocar mais alguma rota
app.use("/produto", routerProduto)


app.listen(3000, async () => { //Criacao do arquivo para armazenar dados
    try {
        console.log("api rodando")
    } catch(err){
        console.log(err)
    }
    
})
