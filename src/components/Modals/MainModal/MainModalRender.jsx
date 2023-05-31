import { func } from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import React from "react";

//Import conditional renders:
import MainRender from "./ConditionalRenders/MainRender/MainRender";
import CreatePostRender from './ConditionalRenders/CreatePostRender/CreatePostRender';
import UpdatePostRender from "./ConditionalRenders/UpdatePostRender/UpdatePostRender";
import DeletePostRender from "./ConditionalRenders/DeletePostRender/DeletePostRender";
import EditClientCardRender from "./ConditionalRenders/EditClientCardRender/EditClientCardRender";

function MainModalRender(props) {


    const conditionalModalRenderReducer = useSelector(store => store.conditionalModalRenderReducer);

    // function setConditonalModalRender(nameOfRender) {
    //     dispatch({
    //         type: "SET_CONDITONALMODALRENDER",
    //         payload: nameOfRender
    //     })
    // }

    //Function for loading conditonal renders based on 'conditonalModalRender' reducer:
    function loadConditionalRender() {
        console.log('condiontlModalRenderReducer Value:', conditionalModalRenderReducer);
        switch (conditionalModalRenderReducer) {
            case 'MainRender':
                return MainRender();
            case 'CreatePostRender':
                return CreatePostRender();
            case 'UpdatePostRender':
                return UpdatePostRender();
            case 'DeletePostRender':
                return DeletePostRender();
            case 'EditClientCardRender':
                return EditClientCardRender();
            default:
                return MainRender();
        }
    }

    // //function to change value of isOpenMain to true:
    // function setIsOpenMain(boolean) {
    //     dispatch({
    //         type: "SET_ISOPENMAIN",
    //         payload: boolean
    //     })
    // }

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
                <button onClick={() => { setConditonalModalRender(EditClientCardRender()), setIsEditingClientCard(true) }}>Edit Client Card</button>
            )
        } else {
            return (
                <></>
            )
        }
    }


    //Selected Client Card:
    const selectedClientCard = props.selectedClientCard;

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


    function deleteClientCard(clientCardInfo) {


        // Make a dispatch to deleteClientCard.saga.js:
        dispatch({
            type: "DELETE_CLIENTCARD",
            payload: clientId
        });

        //Close modal view:
        // onCloseD();
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
                    {loadConditionalRender()}
                </div>
            </div>
        </>
    )
}

export default MainModalRender;


