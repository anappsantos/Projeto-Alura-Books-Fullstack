import axios from "axios"

const livrosAPI = axios.create({baseURL: "http://localhost:8000"});

async function getLivros() {
    const response = await livrosAPI.get("/livros")

    return response.data

};

export {
    getLivros
}