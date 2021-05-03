const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')
router.post('/usuario', UsuarioController.post);
router.put('/usuario/:id', UsuarioController.put);
router.delete('/usuario/:id', UsuarioController.delete);
router.get('/usuarios', UsuarioController.get);
router.get('/usuario/:id', UsuarioController.getById);
module.exports = router;


