const express = require('express');
const router = express.Router();
const terapiaController = require('../controllers/terapiaController');

router.get('/terapia', terapiaController.listarTerapias);
router.post('/terapia/cadastrar', terapiaController.cadastrarTerapias);
router.put('/editar/:id', terapiaController.editarTerapia);
router.patch('/atualizar/:id', terapiaController.atualizarTerapia);
router.delete('/deletar/:id', terapiaController.excluirTerapia);

module.exports = router;