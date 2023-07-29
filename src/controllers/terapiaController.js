const Terapia = require('../models/terapiaModel');

// Listar todos os lugares de terapia
const listarTerapias = async (req, res) => {
  try {
    const terapias = await Terapia.find();
    res.json(terapias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar terapias' });
  }
};

// Cadastrar várias clínicas de terapia de uma vez
const cadastrarTerapias = async (req, res) => {
  try {
    const terapias = req.body; // Recebe o array de clínicas do corpo da requisição
    const clínicasCadastradas = await Terapia.create(terapias); // Cadastra todas as clínicas de uma vez
    res.json(clínicasCadastradas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao cadastrar clínicas de terapia' });
  }
};

// Editar uma clínica de terapia existente
const editarTerapia = async (req, res) => {
  try {
    const terapia = await Terapia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(terapia);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar terapia' });
  }
};

// Excluir um lugar de terapia
const excluirTerapia = async (req, res) => {
  try {
    await Terapia.findByIdAndRemove(req.params.id);
    res.json({ message: 'Clínica de Terapia excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir terapia' });
  }
};

// Atualizar um lugar de terapia existente parcialmente
const atualizarTerapia = async (req, res) => {
  try {
    const terapia = await Terapia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(terapia);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar terapia' });
  }
};

module.exports = {

  listarTerapias,
  cadastrarTerapias,
  editarTerapia,
  excluirTerapia,
  atualizarTerapia, 

}