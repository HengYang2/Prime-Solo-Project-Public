function CCCModalRender(props) {

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onClose = props.onClose;

    return (
        <>
            <div className="modalOverlay"></div>
            <div className="modalContainer">

                <div className="leftSideOfModal">
                    <h2 className="clientInitials">HY</h2>
                    <div className="timeWithCompany">
                        <h3 className="startDate">2001/12/10</h3>
                        <h3 className="to">to</h3>
                        <h3 className="endDate">2002/03/04</h3>
                    </div>
                    <p className="clientNote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis pariatur quibusdam doloremque non laboriosam iusto nulla omnis totam quam ratione aspernatur, fugit laborum ex minus repellat nemo odio!</p>
                </div>

                <div className="rightSideOfModal">
                    <button className="exitButton" onClick={onClose}> X </button>

                    <div className="inputDiv">
                        <h4 className="inputHeader">Initials:</h4>
                        <input className="inputElement"
                            // onChange={handlePriceChange}
                            type='text'
                            placeholder='Client Initials'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">Start Date:</h4>
                        <input className="inputElement"
                            // onChange={handlePriceChange}
                            type='date'
                            placeholder='Start Date'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">End Date:</h4>
                        <input className="inputElement"
                            // onChange={handlePriceChange}
                            type='date'
                            placeholder='End Date'
                        />
                    </div>

                    <div className="inputDiv">
                        <h4 className="inputHeader">Client Note:</h4>
                        <textarea className="textAreaElement"
                            // onChange={handlePriceChange}
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
                            <button id="red" className="colorButton"></button>
                            <button id="blue" className="colorButton"></button>
                            <button id="green" className="colorButton"></button>
                            <button id="yellow" className="colorButton"></button>
                            <button id="purple" className="colorButton"></button>
                        </div>
                    </div>

                    <div className="footerOfModal">
                        <div className="clientIsCurrentlySubscribed">
                            <h1 className="checkboxHeader">Check this box if client is currently <br /> with the company:</h1>
                            <input className="checkboxElement"
                                // onChange={handlePriceChange}
                                type='checkbox'
                            />
                        </div>

                        <button className="createClientCardButton">Create Client Card</button>
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