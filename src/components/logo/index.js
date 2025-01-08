import logo from '../../images/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
max-width: 150px;`

const LogoImage = styled.img`
width:150px;
`
function Logo(){
    return (
        <LogoContainer>
          <LogoImage src={logo} alt='logo da Araxa Engenharia' />
        </LogoContainer>
    )
}

export default Logo;