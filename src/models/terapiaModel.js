const mongoose = require('mongoose');

const terapiaSchema = new mongoose.Schema({
  nomedaClinica: {
    type: String,
    required: true,
  },
  descricaoDosServiços: {
    type: String,
    required: true,
  },
  enderecoAcesso: {
    type: String,
    required: true,
  },
});

const Terapia = mongoose.model('Terapia', terapiaSchema);

module.exports = Terapia;