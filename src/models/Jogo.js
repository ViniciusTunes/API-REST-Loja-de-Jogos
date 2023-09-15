import mongoose from 'mongoose';

const jogoSchema = new mongoose.Schema({

    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    empresa: { type: String, required: true },
    categoria: { type: String, required: true },
    preco: { type: Number, required: true },
    data: { type: String, required: true }
},
{
    versionKey: false
});

const jogo = mongoose.model("jogos", jogoSchema);

export default jogo;