import { Router } from "express"

import planetasRoutes from "./planetas.js"

const routes = Router()

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funfando" })
})

routes.use("/planetas", planetasRoutes)

export default routes