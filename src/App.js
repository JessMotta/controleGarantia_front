import Header from './components/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

.button{
  margin: 10px;
  padding: 10px 20px;
  border-radius:5px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: #1e2229;
  color: white;
}`

function App() {
  return (
    <AppContainer>
      <Header/>
      <div>
        <button className='button'>Cadastrar equipamento</button>
      </div>
      </AppContainer>
  );
}

export default App;
