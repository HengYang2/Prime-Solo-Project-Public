import React from "react";
import { useDispatch, useSelector } from "react-redux";


function CreatePostRender() {

    //To match number of hook renders:
    const [selectedDate, setSelectedDate] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [milesDriven, setMilesDriven] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
    // const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);
    // const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    // const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);


    const dispatch = useDispatch();

    function setConditionalModalRender_right(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER_RIGHT",
            payload: nameOfRender
        })
    }

    function setConditionalModalRender_left(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER_LEFT",
            payload: nameOfRender
        })
    }

    //function to change value of isOpenMain to true:
    function setIsOpenMain(boolean) {
        dispatch({
            type: "SET_ISOPENMAIN",
            payload: boolean
        })
    }

    function setIsEditingClientCard(boolean) {
        dispatch({
            type: "SET_ISEDITINGCLIENTCARD",
            payload: boolean
        })
    }
    return (
        <>
           <>
            <button className="backButton" onClick={() => { setConditionalModalRender_left("MainRender_Left");; setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetEditReducers() }}> {'<-'} </button>
            <button className="exitButton" onClick={() => { setConditionalModalRender_left("MainRender_Left");; setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setIsOpenMain(false) }}> X </button>

    
            <div className="inputDiv">
                <h4 className="inputHeader">Select Date:</h4>
                <input className="inputElement"
                    onChange={(event) => { setEditStartDateReducer(event.target.value) }}
                    type='date'
                />
            </div>

            <div className="inputDiv">
                <h4 className="inputHeader">Input Hours Worked:</h4>
                <input className="inputElement"
                    onChange={(event) => setEditClientInitialsReducer(event.target.value)}
                    type='text'
                    placeholder='0'
                    maxLength={4}
                    style={{ textTransform: 'uppercase' }}
                />
            </div>

            <div className="inputDiv">
                <h4 className="inputHeader">Input Miles Driven:</h4>
                <input className="inputElement"
                    onChange={(event) => setEditClientInitialsReducer(event.target.value)}
                    type='text'
                    placeholder='0'
                    maxLength={4}
                    style={{ textTransform: 'uppercase' }}
                />
            </div>


            <div className="inputDiv">
                <h4 className="inputHeader">Task Details:</h4>
                <textarea className="textAreaElement"
                    onChange={(event) => setEditClientNoteReducer(event.target.value)}
                    wrap="soft"
                    rows={1}
                    type='text'
                    maxLength={216}
                    placeholder='Task details are optional...'
                />
            </div>

    
            <div className="footerOfModal">
                <button className="createClientCardButton" onClick={() => { submitClientCardChanges() }}>Submit Changes</button>
            </div>
        </>
        </>
    )
}

export default CreatePostRender;