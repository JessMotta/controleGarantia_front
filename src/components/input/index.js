import styled from "styled-components";

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
    `
    
    const InputContainer = styled.input`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    width: 800px;
    
`


function Input({children, name}){
    return(
        <LabelInputContainer>
        <LabelContainer htmlFor={name}>
            {children}
        </LabelContainer>
            <InputContainer 
            name={name}
            type="text"
            placeholder="Digite aqui..." />
        </LabelInputContainer>
    )
}

export default Input;