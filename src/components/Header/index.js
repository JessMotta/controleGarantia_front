import Logo from '../Logo'
import ButtonLogin from '../ButtonLogin'
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
  }
  `
function Header(){
    return (
        <HeaderContainer>
        <Logo/>
        <h1>Controle de Garantia</h1>
        <ButtonLogin/>
    </HeaderContainer> 
    )
}

export default Header;


