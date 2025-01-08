import Table from '../components/Table';
import Button from '../components/Button';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
}`

function Home() {
  return (
    <AppContainer>
        <Button
          bgColor= {'#1e2229'}
          fontColor= {'white'}>
          Cadastrar equipamento 
          </Button>
        <Table/>
      </AppContainer>
  );
}

export default Home;
