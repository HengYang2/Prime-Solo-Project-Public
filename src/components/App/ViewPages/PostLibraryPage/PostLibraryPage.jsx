import React from 'react';
// import { useSelector } from 'react-redux';
import '../ClientCardsPage/Universal.css';
import Header from '../../Header/Header';

//Import nav bar component:
import Nav from '../../Nav/Nav';

function ClientCardsPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header />
        <h1>POST LIBRARY</h1>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;