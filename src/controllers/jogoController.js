import jogo from "../models/Jogo.js";

class JogoController {

    // Método para listar Jogos.
    static async listarJogos(req, res) {
        try {
          const listaJogos = await jogo.find({});
          res.status(200).json(listaJogos);

        } catch (error) {
          res.status(500).json({ message: `${error.message} - Falha ao Listar Jogos.` });
        }
      }
    
    // Método para listar Jogos por ID.
    static async listarJogoPorId (req, res) {
        try {
            const id = req.params.id;
            const jogoEncontrado = await jogo.findById(id);
            res.status(200).json(jogoEncontrado);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao Listar jogo.` });
        }
    }

        // Método para cadastrar Jogo.
        static async cadastrarJogo (req, res) {
            try {
                const novoJogo = await jogo.create(req.body);
                res.status(201).json({ message: "Jogo criado com Sucesso.", jogo: novoJogo });
    
            } catch (error) {
                res.status(500).json({ message: `${error.message} - Falha ao Cadastrar jogo.` });
            }
        }

    // Método para atualizar Jogos.
    static async atualizarJogo (req, res) {
        try {
            const id = req.params.id;
            const atualizarJogo = await jogo.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Livro Atualizado com Sucesso.` })

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao Atualizar jogo.` });
        }
    }

    // Método para deletar Jogos.
    static async deletarJogo (req, res) {
        try {
            const id = req.params.id;
            const deletarJogo = await jogo.findByIdAndDelete(id);
            res.status(200).json({ message: `Jogo Deletado com Sucesso.` })

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao Deletar jogo.` });
        }
    }

};

export default JogoController;