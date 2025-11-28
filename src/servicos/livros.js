import axios from "axios"

const livrosAPI = axios.create({baseURL: "https://projeto-alura-books-fullstack-c9jy-6udflwo8h.vercel.app/"});

async function getLivros() {
    const response = await livrosAPI.get("/livros")

    return response.data

};

export {
    getLivros
}