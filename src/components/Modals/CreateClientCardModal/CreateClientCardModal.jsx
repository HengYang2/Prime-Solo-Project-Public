import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";

//Import css styling for the Modal:
import './CreateClientCardModal.css';

function CreateClientCardModal(props) {

    const isOpen = props.isOpen;

    //onClose is a passed in function that sets isOpen in 'ClientCardsPage.jsx' to false:
    const onClose = props.onClose;

    if (!isOpen) {
        return null;
    } else {
        return ReactDom.createPortal(
            <>
                <div className="modalOverlay"></div>
                <div className="modalContainer">
                    <div className="left_side_of_modal">
                        <h2></h2>
                        <h3></h3>
                        <h3>to</h3>
                        <h3></h3>
                        <p></p>
                        <button> Edit Client Card</button>
                    </div>
                    <div className="right_side_of_modal">
                        <button onClick={onClose}> X </button>
                        <h2>Create New Client Card</h2>
                        <input
                            // onChange={handlePriceChange}
                            type='text'
                            placeholder='Client Initials'
                        />
                        <input
                            // onChange={handlePriceChange}
                            type='text'
                            placeholder='Start Date'
                        />
                        <input
                            // onChange={handlePriceChange}
                            type='text'
                            placeholder='End Date'
                        />
                        <input
                            // onChange={handlePriceChange}
                            type='text'
                            placeholder='Client Note'
                        />
                        <input
                            // onChange={handlePriceChange}
                            type='text'
                            placeholder='Card Color'
                        />
                    </div>
                </div>
            </>,
            document.getElementById('portal')
        )
    }
}

export default CreateClientCardModal;





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