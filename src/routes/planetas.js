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
    //Rota para criar novo elemento
planetasRoutes.post("/", (req, res) => {
        const { titulo, genero, emCartaz } = req.body;
        const novoFilme = {
            id: Number(Math.floor(Math.random()*99 + 1)),
            titulo,
            genero,
            emCartaz,
        }
        planetas.push(novoFilme);
        return res.status(201).send({ planetas })
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