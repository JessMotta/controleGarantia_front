import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getEquipments, deleteEquipment } from '../../services/equipaments';
import { BsFillTrash3Fill, BsArchive } from "react-icons/bs";
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../Modal';


const TableContainer = styled.table`
margin:10px;
text-align: center;
caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate; */
  /* border-spacing: 5px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }           */

  td,
  th {
    max-width: 155px;
    word-wrap: break-word;
    padding: 10px 5px;
    border: 1px solid white;
    vertical-align: center;
  }
  /* td,
  th {
    border: 1px solid;
  } */


  td {
    padding: 5px 10px;
    }
  
  tbody tr {
    :hover {
      background-color: #3fbb9f;
      color: white;
    }
  }
  thead > tr {
    background-color: #282c34;
    color: white;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
    `

const ModalButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
    
    function Table(){
        const [equipmentsList, setEquipmentsList] = useState([]);
        const [showModal, setShowModal] = useState(false);
        const [idEquipment, setIdEquipment] = useState();
        const navigate = useNavigate();
        
        async function fetchEquipments(){
          const equipmentsAPI = await getEquipments()
          setEquipmentsList(equipmentsAPI);
          
        }

        // envia para outra página os dados do equipamento para serem atualizados
        async function fetchEquipmentById(equipamento){
          navigate(`/atualizacaoEquipamento/${equipamento.id}`, {state: {equipamento}});
        }

        // Funções para o botão modal, deletar ou cancelar a remoção do equipamento da lista
        function openConfirmation(equipamento){
          setShowModal(true);
          setIdEquipment(equipamento.id);
        }

        function closeConfirmation(){
          setShowModal(false);
        }
       
        // remove o equipamento da lista
        async function removeEquipment(){
          await deleteEquipment(idEquipment);
          setShowModal(false);
          toast.warn('Equipamento deletado com sucesso!', {autoClose: 3000});
        }

        
        // carrega lista de equipamentos
        useEffect(() => {
          fetchEquipments();
            ;
        }, [equipmentsList]);



        
        return (
          <>
          <TableContainer>
            <thead>
            <tr>
                <th>Material/ Equipamento</th>
                <th>Retirado de</th>
                <th>Coordenador da usina</th>
                <th>Pessoa/Setor Responsável pela retirada</th>
                <th>Data da retirada</th>
                <th>Enviado para</th>
                <th>Devolução para</th>
                <th>Destinatário</th>
                <th>Devolução enviada em</th>
                <th>Instalado em</th>
                <th>Observação</th>
                <th>Atualizado por</th>
                <th>Editar</th>
                <th>Deletar</th>
            </tr>
            </thead>

            <tbody>
             
                 {equipmentsList.map((equipamento) => {                 
                  return (
                    <tr key={equipamento.id}>
                      <td>{equipamento.Equipamento}</td>
                      <td>{equipamento.Local_Retirado}</td>
                      <td>{equipamento.Coordenador_UFV}</td>
                      <td>{equipamento.Pessoa_SetorResponsavel}</td>
                      <td>{equipamento.Data_Retirada}</td>
                      <td>{equipamento.Local_Enviado}</td>
                      <td>{equipamento.Local_Devolucao}</td>
                      <td>{equipamento.Destinatario}</td>
                      <td>{equipamento.Data_Devolucao}</td>
                      <td>{equipamento.Data_Instalacao}</td>
                      <td>{equipamento.Observacao}</td>
                      <td>{equipamento.Pessoa_Atualizacao}</td>
                      <td><Button onClick={() => fetchEquipmentById(equipamento)}><BsArchive /></Button></td>
                      <td><Button onClick={() => openConfirmation(equipamento)}><BsFillTrash3Fill/></Button></td>
                    </tr>
                  )  
                   
                })}             
            </tbody>
            <Modal isOpen={showModal}>
              <p>Você deseja remover esse equipamento da lista?</p>
            <ModalButtons>
              <Button onClick={removeEquipment}>Deletar</Button>
              <Button bgcolor={'#1e2229'} fontcolor={'white'} onClick={closeConfirmation}>Cancelar</Button>
            </ModalButtons>
          </Modal> 
          </TableContainer>
         
          </>
    )
}

export default Table;