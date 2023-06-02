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

    function formatEndDate() {
        if (selectedClientCardReducer.end_date == null) {
            return 'Present Day'
        } else {
            return selectedClientCardReducer.end_date
        }
    }

    return (
        <>
            <h2 className="clientInitials">{selectedClientCardReducer.client_initials}</h2>
            <div className="timeWithCompany">
                <h3 className="startDate">{selectedClientCardReducer.start_date}</h3>
                <h3 className="to">to</h3>
                <h3 className="endDate">{formatEndDate()}</h3>
            </div>
            <p className="clientNote">{selectedClientCardReducer.client_note}</p>
        </>
    )
}

export default EditClientCardRender_Left;