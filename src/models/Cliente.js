import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({

    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    idade: { type: Number, required: true },
    endereco: { type: String, required: true },
},
{
    versionKey: false
});

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;