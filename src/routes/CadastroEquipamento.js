import Button from '../components/Button';
import Input from '../components/Input';
import styled from 'styled-components';

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
        <Button
        onClick={() => window.location.href = '/'}>
          Voltar
        </Button>
        <h1 className='title'>Cadastro de Equipamento</h1>
        <Input></Input>
      </AppContainer>
  );
}

export default CadastroEquipamento;
