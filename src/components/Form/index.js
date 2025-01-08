import styled from 'styled-components';


const FormContainer =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

function Form({children}){
    return (
        <FormContainer>
            {children}
        </FormContainer>
    )
}

export default Form;