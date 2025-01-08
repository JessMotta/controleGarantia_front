import Logo from '../Logo'
import Button from '../Button'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
          <Link to='/'>
            <Logo/>
          </Link>
        <h1 text-3xl>Controle de Garantia</h1>
        <Button>Login</Button>
    </HeaderContainer> 
    )
}

export default Header;


