import React from "react";
import { useDispatch } from "react-redux";

function EditClientCardRender() {

    const dispatch = useDispatch();

    function setConditionalModalRender_right(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER_RIGHT",
            payload: nameOfRender
        })
    }

    //function to change value of isOpenMain to true:
    function setIsOpenMain(boolean) {
        dispatch({
            type: "SET_ISOPENMAIN",
            payload: boolean
        })
    }

    function setIsEditingClientCard(boolean) {
        dispatch({
            type: "SET_ISEDITINGCLIENTCARD",
            payload: boolean
        })
    }

    return (
        <>
            <button className="backButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false) }}> {'<-'} </button>
            <button className="exitButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setIsOpenMain(false) }}> X </button>
            
            <h1>EDIT CLIENT CARD CONDITIONAL RENDER</h1>
        </>
    )
}

export default EditClientCardRender;