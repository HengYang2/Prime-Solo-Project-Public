import { bool } from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function ClientCard(props) {

  const clientInfo = props.clientInfo

  //Function that will convert date format: yyyy/mm/dd --> mm/dd/yyyy
  function reformatDate(date) {
    const yyyy = date[0] + date[1] + date[2] + date[3];
    const mm = date[5] + date[6];
    const dd = date[8] + date[9];
    const reformattedDate = mm + '/' + dd + '/' + yyyy;
    return reformattedDate;
  }


  let startDate = reformatDate(String(clientInfo.start_date));

  //Create a function that will check to see if clientInfo.is_still_subscribed == true:
  //If it is, set 'endDate' = 'Present Day'
  function isClientStillSubscribed() {
    if (clientInfo.is_still_subscribed) {
      return 'Present Day';
    } else {
      return   reformatDate(String(clientInfo.end_date));
    }
  }


  //for coloring styles
  let cardColorStyles = {
    backgroundColor: clientInfo.card_color
  }

 

  const dispatch = useDispatch();
  const isOpenMain = useSelector(store => store.isOpenMainReducer);
  //function to change value of isOpenMain to true:
  function setIsOpenMain(boolean) {
    dispatch({
      type: "SET_ISOPENMAIN",
      payload: boolean
    })
  }

  function setSelectedClientCard() {
    dispatch({
      type: "SET_SELECTED_CLIENTCARD",
      payload: clientInfo
    })
  }

  //Gets the postList for the clicked on client card:
  function setPostList() {
    console.log('StartDate:', clientInfo.start_date);
    dispatch({
      type: "FETCH_POST_LIST",
      payload: clientInfo.id
    })
  }

  //onCloseQ is a passed in function that sets isOpenQ in 'ClientCardsPage.jsx' to false:

  return (
    <div className="clientCard" key={clientInfo.id} onClick={() => { setIsOpenMain(true), setSelectedClientCard(), setPostList() }} style={cardColorStyles}>
      <div className="clientInitialsDiv">
        <h2>{clientInfo.client_initials}</h2>
      </div>
      <div className="dateDiv">
        <h3 className="startDateH3">{startDate}</h3>
        <h3 className="to">to</h3>
        <h3 className="endDateH3">{isClientStillSubscribed()}</h3>
      </div>
      <div className="clientNoteDiv">
        <p className="clientNoteA">{clientInfo.client_note}</p>
      </div>
    </div>
  );
}


export default ClientCard;
