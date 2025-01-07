import Logo from '../../components/Logo'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #282c34;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  
    h1 {
      color: white;
    }
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
function Header(){
    return (
        <HeaderContainer>
        <Logo/>
        <h1>Controle de Garantia</h1>
        <button className='button-login'>Login</button>
    </HeaderContainer> 
    )
}

export default Header;


