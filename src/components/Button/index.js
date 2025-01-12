import styled from 'styled-components';

const ButtonContainer = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border-radius:5px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #1e2229;
  background-color: ${(props) => props.bgcolor || 'white'};
  color: ${(props) => props.fontcolor || '#1e2229'};
  &:disabled{
    background-color: #ccc;
    color: #666;
    border-color: ##ccc;
    cursor: not-allowed;    
    }
`

function Button({children, bgcolor, fontcolor, onClick, type, status}){
    return (
        <ButtonContainer 
        bgcolor={bgcolor} 
        fontcolor={fontcolor}
        onClick={onClick}
        type={type}
        disabled={status}>
            {children}
        </ButtonContainer>
    )
}

export default Button;