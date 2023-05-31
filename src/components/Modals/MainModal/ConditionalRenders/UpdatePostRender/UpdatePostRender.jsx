import React from "react";
import { useDispatch } from "react-redux";

function UpdatePostRender() {

    const dispatch = useDispatch();

    function setConditionalModalRender(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER",
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
            <button className="backButton" onClick={() => { setConditionalModalRender("MainRender"); setIsEditingClientCard(false) }}> {'<-'} </button>
            <button className="exitButton" onClick={() => { setConditionalModalRender("MainRender"); setIsEditingClientCard(false); setIsOpenMain(false) }}> X </button>
            <h1>UPDATE POST CONDITIONAL RENDER</h1>
        </>
    )
}

export default UpdatePostRender;