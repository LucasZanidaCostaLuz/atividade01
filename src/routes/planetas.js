import { Router } from "express"

const planetasRoutes = Router()
    let planetas = [
        {
            id: Number(Math.floor(Math.random()*999999)),
            nome: "Dev",
            temperatura: 13.3,
            agua: false,
            atm: [
                "JS", 
                "NODE",
                "VS",
                "Code"
            ],
        },
    ]

planetasRoutes.get("/", (req, res) => {
        return res.status(200).send({ planetas })
})
    //Rota para cadastrar novo elemento
planetasRoutes.post("/", (req, res) => {
        const { nome, temperatura, agua, atm } = req.body

if(!nome || !temperatura || !agua){
    return res.status(400).send({
        message: 'os campos nome, temperatura e água são campos obrigatórios'
    })
}

if(agua != "sim" && agua != "não"){
    return res.status(400).send({
        message: "digite 'sim' ou 'não'"
    })
}

        const novoPlaneta = {
            id: Number(Math.floor(Math.random()*999999 + 1)),
            nome,
            temperatura,
            agua,
            atm
        }
        
        planetas.push(novoPlaneta)
        return res.status(201).send({message: "planeta cadastrado", novoPlaneta })
})
    //Rota para buscar um elemento especifico da array guloseimas
    planetasRoutes.get("/:id", (req, res) => {
        const { id } = req.params
        const filme = planetas.find((movie) => movie.id === Number(id))
        if(!filme) {
            return res.status(404).send({ message: "filme não encontrado" })
        } else {
            return res.status(200).send(filme)
        }
    })
    planetasRoutes.put("/:id", (req, res) => {
        const { id } = req.params;
        const filme = planetas.find((movie) => movie.id === Number(id));
        
        if(!filme){
            return res.status(404).send({ message: "filme não encontrado" });
        }
        const { titulo, genero, emCartaz } = req.body
        console.log(titulo);
        filme.titulo = titulo
        filme.genero = genero
        filme.emCartaz = emCartaz
        return res.status(200).send({ message: "filme modificadao", filme })
    })
    planetasRoutes.delete("/:id", (req, res) => {
        const { id } = req.params
        const filme = planetas.find((planetas) => planetas.id === Number(id))
        if (!filme) {
            return res.status(404).send({ message: "filme não encontrado" });
        } 
        planetas = planetas.filter((planetas) => planetas.id !== N) 
            return res.status(200).send({message: "guloseima deletada",});
    });

    export default planetasRoutes