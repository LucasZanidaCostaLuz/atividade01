import express from "express"
import { config } from "dotenv"
import routes from "./routes/index.routes.js"
config()

const port = process.env.PORT || 3000

const app = express()

app.use(routes)
app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send({message: "Hello, World"})
})
app.post("/2tds1", (req, res) => {
    return res.status(200).send({message: "Hello, 2tds1 - Só os devs"})
})
app.listen(port, () => {
    console.log(`👻 server started on https://localhost:${port}`)
})