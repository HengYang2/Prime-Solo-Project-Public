import React from "react";
import ReactDom from "react-dom";

//Css styling for the Modal:
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    paddding: '50px',
    zIndex: 10000
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 10000
}

function TemplateModal(props) {

    const isOpen = props.isOpen;

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onClose = props.onClose;

    if (!isOpen) {
        return null;
    } else {
        return ReactDom.createPortal (

            <>
                <div style={OVERLAY_STYLES}></div>
                <div style={MODAL_STYLES}>
                    <button onClick={onClose}> X </button>
                    <h1>MODAL</h1>
                </div>
            </>,
            document.getElementById('portal')
        )
    }
}

export default TemplateModal;