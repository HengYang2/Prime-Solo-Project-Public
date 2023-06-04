
function Header(props) {

  //Pass in the currently loaded page name through props and have it displayed
  //on the DOM.
  let titleName = props.titleName;

  return (
    <header className="mainHeader">
      {titleName}
    </header>
  );
}

export default Header;