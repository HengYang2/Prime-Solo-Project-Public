import React from 'react';
// import { useSelector } from 'react-redux';
import '../ClientCardsPage/Universal.css';
import Header from '../../Header/Header';

//Import nav bar component:
import Nav from '../../Nav/Nav';

function GraphDataPage() {

  //Name of the page: This is to be passed down as a prop to the Header component:
  let titleName = 'Graph Data'

  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header 
          titleName={titleName}
        />
        <h1>Graph Data Page</h1>
      </div>
    </div>
  );
}

export default GraphDataPage;
