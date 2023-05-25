function ClientCard(props) {

  const clientInfo = props.clientInfo

  return (
    <div className="clientCard" key={clientInfo.id}>
        <h3>{clientInfo.client_initials}</h3>
    </div>
  );
}

export default ClientCard;
