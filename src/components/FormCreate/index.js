import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { createEquipment } from '../../services/equipaments';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

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

const InfoContainer = styled.h3`
    text-align: center;
    font-size: 14px;
    color: red;
    margin-bottom: 20px;
`
function FormCreate(){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
   

    async function onSubmit(data){
        const verifyInputs = Object.values(data);
        console.log(verifyInputs);
        if(verifyInputs.includes('') || verifyInputs.includes(undefined)){
            toast.error('Todos os campos devem ser preenchidos!', {autoClose: 3000});
            return;
        } else {
                 await createEquipment(data);
                 console.log(verifyInputs);
                 toast.success('Equipamento cadastrado com sucesso!', {autoClose: 3000});
                 navigate('/');
             }
        
            
        }


    return (
        <>
        <InfoContainer>Importante: para os campos que não houverem informações coloque "Não se aplica", não deixe nenhum campo vazio</InfoContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer>
            <LabelContainer htmlFor="Equipamento">Material/Equipamento</LabelContainer>
            <InputContainer {...register('Equipamento')} type="text" placeholder='Digite aqui o material/equipamento...' />

            <LabelContainer htmlFor="Local_Retirado">Retirado de</LabelContainer>
            <InputContainer {...register('Local_Retirado')} type="text" placeholder='Digite aqui o local de onde foi tirado...'/>

            <LabelContainer htmlFor="Coordenador_UFV">Coordenador da UFV</LabelContainer>
            <InputContainer {...register('Coordenador_UFV')} type="text"  placeholder='Digite aqui quem é coordenar da UFV...'/>

            <LabelContainer htmlFor="Pessoa_SetorResponsavel">Pessoa/Setor Responsável pela retirada</LabelContainer>
            <InputContainer {...register('Pessoa_SetorResponsavel')} type="text" placeholder='Digite aqui quem é a pessoa/setor responsável...'/>    

            <LabelContainer htmlFor="Data_Retirada">Data da retirada</LabelContainer>
            <InputContainer {...register('Data_Retirada')} type="text" placeholder='Digite aqui a data da retira, formato: DD/MM/AAAA' />   

            <LabelContainer htmlFor="Local_Enviado">Enviado para</LabelContainer>
            <InputContainer {...register('Local_Enviado')} type="text" placeholder='Digite aqui o local para onde foi enviado...'/>    

            <LabelContainer htmlFor="Local_Devolucao">Devolução para</LabelContainer>
            <InputContainer {...register('Local_Devolucao')} type="text" placeholder='Digite aqui o local da devolução...'/>    

            <LabelContainer htmlFor="Destinatario">Destinatário</LabelContainer>
            <InputContainer {...register('Destinatario')} type="text" placeholder='Digite aqui o destinário...'/>

            <LabelContainer htmlFor="Data_Devolucao">Devolução enviada em</LabelContainer>
            <InputContainer {...register('Data_Devolucao')} type="text" placeholder='Digite aqui a data da devolução, formato: DD/MM/AAAA' />   

            <LabelContainer htmlFor="Data_Instalacao">Instalado em</LabelContainer>
            <InputContainer {...register('Data_Instalacao')} type="text" placeholder='Digite aqui a data da instalação, formato: DD/MM/AAAA'/>   

            <LabelContainer htmlFor="Observacao">Observação</LabelContainer>
            <InputContainer {...register('Observacao')} type="text" placeholder='Digite aqui a observação...'/>   

            <LabelContainer htmlFor="Pessoa_Atualizacao">Atualizado por
            </LabelContainer>
            <InputContainer {...register('Pessoa_Atualizacao')} type="text" placeholder='Digite aqui seu nome e último sobrenome... '/>        
                       
        </LabelInputContainer>
        
            <ButtonsContainer>
               <Button bgcolor={'#1e2229'} fontcolor={'white'} type={'submit'} >Salvar</Button>
               <Link to={'/'}>
                <Button>Cancelar</Button>
                </Link>
            </ButtonsContainer>
        </FormContainer>
        </>
    )
}

export default FormCreate;