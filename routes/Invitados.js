const express = require('express')
const router = express.Router()

const InvitadoController = require('../controllers/InvitadoController')

router.get('/', InvitadoController.mostrar)

router.post('/crear',InvitadoController.crear)
router.get('/borrar/:id', InvitadoController.borrar);
router.post('/editar', InvitadoController.editar);

module.exports = router
