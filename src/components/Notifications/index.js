import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 20%;
    & button {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        border-radius: 4px;
        font-weight: bold;
        font-size: 14px;
        border: 0;
        color: #fff;
        background: #009cde;
        margin-top: 5px;
        cursor: pointer;
    }
`;

function Notifications () {

    function handleDefault() {
        toast('Mensagem default');
    }


    function handleError() {
        toast.error('Mensagem error');
    }


    function handleSuccess() {
        toast.success('Mensagem success');
    }


    function handleInfo() {
        toast.info('Mensagem info');
    }


    function handleWarn() {
        toast.warn('Mensagem warn');
    }


    function handleCustom() {
        toast('Mensagem customizada', {
        position: toast.POSITION.TOP_LEFT,
        className: 'sua-classe',
    });
}

return (
        <Container>
            <Buttons>
            <button type="button" onClick={handleDefault}>
                Default
            </button>

            <button type="button" onClick={handleError}>
                Error
            </button>

            <button type="button" onClick={handleSuccess}>
                Success
            </button>

            <button type="button" onClick={handleWarn}>
                Warn
            </button>

            <button type="button" onClick={handleInfo}>
                Info
            </button>

            <button type="button" onClick={handleCustom}>
                Custom
            </button>
            
        </Buttons>
    </Container>
    );
}
export default Notifications;