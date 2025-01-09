import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { createEquipment } from '../../services/equipaments';
import Input from '../Input';
import Button from '../Button';

const FormContainer =styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
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
const ButtonsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

function Form(){
    const {register, handleSubmit} = useForm();

    async function onSubmit(data){
       await createEquipment(data);
         window.location.href = '/';

    } 



    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer>
            <LabelContainer htmlFor="Equipamento">Material/Equipamento</LabelContainer>
            <InputContainer {...register('Equipamento', {required: true})} type="text" />

            <LabelContainer htmlFor="Local_Retirado">Retirado de</LabelContainer>
            <InputContainer {...register('Local_Retirado')} type="text" />

            <LabelContainer htmlFor="Coordenador_UFV">Coordenador da UFV</LabelContainer>
            <InputContainer {...register('Coordenador_UFV')} type="text" />

            <LabelContainer htmlFor="Pessoa_SetorResponsavel">Pessoa/Setor Responsável pela retirada</LabelContainer>
            <InputContainer {...register('Pessoa_SetorResponsavel')} type="text" />    

            <LabelContainer htmlFor="Data_Retirada">Data da retirada</LabelContainer>
            <InputContainer {...register('Data_Retirada')} type="text" />   

            <LabelContainer htmlFor="Local_Enviado">Enviado para</LabelContainer>
            <InputContainer {...register('Local_Enviado')} type="text" />    

            <LabelContainer htmlFor="Local_Devolucao">Devolução para</LabelContainer>
            <InputContainer {...register('Local_Devolucao')} type="text" />    

            <LabelContainer htmlFor="Destinatario">Destinatário</LabelContainer>
            <InputContainer {...register('Destinatario')} type="text" />

            <LabelContainer htmlFor="Data_Devolucao">Devolução enviada em</LabelContainer>
            <InputContainer {...register('Data_Devolucao')} type="text" />   

            <LabelContainer htmlFor="Data_Instalacao">Instalado em</LabelContainer>
            <InputContainer {...register('Data_Instalacao')} type="text" />   

            <LabelContainer htmlFor="Observacao">Observação</LabelContainer>
            <InputContainer {...register('Observacao')} type="text" />   

            <LabelContainer htmlFor="Pessoa_Atualizacao">Atualizado por
            </LabelContainer>
            <InputContainer {...register('Pessoa_Atualizacao')} type="text" />        
                       
        </LabelInputContainer>
        
            <ButtonsContainer>
               <Button bgcolor={'#1e2229'} fontcolor={'white'} type={'submit'}>Salvar</Button>
                <Button onClick={() => window.location.href= '/'}>Cancelar</Button>
            </ButtonsContainer>
        </FormContainer>
    )
}

export default Form;