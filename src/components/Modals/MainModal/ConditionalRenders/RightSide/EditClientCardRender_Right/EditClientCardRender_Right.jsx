import React from "react";
import { useDispatch } from "react-redux";

function EditClientCardRender() {

    const dispatch = useDispatch();

    function setConditionalModalRender_right(nameOfRender) {
        dispatch({
            type: "SET_CONDITIONALMODALRENDER_RIGHT",
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
            <button className="backButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false) }}> {'<-'} </button>
            <button className="exitButton" onClick={() => { setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); setIsOpenMain(false) }}> X </button>

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

                <button className="createClientCardButton" >Submit Changes</button>
            </div>
        </>
    )
}

export default EditClientCardRender;