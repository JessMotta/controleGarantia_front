import styled from 'styled-components';

const ButtonContainer = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border-radius:5px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: #1e2229;
  color: white;
`

function Button(){
    return (
        <ButtonContainer onClick={() => console.log('Cliquei')}>
        Cadastrar equipamento
        </ButtonContainer>
    )
}

export default Button;