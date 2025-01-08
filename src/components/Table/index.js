import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getEquipments } from '../../services/equipaments';

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
    padding: 10px 5px;
    border: 1px solid white;
    vertical-align: center;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  tr th:nth-child(1), tr td:nth-child(1) {
      display: none;
      }
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
        useEffect(() => {
          fetchEquipments();
            ;
        }, [equipmentsList]);



        
        return (
          <TableContainer>
            <thead>
            <tr>
                <th>ID</th>
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
            </tr>
            </thead>

            <tbody>
             
                 {equipmentsList.map((equipamento) => (
                    <tr key={equipamento._id}>
                        {Object.values(equipamento).map((data) =>(
                          <td>{data}</td>
                        ))} 
                    </tr>
                   
                ))}             
            </tbody>
        </TableContainer>
    )
}

export default Table;