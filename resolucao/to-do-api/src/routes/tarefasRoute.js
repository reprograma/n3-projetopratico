const express = require("express")
const router = express.Router()
const controller = require("../controller/tarefasController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.get("/:nome/buscar", controller.getByNomeColaborador)
router.get("/concluidos/filtrar", controller.getConcluidos)
router.get("/concluidos/tempo", controller.getTempoTarefa)

module.exports = router
