import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CreatePostRender() {

    const reducer = useSelector(store => store.editClientInitialsReducer);

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
            <h1>CREATE POST CONDITIONAL RENDER</h1>
        </>
    )
}

export default CreatePostRender;