import styled from 'styled-components';
import { useState } from 'react';

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
  }              */
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

    const Equipamentos =[
        {
            "Equipamento":"Relé de Temperatura",
            "Local_Retirado":"UFV Arapongas",
            "Coordenador_UFV":"Leandro",
            "Pessoa_SetorResponsavel":"Cristian/Comissionamento",
            "Data_Retirada":"26/12/2024",
            "Local_Enviado":"UFV Iporã I",
            "Local_Devolucao":"Não se aplica",
            "Destinatario":"Não se aplica",
            "Data_Devolucao":"Não se aplica",
            "Data_Instalacao":"Não se aplica",
            "Observacao":"Substituição de equipamento em falha",
            "Pessoa_Atualizacao":"Danilo Santana"
        },
        {
            "Equipamento":"Relé de Temperatura",
            "Local_Retirado":"UFV Arapongas",
            "Coordenador_UFV":"Leandro",
            "Pessoa_SetorResponsavel":"Cristian/Comissionamento",
            "Data_Retirada":"26/12/2024",
            "Local_Enviado":"UFV Iporã I",
            "Local_Devolucao":"Não se aplica",
            "Destinatario":"Não se aplica",
            "Data_Devolucao":"Não se aplica",
            "Data_Instalacao":"Não se aplica",
            "Observacao":"Substituição de equipamento em falha",
            "Pessoa_Atualizacao":"John Doe"
        }

    ]

    
    
    function Table(){
        const [state, setState] = useState(Equipamentos);
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
            </tr>
            </thead>

            <tbody>
                {state.map((equipamento) => (
                    <tr key={equipamento.Equipamento}>
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