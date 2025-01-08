import styled from 'styled-components'

const ButtonLoginContainer = styled.button`
.button-login{
    padding: 10px 20px;
    border-radius:5px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    background-color: white;
    color: #1e2229;
}
`

function ButtonLogin(){
    return(
        <ButtonLoginContainer>
        <button className='button-login'>Login</button>
        </ButtonLoginContainer>
    )
}

export default ButtonLogin