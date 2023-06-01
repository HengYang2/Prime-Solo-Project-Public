import React from "react";
import { useDispatch } from "react-redux";

function MainRender() {

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


    return (<>
        <button className="exitButton" onClick={() => { setIsOpenMain(false) }}> X </button>

        <div className="headerOfModal">
            <h1 className="inputHeader">Select The Desired Client Card to be Deleted:</h1>
        </div>
        <div className="bodyOfModal">
            <button onClick={() => { setConditionalModalRender_right("CreatePostRender_Right"); setIsEditingClientCard(true) }}>Create new post</button>
            <button onClick={() => { setConditionalModalRender_right("UpdatePostRender_Right"); setIsEditingClientCard(true) }}>Update existing post</button>
            <button onClick={() => { setConditionalModalRender_right("DeletePostRender_Right"); setIsEditingClientCard(true) }}>Delete existing post</button>
        </div>
    </>)

}

export default MainRender;