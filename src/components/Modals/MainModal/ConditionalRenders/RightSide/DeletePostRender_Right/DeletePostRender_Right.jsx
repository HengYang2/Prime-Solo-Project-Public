import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//
import PostListing from "../UpdatePostRender_Right/PostListing/PostListing";

function DeletePostRender() {

    //Unused hooks - Needed to prevent hook erros:
    // //Edit client card reducer:
    // const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);
    const editStartDateReducer = useSelector(store => store.editStartDateReducer);
    const editEndDateReducer = useSelector(store => store.editEndDateReducer);
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);


    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);


    //Used hooks:
    const postListReducer = useSelector(store => store.postListReducer);
    const selectedPostReducer = useSelector(store => store.selectedPostReducer);

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


    //Dispatch functions that need to be set for the next page render:
    function setCreatePostHoursReducer(number) {
        dispatch({
            type: "SET_POST_HOURS",
            payload: number
        })
    }
    function setCreatePostMileageReducer(number) {
        dispatch({
            type: "SET_POST_MILEAGE",
            payload: number
        })
    }
    function setCreatePostTaskDetailsReducer(details) {
        dispatch({
            type: "SET_POST_TASK_DETAILS",
            payload: details
        })
    }

    //Check that a post is selected before proceeding to the UpdatePostRender_Right_Confirm render:
    function selectedPostCheck() {
        if (selectedPostReducer == null) {
            return console.log('You need to select a post before proceeding.');
        } else {
            //Set render to the 'confirmDeletePostRender_Right'
            setConditionalModalRender_right("confirmDeletePostRender_Right");
        }
    }

    //To reset value of selectedPostReducer:
    function setSelectedPost() {
        dispatch({
            type: "SET_SELECTED_POST",
            payload: null
        })
    }


    return (
        <>
            <div className="modalHeader">
                <button className="backButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setSelectedPost() }}> {'<-'} </button>
                <button className="exitButtonCombo" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setSelectedPost(); setIsOpenMain(false) }}> X </button>
            </div>

            <div className="modalBody">
                <div className="postFlexDiv">
                    <h4 className="postListHeader">{'Post Library: Select Post to Delete'}</h4>
                    <div className="postListDiv">
                        {postListReducer.map((post) => (
                            <PostListing key={post.id} postInfo={post} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="modalFooter">
                <button className="centeredBtn" onClick={() => { selectedPostCheck() }}>Select Post</button>
            </div>
        </>
    )
}

export default DeletePostRender;