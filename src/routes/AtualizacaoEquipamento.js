import Button from '../components/Button';
import FormUpdate from '../components/FormUpdate';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
  }
}`
function AtualizacaoEquipamento() {


  return (
    <AppContainer>
      <Link to={'/'}>
        <Button>
          Voltar
        </Button>
        </Link>
        <h1 className='title'>Atualização de Equipamento</h1>
        <FormUpdate/>
        
      </AppContainer>
  );
}

export default AtualizacaoEquipamento;
