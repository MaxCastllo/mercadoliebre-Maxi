const express = require("express")
const path = require("path")
const app = express ()

const publicPath = path.resolve(__dirname, './Public')
app.use(express.static(publicPath))

const port = process.env.PORT || 3033;
app.listen(port, () => console.log("El servidor encendio en puerto 3033"))

app.get("/", (req,res) => (
    res.sendFile(path.resolve(__dirname, './views/home.html'))
))