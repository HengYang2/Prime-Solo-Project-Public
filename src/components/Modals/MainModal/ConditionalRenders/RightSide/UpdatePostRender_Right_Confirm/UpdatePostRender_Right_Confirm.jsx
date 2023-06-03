import React from "react";
import { useDispatch, useSelector } from "react-redux";


function confirmPostUpdate() {

    //UnUsed hooks To match number of hook renders:
    const selectedClientCardReducer = useSelector(store => store.selectedClientCardReducer);
    const editCardColorReducer = useSelector(store => store.editCardColorReducer);
    const createPostDateReducer = useSelector(store => store.createPostDateReducer);

    //Used hooks:
    const selectedPostReducer = useSelector(store => store.selectedPostReducer);

    //Reused these 3 hooks instead of making 3 new reducers to keep track of 
    //- createUpdate...Reducer:
    const createPostHoursReducer = useSelector(store => store.createPostHoursReducer);
    const createPostMileageReducer = useSelector(store => store.createPostMileageReducer);
    const createPostTaskDetailsReducer = useSelector(store => store.createPostTaskDetailsReducer);



    //Function that will convert date format: yyyy/mm/dd --> mm/dd/yyyy
    function reformatDate(date) {
        const yyyy = date[0] + date[1] + date[2] + date[3];
        const mm = date[5] + date[6];
        const dd = date[8] + date[9];
        const reformattedDate = mm + '/' + dd + '/' + yyyy;
        return reformattedDate;
    }

    //reformattedDate:
    const reformattedDate = reformatDate(selectedPostReducer.date);



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
    function updatePost() {

        //Check to see if all required fields are filled out:
        // if (createPostHoursReducer == 0 || createPostHoursReducer == '') {
        //     return console.log('Missing a required field');;
        // }

        //Create an object variable containing all createPost reducers:
        const updatedPostData = {
            post_id: selectedPostReducer.id,
            client_id: selectedPostReducer.client_id,
            hours_worked: Number(createPostHoursReducer),
            miles_driven: Number(createPostMileageReducer),
            task_details: createPostTaskDetailsReducer
        }

        //Makes a saga_dispatch:
        dispatch({
            type: "SAGA_UPDATE_POST",
            payload: updatedPostData
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
            <div className="modalHeader">
                <button className="backButton" onClick={() => { setConditionalModalRender_left("MainRender_Left"); setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetCreatePostReducers() }}> {'<-'} </button>
                <button className="exitButtonCombo" onClick={() => { setConditionalModalRender_left("MainRender_Left"); setConditionalModalRender_right("MainRender_Right"); setIsEditingClientCard(false); resetCreatePostReducers(); setIsOpenMain(false) }}> X </button>
            </div>


            <div className="modalBody">
                <div className="createPostFlexDiv">
                    <div className="inputDiv">
                        <h4 className="inputHeader">Select Date:</h4>
                        <h3 className="inputElement"> 
                            {reformattedDate}
                        </h3>
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
                </div>
            </div>


            <div className="modalFooter">
                <button className="centeredBtn" onClick={() => { updatePost() }}>Update Post</button>
            </div>
        </>
    )
}

export default confirmPostUpdate;