import './style.css';
import Logo from '../../components/Logo'
function Header(){
    return (
        <header className='App-header'>
        <Logo/>
        <h1>Controle de Garantia</h1>
        <button className='button-login'>Login</button>
    </header> 
    )
}

export default Header;


