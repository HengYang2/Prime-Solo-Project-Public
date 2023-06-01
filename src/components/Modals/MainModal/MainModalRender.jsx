import { func } from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import React from "react";

//Import conditional renders:
import MainRender_Right from "./ConditionalRenders/RightSide/MainRender_Right/MainRender_Right";
import CreatePostRender_Right from './ConditionalRenders/RightSide/CreatePostRender_Right/CreatePostRender_Right';
import UpdatePostRender_Right from "./ConditionalRenders/RightSide/UpdatePostRender_Right/UpdatePostRender_Right";
import DeletePostRender_Right from "./ConditionalRenders/RightSide/DeletePostRender_Right/DeletePostRender_Right";
import EditClientCardRender_Right from "./ConditionalRenders/RightSide/EditClientCardRender_Right/EditClientCardRender_Right";

function MainModalRender(props) {

    //Selected Client Card:
    const selectedClientCard = props.selectedClientCard;

    const conditionalModalRenderReducer_Right = useSelector(store => store.conditionalModalRenderReducer_Right);

    //Function for loading conditonal renders based on 'conditonalModalRender' reducer:
    function loadConditionalModalRenderReducer_Right() {
        console.log('condiontlModalRenderReducer Value:', conditionalModalRenderReducer_Right);
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

    const dispatch = useDispatch();
    // //Use useSelector for conditonally rendering 'Edit Client Card' button:
    const isEditingClientCard = useSelector(store => store.isEditingClientCardReducer);
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
                <button onClick={() => { setConditionalModalRender_Right('EditClientCardRender_Right'), setIsEditingClientCard(true) }}>Edit Client Card</button>
            )
        } else {
            return (
                <></>
            )
        }
    }


    //useStates to read client data:
    const [clientId, setClientId] = useState(selectedClientCard.id);
    const [clientInitials, setClientInitials] = useState(selectedClientCard.client_initials);
    const [startDate, setStartDate] = useState(selectedClientCard.start_date);
    const [endDate, setEndDate] = useState(selectedClientCard.end_date);
    const [clientNote, setClientNote] = useState(selectedClientCard.client_note);
    const [cardColor, setCardColor] = useState(selectedClientCard.card_color);
    const [isStillSubscribed, setIsStillSubscribed] = useState(selectedClientCard.is_still_subscribed);

    //This is for displaying the date in mm/dd/yyyy format to the users in the DOM.
    const [reformattedStartDate, setReformattedStartDate] = useState('');
    const [reformattedEndDate, setReformattedEndDate] = useState('');

    //Function that will convert date format: yyyy/mm/dd --> mm/dd/yyyy
    function reformatDate(date) {
        const yyyy = date[0] + date[1] + date[2] + date[3];
        const mm = date[5] + date[6];
        const dd = date[8] + date[9];
        const reformattedDate = mm + '/' + dd + '/' + yyyy;
        return reformattedDate;
    }

    //Function will set the value for reformattedStartDate and reformattedEndDate based
    //on the second passed in parameter, 'startOrEnd':
    const handleDate = (date, startOrEnd) => {

        //Reformat Date
        const reformattedDate = reformatDate(date);

        //Assign it to reformattedStartDate or reformattedEndDate:
        if (startOrEnd == 'start') {
            setReformattedStartDate(reformattedDate);
        } else {
            setReformattedEndDate(reformattedDate);
        }
    }

    //Conditionally rendered endDate component:
    const conRenderedEndDate = () => {
        if (isStillSubscribed == false) {
            return (
                <h3 className="endDate">{reformattedEndDate}</h3>
            )
        } else {
            return (
                <h3 className="endDate">Present Day</h3>
            )
        }
    }


    //Css styling for lefSideOfModal and rightSideOfModal:
    let cardColorStyles = {
        backgroundColor: cardColor
    }


    //Fetch list of existing client cards:
    const clientCardsReducer = useSelector(store => store.clientCardsReducer);

    //Use 'useEffect' hook to refresh the clientCardsReducer data:
    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENTCARDS' });

        //Reformat start_date and end_date:
        handleDate(selectedClientCard.start_date, 'start');
        handleDate(selectedClientCard.start_date, 'end');
    }, []);


    return (
        <>
            <div className="modalOverlay"></div>
            <div className="modalContainer">

                <div className="leftSideOfModal" style={cardColorStyles}>
                    <h2 className="clientInitials">{clientInitials}</h2>
                    <div className="timeWithCompany">
                        <h3 className="startDate">{reformattedStartDate}</h3>
                        <h3 className="to">to</h3>
                        {conRenderedEndDate()}
                    </div>
                    <p className="clientNote">{clientNote}</p>
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


