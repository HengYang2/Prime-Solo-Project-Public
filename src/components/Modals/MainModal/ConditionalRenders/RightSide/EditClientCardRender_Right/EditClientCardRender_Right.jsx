import { func } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function EditClientCardRender_Right() {

    const dispatch = useDispatch();

    // //Edit client card reducer:
    const editClientInitialsReducer = useSelector(store => store.editClientInitialsReducer);
    const editStartDateReducer = useSelector(store => store.editStartDateReducer);
    const editEndDateReducer = useSelector(store => store.editEndDateReducer);
    const editIsStillSubscribedReducer = useSelector(store => store.editIsStillSubscribedReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);



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


    //Setting reducers that correspond to each input in the return below:
    function setEditClientInitialsReducer(inputValue) {
        dispatch({
            type: "SET_CLIENTINITIALS",
            payload: inputValue
        })
    }

    function setEditStartDateReducer(inputValue) {
        dispatch({
            type: "SET_STARTDATE",
            payload: inputValue
        })
    }

    function setEditEndDateReducer(inputValue) {
        dispatch({
            type: "SET_ENDDATE",
            payload: inputValue
        })
    }

    function setEditIsStillSubscribedReducer(inputValue) {
        dispatch({
            type: "SET_ISSTILLSUBSCRIBED",
            payload: inputValue
        })
    }

    function setEditClientNoteReducer(inputValue) {
        dispatch({
            type: "SET_CLIENTNOTE",
            payload: inputValue
        })
    }

    function setEditCardColorReducer(inputValue) {
        dispatch({
            type: "SET_CARDCOLOR",
            payload: inputValue
        })
    }

    //Toggle isStillSubscribed:
    function toggleIsStillSubscribedReducer() {
        if (editIsStillSubscribedReducer == false) {
            setEditIsStillSubscribedReducer(true);
        } else {
            setEditIsStillSubscribedReducer(false);
        }
    }


    //When the 'Submit Changes' button is pressed: Dispatch to a SAGA that will then combine all the 
    //'edit' reducers and Send it to the server as a PUT request:
    function submitClientCardChanges() {

        const updatedClientCard = {
            client_card_id: selectedClientCardReducer.id,
            client_initials: editClientInitialsReducer,
            start_date: editStartDateReducer,
            end_date: editEndDateReducer,
            is_still_subscribed: editIsStillSubscribedReducer,
            client_note: editClientNoteReducer,
            card_color: editCardColorReducer
        };

        dispatch({
            type: "SAGA_UPDATE_CLIENT_CARD",
            payload: updatedClientCard
        })
    }


    return (
        <>
            <button className="backButton" onClick={() => { setConditionalModalRender_left("MainRender_Left");; setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false) }}> {'<-'} </button>
            <button className="exitButton" onClick={() => { setConditionalModalRender_left("MainRender_Left");; setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setIsOpenMain(false) }}> X </button>

            <div className="inputDiv">
                <h4 className="inputHeader">Initials:</h4>
                <input className="inputElement"
                    onChange={(event) => setEditClientInitialsReducer(event.target.value)}
                    type='text'
                    placeholder='Client Initials'
                    maxLength={4}
                    style={{ textTransform: 'uppercase' }}
                />
            </div>

            <div className="inputDiv">
                <h4 className="inputHeader">Start Date:</h4>
                <input className="inputElement"
                    onChange={(event) => { setEditStartDateReducer(event.target.value) }}
                    type='date'
                    placeholder='Start Date'
                />
            </div>

            <div className="inputDiv">
                <h4 className="inputHeader">End Date:</h4>
                <input className="inputElement"
                    onChange={(event) => { setEditEndDateReducer(event.target.value) }}
                    type='date'
                    placeholder='End Date'
                />
            </div>

            <div className="inputDiv">
                <h4 className="inputHeader">Client Note:</h4>
                <textarea className="textAreaElement"
                    onChange={(event) => setEditClientNoteReducer(event.target.value)}
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
                    <button id="red" className="colorButton" onClick={(event) => setEditCardColorReducer(event.target.id)}></button>
                    <button id="blue" className="colorButton" onClick={(event) => setEditCardColorReducer(event.target.id)}></button>
                    <button id="green" className="colorButton" onClick={(event) => setEditCardColorReducer(event.target.id)}></button>
                    <button id="yellow" className="colorButton" onClick={(event) => setEditCardColorReducer(event.target.id)}></button>
                    <button id="purple" className="colorButton" onClick={(event) => setEditCardColorReducer(event.target.id)}></button>
                </div>
            </div>

            <div className="footerOfModal">
                <div className="clientIsCurrentlySubscribed">
                    <h1 className="checkboxHeader">Check this box if client is currently <br /> with the company:</h1>
                    <input className="checkboxElement"
                        onChange={(event) => { toggleIsStillSubscribedReducer() }}
                        type='checkbox'
                    />
                </div>

                <button className="createClientCardButton" onClick={() => {submitClientCardChanges()}}>Submit Changes</button>
            </div>
        </>
    )
}

export default EditClientCardRender_Right;