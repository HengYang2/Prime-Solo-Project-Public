import { func } from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import React from "react";

//Import conditional renders:
import CreatePostRender from './ConditionalRenders/CreatePostRender/CreatePostRender';

function MainModalRender(props) {

    const dispatch = useDispatch();
    const isOpenMain = useSelector(store => store.isOpenMainReducer);
    //function to change value of isOpenMain to true:
    function setIsOpenMain(boolean) {
      dispatch({
        type: "SET_ISOPENMAIN",
        payload: boolean
      })
    }

    //useState for conditonally rendering 'Edit Client Card' button:
    const [isEditingClientCard, setIsEditingClientCard] = useState(false);
    //Toggle for isEditingClientCard useState:
    function toggleIsEditingClientCard() {
        if (isEditingClientCard == false) {
            setIsEditingClientCard(true);
        } else {
            setIsEditingClientCard(false);
        }
    }
    //Conditonally Rendered Button for 'Edit Client Card':
    function conRenEditClientCardButton() {
        if (isEditingClientCard == false) {
            return (
                <button onClick={() => { setConditonalModalRender(EditClientCardRender()), toggleIsEditingClientCard() }}>Edit Client Card</button>
            )
        } else {
            return (
                <></>
            )
        }
    }


    //Conditional render: (Main)
    const MainRender = () => {
        return (<>
            <button className="exitButton" onClick={() => {setIsOpenMain(false)}}> X </button>

            <div className="headerOfModal">
                <h1 className="inputHeader">Select The Desired Client Card to be Deleted:</h1>
            </div>
            <div className="bodyOfModal">
                <button onClick={() => { setConditonalModalRender(CreatePostRender()), toggleIsEditingClientCard() }}>Create new post</button>
                <button onClick={() => { setConditonalModalRender(UpdatePostRender()),toggleIsEditingClientCard() }}>Update existing post</button>
                <button onClick={() => { setConditonalModalRender(DeletePostRender()), toggleIsEditingClientCard() }}>Delete existing post</button>
            </div>
        </>)
    };


    //Conditional render: (Create Post)


    //Conditional render: (Update Post)
    const UpdatePostRender = () => {
        return (
            <>
                <button className="backButton" onClick={() => { setConditonalModalRender(MainRender()); setIsEditingClientCard(false) }}> {'<-'} </button>
                <button className="exitButton" onClick={() => {setIsOpenMain(false)}}> X </button>
                <h1>UPDATE POST CONDITIONAL RENDER</h1>
            </>
        )
    }

    //Conditional render: (Delete Post)
    const DeletePostRender = () => {
        return (
            <>
                <button className="backButton" onClick={() => { setConditonalModalRender(MainRender()); setIsEditingClientCard(false) }}> {'<-'} </button>
                <button className="exitButton" onClick={() => {setIsOpenMain(false)}}> X </button>
                <h1>DELETE POST CONDITIONAL RENDER</h1>
            </>
        )
    }

    //Conditional render: (Edit Client Card)
    const EditClientCardRender = () => {
        return (
            <>
                <button className="backButton" onClick={() => { setConditonalModalRender(MainRender()); setIsEditingClientCard(false) }}> {'<-'} </button>
                <button className="exitButton" onClick={() => {setIsOpenMain(false)}}> X </button>
                <h1>EDIT CLIENT CARD RENDER</h1>

            </>
        )
    }



    //useState for conditional modal renders:
    const [conditonalModalRender, setConditonalModalRender] = useState(MainRender);


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
                    {conditonalModalRender}
                </div>
            </div>
        </>
    )
}

export default MainModalRender;


