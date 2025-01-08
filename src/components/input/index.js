import styled from "styled-components";
import { useState } from "react";

const InputContainer = styled.input`
    padding: 10px;
    border-radius: 5px;
    width: 200px;
`


function Input(){
    const [input, setInput] = useState('');
    return(
        <>
        <InputContainer placeholder="Digite aqui..." onBlur={event => setInput(event.target.value)}/>
      
            <p>{input}</p>
        </>
    )
}

export default Input;