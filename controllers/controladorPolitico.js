var Politico = require('../models/modeloPolitico');
exports.buscarPoliticos = async (req, res) => {
    try {
        var politicos = await Politico.findAll({
            order:[['nome','ASC']]
        });
        res.status(200).json(politicos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.buscarIdPolitico = async (req, res) => {
    try {
        var politico = await Politico.findByPk(req.params.id);
        if (!politico) return res.status(404).json({ message: 'Político não encontrado!' });
        res.status(200).json(politico);
    } catch (error) {
        res.status(400).json({message: 'Erro ao buscar o político. Detalhes do erro: '+ error.message});
    }
};