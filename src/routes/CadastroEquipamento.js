import Button from '../components/Button';
import FormCreate from '../components/FormCreate';
import styled from 'styled-components';
import { Link } from'react-router-dom';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
  }
}`
function CadastroEquipamento() {
  return (
    <AppContainer>
      <Link to={'/'}>
        <Button>
          Voltar
        </Button>
        </Link>
        <h1 className='title'>Cadastro de Equipamento</h1>
        <FormCreate/>
        
      </AppContainer>
  );
}

export default CadastroEquipamento;
