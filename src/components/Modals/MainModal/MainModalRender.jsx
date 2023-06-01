import { func } from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import React from "react";

//Import conditional renders:
import MainRender_Right from "./ConditionalRenders/RightSide/MainRender_Right/MainRender_Right";
import MainRender_Left from "./ConditionalRenders/LeftSide/MainRender_Left/MainRender_Left";
import CreatePostRender_Right from './ConditionalRenders/RightSide/CreatePostRender_Right/CreatePostRender_Right';
import UpdatePostRender_Right from "./ConditionalRenders/RightSide/UpdatePostRender_Right/UpdatePostRender_Right";
import DeletePostRender_Right from "./ConditionalRenders/RightSide/DeletePostRender_Right/DeletePostRender_Right";
import EditClientCardRender_Right from "./ConditionalRenders/RightSide/EditClientCardRender_Right/EditClientCardRender_Right";
import EditClientCardRender_Left from "./ConditionalRenders/LeftSide/EditClientCardRender_Left/EditClientCardRender_Left";

function MainModalRender(props) {

    //Selected Client Card:


    const dispatch = useDispatch();
    const conditionalModalRenderReducer_Right = useSelector(store => store.conditionalModalRenderReducer_Right);
    const conditionalModalRenderReducer_Left = useSelector(store => store.conditionalModalRenderReducer_Left);
    const isEditingClientCard = useSelector(store => store.isEditingClientCardReducer);

    //Used for coloring modals:
    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    //Change editCardColorReducer value to selectedClientCardReducer.card_color:
    useEffect(() => {
        dispatch({
            type: "SET_CARDCOLOR",
            payload: selectedClientCardReducer.card_color
        })
    }, [])

    //Css styling for lefSideOfModal and rightSideOfModal:
    let cardColorStyles = {
        backgroundColor: editCardColorReducer
    }

    //Function for loading conditonal renders based on 'conditonalModalRender' reducer:
    function loadConditionalModalRenderReducer_Right() {
        // console.log('condiontlModalRenderReducer Value:', conditionalModalRenderReducer_Right);
        switch (conditionalModalRenderReducer_Right) {
            case 'MainRender_Right':
                return MainRender_Right();
            case 'CreatePostRender_Right':
                return CreatePostRender_Right();
            case 'UpdatePostRender_Right':
                return UpdatePostRender_Right();
            case 'DeletePostRender_Right':
                return DeletePostRender_Right();
            case 'EditClientCardRender_Right':
                return EditClientCardRender_Right();
            default:
                return MainRender_Right();
        }
    }

    //Function that changes the value of conditionalModalRenderReducer through dispatch:
    //The value of conditionalModalRenderReducer will determin what html elements are loaded onto the Modal:
    function setConditionalModalRender_Right(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER_RIGHT",
            payload: nameOfRender
        })
    }

   
    //Function for loading conditonal renders based on 'conditonalModalRender' reducer:
    function loadConditionalModalRenderReducer_Left() {
        // console.log('condiontlModalRenderReducer Value:', conditionalModalRenderReducer_Left);
        switch (conditionalModalRenderReducer_Left) {
            case 'MainRender_Left':
                return MainRender_Left();
            case 'EditClientCardRender_Left':
                return EditClientCardRender_Left();
            default:
                return MainRender_Left();
        }
    }

    function setConditionalModalRender_Left(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER_LEFT",
            payload: nameOfRender
        })
    }


  //For setting isEditingClientCard reducer:
  function setIsEditingClientCard(boolean) {
      dispatch({
          type: "SET_ISEDITINGCLIENTCARD",
          payload: boolean
      })
  }

    //Conditonally Rendered Button for 'Edit Client Card':
    function conRenEditClientCardButton() {
        if (isEditingClientCard == false) {
            return (
                <button onClick={() => { setConditionalModalRender_Left('EditClientCardRender_Left'); setConditionalModalRender_Right('EditClientCardRender_Right'); setIsEditingClientCard(true) }}>Edit Client Card</button>
            )
        } else {
            return (
                <></>
            )
        }
    }


    return (
        <>
            <div className="modalOverlay"></div>
            <div className="modalContainer">

                <div className="leftSideOfModal" style={cardColorStyles}>
                    {loadConditionalModalRenderReducer_Left()}
                    {conRenEditClientCardButton()}
                </div>

                <div className="rightSideOfModal" style={cardColorStyles}>
                    {loadConditionalModalRenderReducer_Right()}
                </div>
            </div>
        </>
    )
}

export default MainModalRender;


