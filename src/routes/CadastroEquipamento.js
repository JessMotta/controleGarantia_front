/* import { useState, useEffect } from 'react';
import Input from '../components/Input';
import { createEquipment } from '../services/equipaments'; */
import Button from '../components/Button';
import FormCreate from '../components/FormCreate';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
  }
}`

// const TableTitles =[
//   {
//   'equipamento': 'Material/Equipamento',
//   'retirado':'Retirado de',
//   'coordenador':'Coordenador da usina',
//   'responsavel':'Pessoa/Setor Responsável pela retirada',
//   'data-retirada':'Data da retirada',
//   'enviado':'Enviado para',
//   'local-devolucao':'Devolução para',
//   'destinatario':'Destinatário',
//   'data-devolucao':'Devolução enviada em',
//   'local-instalado':'Instalado em',
//   'observacao':'Observação',
//   'atualizado':'Atualizado por'
// }
// ]

function CadastroEquipamento() {
  

 


  // async function insertEquipment(equipment){
  //   const insertedEquipment = await createEquipment(equipment);
  //   setEquipment(insertedEquipment);
  // }

  // useEffect(() => {
  //   insertEquipment();
  // }, [])



  return (
    <AppContainer>
        <Button
        onClick={() => window.location.href = '/'}>
          Voltar
        </Button>
        <h1 className='title'>Cadastro de Equipamento</h1>
        <FormCreate/>
        
      </AppContainer>
  );
}

export default CadastroEquipamento;
