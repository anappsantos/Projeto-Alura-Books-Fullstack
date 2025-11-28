import { livros } from "../UltimosLancamentos/dadosUltimosLancamentos";
import { Titulo } from "../Titulo"
import CardRecomenda from '../CardRecomenda'
import styled from  "styled-components"

const UltimosLancamentosContainer = styled.section `
 background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    img {
        max-width: 150px;    /* largura máxima */
        max-height: 200px;   /* altura máxima */
        object-fit: cover;   /* mantém proporção sem deformar */
        margin: 0 10px;      /* espaço entre as capas */
    }
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo $cor="#EB9B00"
            $tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                    {livros.map((livro, index) => (
        <img 
        key={index}
        src={`/imagens/${livro.src}`}
        alt={`Capa do Livro ${livro.nome}`}
        />

        ))} 
                </NovosLivrosContainer>
                <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com o Google"
                img="/imagens/livro2.png"
                />
                  
   </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos