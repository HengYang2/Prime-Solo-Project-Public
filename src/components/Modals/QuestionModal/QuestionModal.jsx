import React from "react";
import ReactDom from "react-dom";

//Import html return from QuestionModalRender.jsx file:
import QuestionModalRender from './QuestionModalRender';

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
            <QuestionModalRender 
                onCloseQ={onCloseQ}
                selectedClientCard={selectedClientCard}
            />,
            document.getElementById('portal')
        )
    }
}

export default QuestionModal;