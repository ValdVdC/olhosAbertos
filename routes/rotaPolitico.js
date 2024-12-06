var express = require('express');
var router = express.Router();
var controladorLivro = require('../controllers/controladorPolitico');

router.get('/', controladorLivro.buscarPoliticos);
router.get('/:id',controladorLivro.buscarIdPolitico)

module.exports = router;