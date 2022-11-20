import { getClient } from "../DB/mongo.db.js";


async function createProduto(params) {
    const client = getClient()
    try {
        await client.connect()
        await client.db("boiCerto").collection("boi").insertOne(params)
    } catch (err) {
        throw err
    } finally {
        await client.close()
    }
}

async function updateProduto(params) {
    const client = getClient()
    try {
        await client.connect()
        await client.db("boiCerto").collection("boi").updateOne({idProduto: params.idProduto}, {$set: {...params}})
    } catch (err) {
        throw err
    } finally {
        await client.close()
    }
}

async function getProduto(params) {
    const client = getClient()
    try {
        await client.connect()
        return await client.db("boiCerto").collection("boi").findOne({idProduto: params.idProduto})
    } catch (err) {
        throw err
    } finally {
        await client.close()
    }
}

export default {createProduto, updateProduto, getProduto}