import logo from '../../images/logo.png';
import './style.css';
function Logo(){
    return (
        <div className='logo'>
          <img src={logo} alt='logo da Araxa Engenharia' />
        </div>
    )
}

export default Logo;