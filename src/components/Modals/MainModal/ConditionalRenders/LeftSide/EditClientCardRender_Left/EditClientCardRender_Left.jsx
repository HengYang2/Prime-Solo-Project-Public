import React from "react";
import { useSelector, useDispatch } from "react-redux";

function EditClientCardRender_Left() {

    const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);


    return (
        <>
            <h2 className="clientInitials">{editClientInitialsReducer}</h2>
            <div className="timeWithCompany">
                <h3 className="startDate">{}</h3>
                <h3 className="to">to</h3>
            
            </div>
            <p className="clientNote">{}</p>
        </>
    )
}

export default EditClientCardRender_Left;