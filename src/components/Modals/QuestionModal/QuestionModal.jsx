import React from "react";
import ReactDom from "react-dom";

//Import html return from DCCModalRender.jsx file:
import DCCModalRender from './QuestionModalRender';

//Import css styling for the Modal:
import './QuestionModalRender';

function QuestionModal(props) {

    const isOpenQ = props.isOpenQ;
    const onCloseQ = props.onCloseQ;
    const selectedClientCard = props.selectedClientCard;

    if (!isOpenQ) {
        return null;
    } else {
        return ReactDom.createPortal(
            <DCCModalRender 
                onCloseQ={onCloseQ}
                selectedClientCard={selectedClientCard}
            />,
            document.getElementById('portal')
        )
    }
}

export default QuestionModal;