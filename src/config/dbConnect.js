import mongoose from "mongoose";

async function conectaNaDB() {

    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default conectaNaDB;