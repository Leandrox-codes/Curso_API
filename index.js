const express = require("express")

const app = express()

const RotasProfessores = require("./router/professores.routes")

const rotasCursos = require("./router/cursos,routes")

app.use("/cursos", rotasCursos)
app.use("/professores", RotasProfessores)
app.use(express.json())

// ------------- rotas do professor

app.listen(3000, () => console.log("API no ar ;) "))
