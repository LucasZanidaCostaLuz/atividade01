import { Router } from "express"
    const filmesRoutes = Router()
    let filmesMarcantes = [
        {
            id: 1001,
            id: Number(Math.floor(Math.random()*100)),
            titulo: "Meu Amigo Totoro",
            genero: "Animação",
            emCartaz: false,
        },
        {
            id: 1002,
            id: Number(Math.floor(Math.random()*100)),
            titulo: "O Menino do Pijama Listrado",
            genero: "Guerra e suspense",
            emCartaz: false,
        },
        {
            id: 1003,
            id: Number(Math.floor(Math.random()*100)),
            titulo: "Atividade paranormal",
            genero: "Terror",
            emCartaz: false,
        },
    
    ]
    app.get("/filmes", (req, res) => {
    //Rota para buscar todos os elementos do array filmesMarcantes
    filmesRoutes.get("/", (req, res) => {
        return res.status(200).send({ filmesMarcantes })
    })
    })
    //Rota para criar novo elemento
    filmesRoutes.post("/", (req, res) => {
        const { titulo, genero, emCartaz } = req.body;
        const novoFilme = {
            id: Number(Math.floor(Math.random()*99 + 1)),
            titulo,
            genero,
            emCartaz,
        }
        filmesMarcantes.push(novoFilme);
        return res.status(201).send({ filmesMarcantes })
    })
    //Rota para buscar um elemento especifico da array guloseimas
    filmesRoutes.get("/:id", (req, res) => {
        const { id } = req.params
        const filme = filmesMarcantes.find((movie) => movie.id === Number(id))
        if(!filme) {
            return res.status(404).send({ message: "filme não encontrado" })
        } else {
            return res.status(200).send(filme)
        }
    })
    filmesRoutes.put("/:id", (req, res) => {
        const { id } = req.params;
        const filme = filmesMarcantes.find((movie) => movie.id === Number(id));
        
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
    filmesRoutes.delete("/:id", (req, res) => {
        const { id } = req.params
        const filme = filmesMarcantes.find((filmesMarcantes) => filmesMarcantes.id === Number(id))
        if (!filme) {
            return res.status(404).send({ message: "filme não encontrado" });
        } 
        filmesMarcantes = filmesMarcantes.filter((filmesMarcantes) => filmesMarcantes.id !== N) 
            return res.status(200).send({message: "guloseima deletada",});
    });
    export default filmesRoutes