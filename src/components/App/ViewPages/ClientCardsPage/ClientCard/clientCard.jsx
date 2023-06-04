import { bool } from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function ClientCard(props) {

  const clientInfo = props.clientInfo
  let endDate = '';

  //Create a function that will check to see if clientInfo.is_still_subscribed == true:
  //If it is, set 'endDate' = 'Present Day'
  function isClientStillSubscribed() {
    if (clientInfo.is_still_subscribed) {
      endDate = 'Present Day';
    } else {
      endDate = clientInfo.end_date;
    }
  }

  //for coloring styles
  let cardColorStyles = {
    backgroundColor: clientInfo.card_color
  }

  isClientStillSubscribed();

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
    dispatch({
      type: "FETCH_POST_LIST",
      payload: clientInfo.id
    })
  }

  //onCloseQ is a passed in function that sets isOpenQ in 'ClientCardsPage.jsx' to false:

  return (
    <div className="clientCard" key={clientInfo.id} onClick={() => { setIsOpenMain(true), setSelectedClientCard(), setPostList() }} style={cardColorStyles}>
      <h2>{clientInfo.client_initials}</h2>
      <h3>{clientInfo.start_date}</h3>
      <h3>to</h3>
      <h3>{endDate}</h3>
      <p>{clientInfo.client_note}</p>
    </div>
  );
}

export default ClientCard;
