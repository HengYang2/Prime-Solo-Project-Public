import React from "react";
import { useDispatch, useSelector } from "react-redux";

function DeletePostRender() {

    const dispatch = useDispatch();

    //To match number of hook renders:
    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    //Used hooks:
    const createPostDateReducer = useSelector(store => store.createPostDateReducer);
    const createPostHoursReducer = useSelector(store => store.createPostHoursReducer);
    const createPostMileageReducer = useSelector(store => store.createPostMileageReducer);
    const createPostTaskDetailsReducer = useSelector(store => store.createPostTaskDetailsReducer);



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
            <div className="modalHeader">
                <button className="backButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false) }}> {'<-'} </button>
                <button className="exitButtonCombo" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setIsOpenMain(false) }}> X </button>
            </div>


            <div className="modalBody">
                <h1>DELETE POST CONDITIONAL RENDER</h1>
            </div>

            <div className="modalFooter">

            </div>


        </>
    )
}

export default DeletePostRender;