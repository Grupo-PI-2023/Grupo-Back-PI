const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
app.use(express.json())
app.use(cors())
//Rotas
const org = require('./routes/organizador')
app.use("/organizador",org)

const evento = require('./routes/evento')
app.use("/evento", evento)

const ouvinte = require('./routes/ouvinte')
app.use("/ouvinte", ouvinte)
app.use("/ouvinte/:id", ouvinte)

const comissao = require('./routes/comissao')
app.use("/comissao", comissao)
app.use("/comissao/:id", comissao)

const comissaoADM = require('./routes/comissaoADM')
app.use("/comissaoADM", comissaoADM)
app.use("/comissaoADM/:id", comissaoADM)


db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server running on port 3001")
    })
})

