import styled from "styled-components";
import { useState } from "react";

const LabelInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 10px 20px;
    `

const LabelContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 50px;
`

const InputContainer = styled.input`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 500px;
`


function Input(){
    const [input, setInput] = useState('');
    return(
        <LabelInputContainer>
        <LabelContainer>
            Material/Equipamento
            <InputContainer 
            placeholder="Digite aqui..." 
            onBlur={event => setInput(event.target.value)}/>

        </LabelContainer>
        </LabelInputContainer>
    )
}

export default Input;