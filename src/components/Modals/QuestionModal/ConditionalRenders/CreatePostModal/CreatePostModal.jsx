import React from "react";
import ReactDom from "react-dom";

import CreatePostModalRender from './CreatePostModalRender';

function CreatePostModal(props) {

    const isOpenCPost= props.isOpenCPost;
    const onCloseCPost = props.onCloseCPost;
    const selectedClientCard = props.selectedClientCard;

    if (!isOpenCPost) {
        return null;
    } else {
        return ReactDom.createPortal(
        <h1>Create POST MODAL</h1>,
            document.getElementById('portal')
        )
    }
}

export default CreatePostModal;

{/* <CreatePostModalRender
onClick={onCloseCPost}
selectedClientCard={selectedClientCard}
/> */}