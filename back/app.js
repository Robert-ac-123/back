const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/personajes/:nombre', async (req, res) => {
    console.log("Valor exacto recibido:", JSON.stringify(req.params.nombre));
    const response = await fetch("https://genshin-db-api.vercel.app/api/v5/characters?query=" + req.params.nombre.trim())
    const data = await response.json()
    console.log(data)
    res.json(data)
})


app.listen(3000, () => console.log("Toy ready"))


