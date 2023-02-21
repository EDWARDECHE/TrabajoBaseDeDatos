const express = require("express")
const router = express.Router()
const Controller = require ("../controller/apiController")



router.post("/crear", Controller.guardarProducto)
router.get("/ver", Controller.todosLosProductos)

module.exports = router

