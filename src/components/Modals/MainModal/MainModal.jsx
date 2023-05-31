import React from "react";
import ReactDom from "react-dom";

//Import html return from MainModalRender.jsx file:
import MainModalRender from './MainModalRender';

//Import css styling for the Modal:
import './MainModal.css';

function MainModal(props) {

    const isOpenM = props.isOpenM;
    const onCloseM = props.onCloseM;
    const selectedClientCard = props.selectedClientCard;

    if (!isOpenM) {
        return null;
    } else {
        return ReactDom.createPortal(
            <MainModalRender 
                onCloseM={onCloseM}
                selectedClientCard={selectedClientCard}
            />,
            document.getElementById('portal')
        )
    }
}

export default MainModal;