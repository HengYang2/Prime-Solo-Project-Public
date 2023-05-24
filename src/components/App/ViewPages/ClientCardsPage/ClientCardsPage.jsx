import React from 'react';
import { useSelector } from 'react-redux';
import './Universal.css';
import Header from '../../Header/Header';

//Import nav bar component:
import Nav from '../../Nav/Nav';

function ClientCardsPage() {
  
  //Name of the page: This is to be passed down as a prop to the Header component:
  let titleName = 'Client Cards'
  
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header
          titleName={titleName}
        />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;
