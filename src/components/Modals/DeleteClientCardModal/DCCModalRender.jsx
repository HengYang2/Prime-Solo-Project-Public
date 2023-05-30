import { func } from "prop-types";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

function DCCModalRender(props) {

    //useStates to read client data:
    const [clientId, setClientId] = useState('');
    const [clientInitials, setClientInitials] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(null);
    const [clientNote, setClientNote] = useState('');
    const [cardColor, setCardColor] = useState('blue');
    const [isStillSubscribed, setIsStillSubscribed] = useState(false);

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


    //onCloseD is a passed in function that sets isOpenD in 'ClientCardsPage.jsx' to false:
    const onCloseD = props.onCloseD;

    //Css styling for lefSideOfModal and rightSideOfModal:
    let cardColorStyles = {
        backgroundColor: cardColor
    }

    //Dispatches for when Delete Client Card is pressed:
    const dispatch = useDispatch();

    function deleteClientCard(clientCardInfo) {


        // Make a dispatch to postClientCard.saga.js:
        dispatch({
            type: "POST_CLIENTCARD",
        });

        //Close modal view:
        // onCloseD();
    }


    //Fetch list of existing client cards:
    const clientCardsReducer = useSelector(store => store.clientCardsReducer);

    //Use 'useEffect' hook to refresh the clientCardsReducer data:
    useEffect(() => {
        dispatch({ type: 'FETCH_CLIENTCARDS' });
    }, []);


    //When a client card button is selected from the list on the right-side-render; Set all the useStates
    //to display the information of that client on the left-side-render:
    function setAllUseStates(clientCardInfo) {
        
        //Reformat start_date and end_date:
        handleDate(clientCardInfo.start_date, 'start');
        handleDate(clientCardInfo.start_date, 'end');

        setClientId(clientCardInfo.id);
        setClientInitials(clientCardInfo.client_initials);
        setClientNote(clientCardInfo.client_note);
        setCardColor(clientCardInfo.card_color);
        setIsStillSubscribed(clientCardInfo.is_still_subscribed);
    }

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
                    <button className="exitButton" onClick={onCloseD}> X </button>

                    <div className="headerOfModal">
                        <h1 className="inputHeader">Select The Desired Client Card to be Deleted:</h1>
                    </div>
                    <div className="bodyOfModal">
                        {clientCardsReducer.map((clientCard) => (
                            <button key={clientCard.id} onClick={() => {setAllUseStates(clientCard)}}>
                                <h4>{clientCard.client_initials}</h4>
                            </button>
                        ))}
                    </div>
                    <div className="footerOfModal">
                        <button className="createClientCardButton" onClick={deleteClientCard}>Delete Client Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DCCModalRender;