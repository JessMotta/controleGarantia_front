import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
  }
}`

const TableTitles =[
            'Material/Equipamento',
            'Retirado de',
            'Coordenador da usina',
            'Pessoa/Setor Responsável pela retirada',
            'Data da retirada',
            'Enviado para',
            'Devolução para',
            'Destinatário',
            'Devolução enviada em',
            'Instalado em',
            'Observação',
            'Atualizado por'
]

function CadastroEquipamento() {
  return (
    <AppContainer>
        <Button
        onClick={() => window.location.href = '/'}>
          Voltar
        </Button>
        <h1 className='title'>Cadastro de Equipamento</h1>
        <Form>
        {TableTitles.map(title => <Input>{title}</Input>)}
        </Form>
        
      </AppContainer>
  );
}

export default CadastroEquipamento;
