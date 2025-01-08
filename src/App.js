import Header from './components/Header';
import Table from './components/Table';
import Button from './components/Button';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
}`

function App() {
  return (
    <AppContainer>
      <Header/>
        <Button/>
        <Table/>
      </AppContainer>
  );
}

export default App;
