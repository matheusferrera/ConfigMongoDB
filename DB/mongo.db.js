import mongodb from "mongodb"

function getClient() {
    const uri = "mongodb+srv://root:root@atlascluster.qdguz.mongodb.net/?retryWrites=true&w=majority" //obtida no connect do atlascluster
    return new mongodb.MongoClient(uri)
}

export {getClient}