import React from 'react';
// import { useSelector } from 'react-redux';
import '../ClientCardsPage/Universal.css';
import Header from '../../Header/Header';

//Import nav bar component:
import Nav from '../../Nav/Nav';

function GraphDataPage() {
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header />
        <h1>Graph Data Page</h1>
      </div>
    </div>
  );
}

export default GraphDataPage;
