import { func } from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import React from "react";


//Import modals for CreatePost, UpdatePost and DeletePost:
import CreatePostModal from './ConditionalRenders/CreatePostModal/CreatePostModal';
import DeletePostModal from './ConditionalRenders/DeletePostModal/DeletePostModal';
import UpdatePostModal from "./ConditionalRenders/UpdatePostModal/UpdatePostModal";

function DCCModalRender(props) {

    //onCloseD is a passed in function that sets isOpenQ in 'ClientCardsPage.jsx' to false:
    const onCloseQ = props.onCloseQ;
    //useState to tell that the modal is open:
    const [isOpenCPost, setIsOpenCPost] = useState(false);

    //Main conditional modal render for QuestionModalRender.jsx
    const MainRender = () => {
        return (<>
            <button className="exitButton" onClick={onCloseQ}> X </button>

            <div className="headerOfModal">
                <h1 className="inputHeader">Select The Desired Client Card to be Deleted:</h1>
            </div>
            <div className="bodyOfModal">
                <button onClick={() => { setconditonalModalRender(CreatePostRender), console.log("Create post button clicked."); }}>Create new post</button>
                <button>Update existing post</button>
                <button>Delete existing post</button>
            </div>
            <div>
                <CreatePostModal
                    isOpenCPost={isOpenCPost}
                    onCloseCPost={() => { setIsOpenCPost(false) }}
                />
            </div>
        </>)
    };


    //useState for conditional modal renders:
    const [conditonalModalRender, setconditonalModalRender] = useState(MainRender);


    //CreatePost conditional render:
    const CreatePostRender = () => {
        return (
            <h1>CREATE POST CONDITIONAL RENDER</h1>
        )
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

    //Dispatches for when Delete Client Card is pressed:
    const dispatch = useDispatch();

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
                </div>

                <div className="rightSideOfModal" style={cardColorStyles}>
                    {conditonalModalRender}
                </div>
            </div>
        </>
    )
}

export default DCCModalRender;


