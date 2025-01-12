import React from 'react'
import styled from 'styled-components'

const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    zIndex: 10000;

`

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px 100px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
`


export default function Modal({isOpen, children}) {
    if(isOpen){
        return (
            <BackgroundContainer>
                <ModalContainer>{children}</ModalContainer>
            </BackgroundContainer>
        )
    }
    return null;
}
