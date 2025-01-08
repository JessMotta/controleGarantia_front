import styled from 'styled-components';

const ButtonContainer = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border-radius:5px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: ${props => props.bgColor || 'white'};
  color: ${props => props.fontColor || '#1e2229'};
`

function Button({children, bgColor, fontColor}){
    return (
        <ButtonContainer 
        bgColor={bgColor} 
        fontColor={fontColor}>
            {children}
        </ButtonContainer>
    )
}

export default Button;