import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { func } from "prop-types";


function EditClientCardRender_Left() {

    //Load all the relevant reducers for editing client card:
    const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);
    const editStartDateReducer = useSelector(store => store.editStartDateReducer);
    const editEndDateReducer = useSelector(store => store.editEndDateReducer);
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);

    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);

    //This is for displaying the date in mm/dd/yyyy format to the users in the DOM.
    // const [reformattedStartDate, setReformattedStartDate] = useState('');
    // const [reformattedEndDate, setReformattedEndDate] = useState('');



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
            return (reformattedDate);
        } else {
            return (reformattedDate);
        }
    }

    //Conditionally rendered endDate component:
    const conRenderedEndDate = () => {
        if (selectedClientCardReducer.is_still_subscribed == false) {
            return (
               handleDate(selectedClientCardReducer.end_date, 'end')
            )
        } else {
            return (
                'Present Day'
            )
        }
    }

    const reformattedStartDate = handleDate(selectedClientCardReducer.start_date, 'start')

    return (
        <>
            <h2 className="clientInitials">{selectedClientCardReducer.client_initials}</h2>
            <div className="timeWithCompany">
                <h3 className="startDate">{reformattedStartDate}</h3>
                <h3 className="to">to</h3>
                <h3 className="endDate">{conRenderedEndDate()}</h3>
            </div>
            <p className="clientNote">{selectedClientCardReducer.client_note}</p>
        </>
    )
}

export default EditClientCardRender_Left;