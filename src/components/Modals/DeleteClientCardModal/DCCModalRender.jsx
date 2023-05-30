import { func } from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";

function DCCModalRender(props) {

    //useStates to keep track of user inputs:
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


    //Toggle isStillSubscribed:
    function toggleIsStillSubscribed() {
        if (isStillSubscribed == false) {
            setIsStillSubscribed(true);
        } else {
            setIsStillSubscribed(false);
        }
    }


    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onCloseD = props.onCloseD;

    //Css styling for lefSideOfModal and rightSideOfModal:
    let cardColorStyles = {
        backgroundColor: cardColor
    }

    //Dispatches for when Create Client Card is pressed:
    const dispatch = useDispatch();

    function submitClientCard(event) {

        event.preventDefault();

        //If all required fields are not filled out, don't let the user make a post request:
        if (clientInitials == '' || startDate == '') {
            return console.log('Missing requried field');
        } else if (isStillSubscribed == false && endDate == null) {
            return console.log('End date required');
        }

        let clientCard = {};

        //If is_still_subscribed set the value of endDate to null:
        if (isStillSubscribed) {
            clientCard = {
                client_initials: clientInitials.toUpperCase(),
                start_date: startDate,
                end_date: null,
                is_still_subscribed: isStillSubscribed,
                client_note: clientNote,
                card_color: cardColor,
            }
        } else {
            clientCard = {
                client_initials: clientInitials.toUpperCase(),
                start_date: startDate,
                end_date: endDate,
                is_still_subscribed: isStillSubscribed,
                client_note: clientNote,
                card_color: cardColor,
            }
        };

        // Make a dispatch to postClientCard.saga.js:
        dispatch({
            type: "POST_CLIENTCARD",
            payload: clientCard
        });

        //Close modal view:
        onClose();
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

                    <div className="inputDiv">
                        <h4 className="inputHeader">Initials:</h4>
                        <input className="inputElement"
                            onChange={(event) => setClientInitials(event.target.value)}
                            type='text'
                            placeholder='Client Initials'
                            maxLength={4}
                            style={{ textTransform: 'uppercase' }}
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">Start Date:</h4>
                        <input className="inputElement"
                            onChange={(event) => { setStartDate(event.target.value); handleDate(event.target.value, 'start'); }}
                            type='date'
                            placeholder='Start Date'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">End Date:</h4>
                        <input className="inputElement"
                            onChange={(event) => { setEndDate(event.target.value); handleDate(event.target.value, 'end'); }}
                            type='date'
                            placeholder='End Date'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">Client Note:</h4>
                        <textarea className="textAreaElement"
                            onChange={(event) => setClientNote(event.target.value)}
                            wrap="soft"
                            rows={1}
                            type='text'
                            maxLength={216}
                            placeholder='Client Note'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">Colors:</h4>
                        <div className="colorDivElement">
                            <button id="red" className="colorButton" onClick={(event) => setCardColor(event.target.id)}></button>
                            <button id="blue" className="colorButton" onClick={(event) => setCardColor(event.target.id)}></button>
                            <button id="green" className="colorButton" onClick={(event) => setCardColor(event.target.id)}></button>
                            <button id="yellow" className="colorButton" onClick={(event) => setCardColor(event.target.id)}></button>
                            <button id="purple" className="colorButton" onClick={(event) => setCardColor(event.target.id)}></button>
                        </div>
                    </div>

                    <div className="footerOfModal">
                        <div className="clientIsCurrentlySubscribed">
                            <h1 className="checkboxHeader">Check this box if client is currently <br /> with the company:</h1>
                            <input className="checkboxElement"
                                onChange={(event) => { toggleIsStillSubscribed() }}
                                type='checkbox'
                            />
                        </div>

                        <button className="createClientCardButton" onClick={submitClientCard}>Create Client Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DCCModalRender;