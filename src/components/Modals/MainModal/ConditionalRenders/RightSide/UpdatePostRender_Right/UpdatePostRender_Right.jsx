import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//
import PostListing from "./PostListing/PostListing";

function UpdatePostRender() {

    //Unused hooks - Needed to prevent hook erros:
    // //Edit client card reducer:
    // const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);
    const editStartDateReducer = useSelector(store => store.editStartDateReducer);
    const editEndDateReducer = useSelector(store => store.editEndDateReducer);
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);


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
            <div className="modalHeader">
                <button className="backButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false);  }}> {'<-'} </button>
                <button className="exitButtonCombo" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false);  setIsOpenMain(false) }}> X </button>
            </div>

            <div className="modalBody">
                <h4 className="postListHeader">Post Library:</h4>
                <div className="postListDiv">
                    {postListReducer.map((post) => (
                        <PostListing key={post.id} postInfo={post} />
                    ))}
                </div>
            </div>

            <div className="modalFooter">
                <button className="centeredBtn" onClick={() => { createPost() }}>Select Post</button>
            </div>
        </>
    )
}

export default UpdatePostRender;