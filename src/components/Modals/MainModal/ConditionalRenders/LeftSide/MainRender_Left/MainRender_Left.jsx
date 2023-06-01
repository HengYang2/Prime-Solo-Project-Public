import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function MainRender_Left() {

    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);

    //useStates to read client data:
    const [clientId, setClientId] = useState(selectedClientCardReducer.id);
    const [clientInitials, setClientInitials] = useState(selectedClientCardReducer.client_initials);
    const [startDate, setStartDate] = useState(selectedClientCardReducer.start_date);
    const [endDate, setEndDate] = useState(selectedClientCardReducer.end_date);
    const [clientNote, setClientNote] = useState(selectedClientCardReducer.client_note);
    const [cardColor, setCardColor] = useState(selectedClientCardReducer.card_color);
    const [isStillSubscribed, setIsStillSubscribed] = useState(selectedClientCardReducer.is_still_subscribed);

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

    //Use 'useEffect' hook to refresh the clientCardsReducer data:
    useEffect(() => {
        //Reformat start_date and end_date:
        console.log("selectedClientCardReducer value ---->", selectedClientCardReducer);
        handleDate(selectedClientCardReducer.start_date, 'start');
        handleDate(selectedClientCardReducer.start_date, 'end');
    }, []);

    return (<>
        <h2 className="clientInitials">{clientInitials}</h2>
        <div className="timeWithCompany">
            <h3 className="startDate">{reformattedStartDate}</h3>
            <h3 className="to">to</h3>
            {conRenderedEndDate()}
        </div>
        <p className="clientNote">{clientNote}</p>
    </>)

}

export default MainRender_Left;