import React from "react";
import ReactDom from "react-dom";

//Import html return from DCCModalRender.jsx file:
import DCCModalRender from './DCCModalRender';

//Import css styling for the Modal:
import './DeleteClientCardModal.css';

function DeleteClientCardModal(props) {

    const isOpenD = props.isOpenD;

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onCloseD = props.onCloseD;

    if (!isOpenD) {
        return null;
    } else {
        return ReactDom.createPortal(
            <DCCModalRender 
                onCloseD={onCloseD}
            />,
            document.getElementById('portal')
        )
    }
}

export default DeleteClientCardModal;