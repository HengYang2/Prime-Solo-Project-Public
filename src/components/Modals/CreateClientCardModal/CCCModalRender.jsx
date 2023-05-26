import { useState } from "react";
import { useDispatch } from "react-redux";

function CCCModalRender(props) {

    //useStates to keep track of user inputs:
    const [clientInitials, setClientInitials] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [clientNote, setClientNote] = useState('');
    const [cardColor, setCardColor] = useState('grey');
    const [isStillSubscribed, setIsStillSubscribed] = useState(true);

    let unformattedStartDate = '';
    let unformattedEndDate = '';

    //Function that will convert date format: yyyy/mm/dd --> mm/dd/yyyy
    function reformatDate(date) {
        const yyyy = date[0] + date[1] + date[2] + date[3];
        const mm = date[5] + date[6];
        const dd = date[8] + date[9];
        const reformattedDate = mm + '/' + dd + '/' + yyyy;
        // console.log(unformattedStartDate);
        // console.log(unformattedEndDate);
        return reformattedDate;
    }

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onClose = props.onClose;

    //Css styling for lefSideOfModal and rightSideOfModal:
    let cardColorStyles = {
        backgroundColor: cardColor
    }

    //Dispatches for when Create Client Card is pressed:
    const dispatch = useDispatch();
    function submitClientCard() {
        dispatch({
            type: "SET_CLIENTINITIALS",
            payload: clientInitials
        });
        dispatch({
            type: "SET_STARTDATE",
            payload: unformattedStartDate
        }); 
        dispatch({
            type: "SET_ENDDATE",
            payload: unformattedEndDate
        });
        dispatch({
            type: "SET_ISSTILLSUBSCRIBED",
            payload: isStillSubscribed
        });
        dispatch({
            type: "SET_CLIENTNOTE",
            payload: clientNote
        });
        dispatch({
            type: "SET_CARDCOLOR",
            payload: cardColor
        });
    }

  

    return (
        <>
            <div className="modalOverlay"></div>
            <div className="modalContainer">

                <div className="leftSideOfModal" style={cardColorStyles}>
                    <h2 className="clientInitials">{clientInitials}</h2>
                    <div className="timeWithCompany">
                        <h3 className="startDate">{startDate}</h3>
                        <h3 className="to">to</h3>
                        <h3 className="endDate">{endDate}</h3>
                    </div>
                    <p className="clientNote">{clientNote}</p>
                </div>

                <div className="rightSideOfModal" style={cardColorStyles}>
                    <button className="exitButton" onClick={onClose}> X </button>

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
                            onChange={(event) => { unformattedStartDate = event.target.value; let reformattedDate = reformatDate(event.target.value); setStartDate(reformattedDate);}}
                            type='date'
                            placeholder='Start Date'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">End Date:</h4>
                        <input className="inputElement"
                            onChange={(event) => { unformattedEndDate = event.target.value; let reformattedDate = reformatDate(event.target.value); setEndDate(reformattedDate);}}
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
                                onChange={(event) => { if (isStillSubscribed) { setIsStillSubscribed(false) } else { setIsStillSubscribed(true) } }}
                                type='checkbox'
                            />
                        </div>

                        <button className="createClientCardButton" onClick={() => {submitClientCard}}>Create Client Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CCCModalRender;


// import React from "react";
// import ReactDom from "react-dom";
// import { useState } from "react";

// //Css styling for the Modal:
// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%,-50%)',
//     backgroundColor: '#FFF',
//     paddding: '50px',
//     zIndex: 10000
// }
// const OVERLAY_STYLES = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     zIndex: 10000
// }

// function CreateClientCardModal(props) {

//     const isOpen = props.isOpen;

//     //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
//     const onClose = props.onClose;

//     if (!isOpen) {
//         return null;
//     } else {
//         return ReactDom.createPortal(
//             <>
//                 <div style={OVERLAY_STYLES}></div>
//                 <div style={MODAL_STYLES}>
//                     <div className="left_side_of_modal">
//                         <h2>{clientInfo.client_initials}</h2>
//                         <h3>{clientInfo.start_date}</h3>
//                         <h3>to</h3>
//                         <h3>{endDate}</h3>
//                         <p>{clientInfo.client_note}</p>
//                         <button> Edit Client Card</button>
//                     </div>
//                     <div className="right_side_of_modal">
//                         <button onClick={onClose}> X </button>
//                         <h2>What would you like to do with this client card?</h2>
//                         <button onClick={onClose}> Create New Post </button>
//                         <button onClick={onClose}> Update Existing Post </button>
//                         <button onClick={onClose}> Delete Existing Post </button>
//                     </div>
//                 </div>
//             </>,
//             document.getElementById('portal')
//         )
//     }
// }

// export default CreateClientCardModal;