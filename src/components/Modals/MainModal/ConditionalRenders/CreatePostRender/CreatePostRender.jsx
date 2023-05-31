import React from "react";
// import { useDispatch } from "react-redux";

function CreatePostRender() {

    // const dispatch = useDispatch();
    // function setIsOpenMain(boolean) {
    //     dispatch({
    //         type: "SET_ISOPENMAIN",
    //         payload: boolean
    //     })
    // }

    return (
        <>
            <button className="backButton" onClick={() => { setConditonalModalRender(MainRender()); setIsEditingClientCard(false) }}> {'<-'} </button>
            <button className="exitButton" > X </button>
            <h1>CREATE POST CONDITIONAL RENDER</h1>
        </>
    )
}

export default CreatePostRender;

// onClick={() => { setIsOpenMain(false) }}