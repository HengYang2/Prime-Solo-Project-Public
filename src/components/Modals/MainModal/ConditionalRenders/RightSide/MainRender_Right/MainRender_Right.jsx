import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MainRender_Right() {

    const dispatch = useDispatch();

    //To match number of hook renders:
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);

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
            <h1 className="inputHeader">Which Client Card Action Would You Like To Perform?:</h1>
        </div>
        <div className="bodyOfModal">
            <button onClick={() => { setConditionalModalRender_right("CreatePostRender_Right"); setIsEditingClientCard(true) }}>Create new post</button>
            <button onClick={() => { setConditionalModalRender_right("UpdatePostRender_Right"); setIsEditingClientCard(true) }}>Update existing post</button>
            <button onClick={() => { setConditionalModalRender_right("DeletePostRender_Right"); setIsEditingClientCard(true) }}>Delete existing post</button>
        </div>
    </>)

}

export default MainRender_Right;