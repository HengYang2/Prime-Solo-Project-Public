
function Header(props) {

  //Pass in the currently loaded page name through props and have it displayed
  //on the DOM.
  let titleName = props.titleName;

  return (
    <header className="main_header">
      <h1>{titleName}</h1>
    </header>
  );
}

export default Header;