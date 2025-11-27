## 📚 Alura Books - Aplicação Web e API

Este é o repositório do projeto Alura Books, uma aplicação web full-stack desenvolvida para simular uma plataforma de pesquisa e gerenciamento de favoritos de livros, utilizando React no Frontend e Node.js/Express no Backend (API).

## 🚀 Tecnologias Utilizadas

| Componente | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Frontend (Cliente)** | React (CRA) | Interface de usuário para pesquisa e visualização. |
| | Styled-Components | Estilização do Frontend. |
| **Backend (API)** | Node.js | Ambiente de execução do servidor. |
| | Express | Framework para criação das rotas da API REST. |
| | FS (File System) | Simulação de banco de dados (leitura e escrita em arquivos JSON). |
| **Outros** | Axios | Cliente HTTP para comunicação entre Frontend e Backend. |

---

## 💻 Estrutura do Projeto

O repositório está dividido em duas pastas principais:

* `alura-books/`: Contém todo o código do cliente React (Frontend).
* `alura-books-server/`: Contém a API RESTful desenvolvida em Node.js/Express.

### `alura-books-server/` (Detalhes do Backend)

| Arquivo/Pasta | Função |
| :--- | :--- |
| `app.js` | Configuração principal do servidor Express e Middlewares. |
| `rotas/` | Define todas as rotas (endpoints) da API (`/livros`, `/favoritos`). |
| `controladores/` | Funções *handler* que recebem `req` e `res` e chamam a lógica de negócio. |
| `servicos/` | Contém a lógica de negócio (CRUD: `getTodosLivros`, `insereFavorito`, etc.) usando `fs`. |
| `livros.json` | JSON que simula a base de dados de todos os livros. |
| `favoritos.json` | JSON que simula a base de dados de favoritos do usuário. |

---

## ⚙️ Como Rodar o Projeto

Para rodar o projeto localmente, você precisará de **dois terminais** abertos: um para o servidor e outro para o cliente React.

### 1. Inicializar o Backend (API)

1.  No primeiro terminal, navegue até a pasta do servidor:
    ```bash
    cd alura-books-server
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor (geralmente na porta 8000):
    ```bash
    npm start
    ```

### 2. Inicializar o Frontend (React)

1.  No segundo terminal, navegue até a pasta do cliente:
    ```bash
    cd alura-books
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie a aplicação React (geralmente na porta 3000):
    ```bash
    npm start
    ```
    A aplicação será aberta automaticamente no seu navegador.

---

## 🛠️ Endpoints da API

A API expõe os seguintes *endpoints* (rotas):

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/livros` | Retorna a lista completa de livros. |
| **GET** | `/favoritos` | Retorna a lista de livros favoritos. |
| **POST** | `/favoritos/:id` | Adiciona um livro à lista de favoritos. |
| **DELETE** | `/favoritos/:id` | Remove um livro da lista de favoritos. |

---

## 🤝 Contribuição

Sinta-se à vontade para sugerir melhorias, reportar *bugs* ou adicionar novos recursos.

1.  Faça um *fork* (cópia) do projeto.
2.  Crie uma *branch* para sua funcionalidade:
    ```bash
    git checkout -b feature/nome-da-feature
    ```
3.  Faça suas mudanças e comite:
    ```bash
    git commit -m 'feat: mensagem do commit'
    ```
4.  Faça o *push* para a sua *branch*:
    ```bash
    git push origin feature/nome-da-feature
    ```
5.  Abra um **Pull Request**.

---

⌨️ com ❤️ por **[Ana Paula Santos]**