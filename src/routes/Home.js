import Table from '../components/Table';
import Button from '../components/Button';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
}`

function Home() {
  return (
    <AppContainer>
        <Button
          bgcolor= {'#1e2229'}
          fontcolor= {'white'}
          onClick={() => window.location.href = '/cadastroEquipamento'}>
          Cadastrar equipamento 
          </Button>
        <Table/>
      </AppContainer>
  );
}

export default Home;
