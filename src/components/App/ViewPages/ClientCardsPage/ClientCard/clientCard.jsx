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

  isClientStillSubscribed();

  const setIsOpenM = props.setIsOpenM;
  const setSelectedClientCard = props.setSelectedClientCard

  //onCloseQ is a passed in function that sets isOpenQ in 'ClientCardsPage.jsx' to false:

  return (
    <div className="clientCard" key={clientInfo.id} onClick={() => { setIsOpenM(true), setSelectedClientCard(clientInfo) }}>
        <h2>{clientInfo.client_initials}</h2>
        <h3>{clientInfo.start_date}</h3>
        <h3>to</h3>
        <h3>{endDate}</h3>
        <p>{clientInfo.client_note}</p>
    </div>
  );
}

export default ClientCard;
