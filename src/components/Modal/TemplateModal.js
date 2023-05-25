import React from "react";

function TemplateModal(props) {

    const isOpen = props.isOpen;

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onClose = props.onClose;

    if (!isOpen) {
        return null;
    } else {
        return (
        <>
            <button onClick={onClose}> X </button>
            <h1>MODAL</h1>
        </>
        );
    }
}

export default TemplateModal;