import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getEquipments, deleteEquipment } from '../../services/equipaments';
import { BsFillTrash3Fill } from "react-icons/bs";
import Button from '../Button';

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
    max-width: 200px;
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

    
    
    function Table(){
        const [equipmentsList, setEquipmentsList] = useState([]);
        
        async function fetchEquipments(){
          const equipmentsAPI = await getEquipments()
          setEquipmentsList(equipmentsAPI);
          
        }

        async function removeEquipment(id){
          await deleteEquipment(id);
          alert(`Equipmamento ${id} deletado com sucesso!`);
        }

        useEffect(() => {
          fetchEquipments();
            ;
        }, [equipmentsList]);



        
        return (
          <TableContainer>
            <thead>
            <tr>
                <th>Material/Equipamento</th>
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
                      <td><Button onClick={() => removeEquipment(equipamento.id)}><BsFillTrash3Fill/></Button></td>
                    </tr>
                  )  
                   
                })}             
            </tbody>
        </TableContainer>
    )
}

export default Table;