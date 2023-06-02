import React from "react";
import { useDispatch, useSelector } from "react-redux";

function MainRender_Right() {

    const dispatch = useDispatch();

    //To match number of hook renders: 
    const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);
    const editStartDateReducer = useSelector(store => store.editStartDateReducer);
    const editEndDateReducer = useSelector(store => store.editEndDateReducer);
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);

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

        <div className="modalHeader">
            <button className="exitButton" onClick={() => { setIsOpenMain(false) }}> X </button>
        </div>

        <div className="modalBody">
            <h1 className="mainHeaderPrompt">Which Client Card Action Would You Like To Perform?</h1>
            <div className="mainFlexDiv">
                <button className="mainFlexBtn" onClick={() => { setConditionalModalRender_right("CreatePostRender_Right"); setIsEditingClientCard(true) }}>Create new post</button>
                <button className="mainFlexBtn" onClick={() => { setConditionalModalRender_right("UpdatePostRender_Right"); setIsEditingClientCard(true) }}>Update existing post</button>
                <button className="mainFlexBtn" onClick={() => { setConditionalModalRender_right("DeletePostRender_Right"); setIsEditingClientCard(true) }}>Delete existing post</button>
            </div>
        </div>

        <div className="modalFooter">
        
        </div>
    </>)

}

export default MainRender_Right;