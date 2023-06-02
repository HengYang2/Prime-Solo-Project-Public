import React from "react";
import { useDispatch, useSelector } from "react-redux";


function CreatePostRender() {

    //To match number of hook renders:
    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);
    const editClientNoteReducer = useSelector(store => store.editClientNoteReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);

    //Used hooks:
    const createPostDateReducer = useSelector(store => store.createPostDateReducer);
    const createPostHoursReducer = useSelector(store => store.createPostHoursReducer);
    const createPostMileageReducer = useSelector(store => store.createPostMileageReducer);
    const createPostTaskDetailsReducer = useSelector(store => store.createPostTaskDetailsReducer);



    const dispatch = useDispatch();

    //Dispatch functions for modal purposes:
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



    //Dispatch functions for user inputs:
    function setCreatePostDateReducer(date) {
        dispatch({
            type: "SET_POST_DATE",
            payload: date
        })
    }
    function setCreatePostHoursReducer(number) {
        dispatch({
            type: "SET_POST_HOURS",
            payload: number
        })
    }
    function setCreatePostMileageReducer(number) {
        dispatch({
            type: "SET_POST_MILEAGE",
            payload: number
        })
    }
    function setCreatePostTaskDetailsReducer(details) {
        dispatch({
            type: "SET_POST_TASK_DETAILS",
            payload: details
        })
    }

    //Function for resetting reducer values:
    function resetCreatePostReducers() {
        setCreatePostDateReducer('');
        setCreatePostHoursReducer(0);
        setCreatePostMileageReducer(0);
        setCreatePostTaskDetailsReducer('');
    }


    //Function for 
    function createPost() {

        //Check to see if all required fields are filled out:
        if (createPostDateReducer == '' || createPostHoursReducer == 0 || createPostHoursReducer == '') {
            return console.log('Missing a required field');;
        }

        //Create an object variable containing all createPost reducers:
        const postData = {
            client_id: selectedClientCardReducer.id,
            date: createPostDateReducer,
            hours_worked: Number(createPostHoursReducer),
            miles_driven: Number(createPostMileageReducer),
            task_details: createPostTaskDetailsReducer
        }

        //Makes a saga_dispatch:
        dispatch({
            type: "SAGA_CREATE_POST",
            payload: postData
        })


        //Reset the createPost reducers:
        resetCreatePostReducers();


        //Bring the user back to the MainRender of the modal:
        setConditionalModalRender_left("MainRender_Left");
        setConditionalModalRender_right("MainRender_Right");
        setIsEditingClientCard(false);

    }

    return (
        <>
            <>
                <button className="backButton" onClick={() => { setConditionalModalRender_left("MainRender_Left"); setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetCreatePostReducers() }}> {'<-'} </button>
                <button className="exitButton" onClick={() => { setConditionalModalRender_left("MainRender_Left"); setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetCreatePostReducers(); setIsOpenMain(false) }}> X </button>


                <div className="inputDiv">
                    <h4 className="inputHeader">Select Date:</h4>
                    <input className="inputElement"
                        onChange={(event) => { setCreatePostDateReducer(event.target.value) }}
                        type='date'
                    />
                </div>

                <div className="inputDiv">
                    <h4 className="inputHeader">Input Hours Worked:</h4>
                    <input className="inputElement"
                        onChange={(event) => setCreatePostHoursReducer(event.target.value)}
                        type='number'
                        placeholder='0'
                        maxLength={4}
                    />
                </div>

                <div className="inputDiv">
                    <h4 className="inputHeader">Input Miles Driven:</h4>
                    <input className="inputElement"
                        onChange={(event) => setCreatePostMileageReducer(event.target.value)}
                        type='number'
                        placeholder='0'
                        maxLength={4}
                    />
                </div>


                <div className="inputDiv">
                    <h4 className="inputHeader">Task Details:</h4>
                    <textarea className="textAreaElement"
                        onChange={(event) => setCreatePostTaskDetailsReducer(event.target.value)}
                        wrap="soft"
                        rows={1}
                        type='text'
                        maxLength={216}
                        placeholder='Task details are optional...'
                    />
                </div>


                <div className="footerOfModal">
                    <button className="createClientCardButton" onClick={() => { createPost() }}>Create Post</button>
                </div>
            </>
        </>
    )
}

export default CreatePostRender;