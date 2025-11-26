import styled from "styled-components"

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const icones = [
  "/imagens/perfil.svg",
  "/imagens/sacola.svg"
];

function IconesHeader() {
  return (
  <Icones>
    {icones.map((icone, index) => (
      <Icone key={index}>
        <img src={icone}
        alt="Ícone do IconesHeader"
        />
        </Icone>
        ))}
  </Icones>
  )
}

export default IconesHeader 