import cliente from "../models/Cliente.js";

class ClienteController {

    // Método para listar Clientes.
    static async listarClientes(req, res) {
        try {
          const listaClientes = await cliente.find({});
          res.status(200).json(listaClientes);

        } catch (error) {
          res.status(500).json({ message: `${error.message} - Falha ao Listar Clientes.` });
        }
      }
    
    // Método para listar Cliente por ID.
    static async listarClientesPorId (req, res) {
        try {
            const id = req.params.id;
            const clienteEncontrado = await cliente.findById(id);
            res.status(200).json(clienteEncontrado);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao Listar cliente.` });
        }
    }

        // Método para cadastrar Cliente.
        static async cadastrarCliente (req, res) {
            try {
                const novoCliente = await cliente.create(req.body);
                res.status(201).json({ message: "Cliente criado com Sucesso.", cliente: novoCliente });
    
            } catch (error) {
                res.status(500).json({ message: `${error.message} - Falha ao Cadastrar cliente.` });
            }
        }

    // Método para atualizar Clientes.
    static async atualizarCliente (req, res) {
        try {
            const id = req.params.id;
            const atualizarCliente = await cliente.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Livro Atualizado com Sucesso.` })

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao Atualizar cliente.` });
        }
    }

    // Método para deletar Cliente.
    static async deletarCliente (req, res) {
        try {
            const id = req.params.id;
            const deletarCliente = await cliente.findByIdAndDelete(id);
            res.status(200).json({ message: `Cliente Deletado com Sucesso.` })

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao Deletar cliente.` });
        }
    }

};

export default ClienteController;