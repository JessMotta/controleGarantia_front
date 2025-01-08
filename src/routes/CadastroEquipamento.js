import Button from '../components/Button';
import Input from '../components/Input';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
}`

function CadastroEquipamento() {
  return (
    <AppContainer>
        <Button/>
        <Input></Input>
      </AppContainer>
  );
}

export default CadastroEquipamento;
