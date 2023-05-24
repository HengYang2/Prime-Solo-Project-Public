import React from 'react';
// import { useSelector } from 'react-redux';
import '../ClientCardsPage/Universal.css';
import Header from '../../Header/Header';

//Import nav bar component:
import Nav from '../../Nav/Nav';

function PostLibraryPage() {

  //Name of the page: This is to be passed down as a prop to the Header component:
  let titleName = 'Post Library'

  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header 
           titleName={titleName}
        />
        <h1>POST LIBRARY</h1>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default PostLibraryPage;