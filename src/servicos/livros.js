import axios from "axios"

const livrosAPI = axios.create({baseURL: "https://projeto-alura-books-fullstack-bgsl.vercel.app/"});

async function getLivros() {
    const response = await livrosAPI.get("/livros")

    return response.data

};

export {
    getLivros
}