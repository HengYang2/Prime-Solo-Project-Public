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
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    // console.log('sub?', editIsStillSubscribedReducer);

    return (
        <>
            <h2 className="clientInitials">{editClientInitialsReducer}</h2>
            <div className="timeWithCompany">
                <h3 className="startDate">{editStartDateReducer}</h3>
                <h3 className="to">to</h3>
                <h3 className="endDate">{editEndDateReducer}</h3>
            
            </div>
            <p className="clientNote">{editClientNoteReducer}</p>
        </>
    )
}

export default EditClientCardRender_Left;