import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";

//Import html return from MainModalRender.jsx file:
import MainModalRender from './MainModalRender';

//Import css styling for the Modal:
import './MainModal.css';

function MainModal(props) {

    const isOpenMain = useSelector(store => store.isOpenMainReducer);

    if (!isOpenMain) {
        return null;
    } else {
        return ReactDom.createPortal(
            <MainModalRender />,
            document.getElementById('portal')
        )
    }
}

export default MainModal;