import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";

//Import html return from CCCModalRender.jsx file:
import CCCModalRender from './CCCModalRender';

//Import css styling for the Modal:
import './CreateClientCardModal.css';

function CreateClientCardModal(props) {

    const isOpen = props.isOpen;

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onClose = props.onClose;
    
    if (!isOpen) {
        return null;
    } else {
        return ReactDom.createPortal(
            <CCCModalRender 
                onClose={onClose}
            />,
            document.getElementById('portal')
        )
    }
}

export default CreateClientCardModal;