import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function UpdatePostRender() {

    //Unused hooks - Needed to prevent hook erros:
    // //Edit client card reducer:
    // const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);
    const editStartDateReducer = useSelector(store => store.editStartDateReducer);
    const editEndDateReducer = useSelector(store => store.editEndDateReducer);
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);


    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);

    //Need a SAGA get request for all posts for a given client:
    const postListReducer = useSelector(store => store.postListReducer);

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
            <>
                <button className="backButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetCreatePostReducers() }}> {'<-'} </button>
                <button className="exitButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetCreatePostReducers(); setIsOpenMain(false) }}> X </button>

                <div className="inputDiv">
                    <h4 className="inputHeader">Post Library:</h4>
                    <div className="postListDiv">
                        {postListReducer.map((post) => (
                            <button key={post.id}> 
                                post.date;    
                            </button>
                        ))}
                    </div>
                </div>

                <div className="footerOfModal">
                    <button className="createClientCardButton" onClick={() => { createPost() }}>Create Post</button>
                </div>
            </>
        </>
    )
}

export default UpdatePostRender;