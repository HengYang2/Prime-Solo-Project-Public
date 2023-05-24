import React from 'react';
import { useSelector } from 'react-redux';
import './Universal.css';
import Header from '../../Header/Header';

//Import nav bar component:
import Nav from '../../Nav/Nav';

function ClientCardsPage() {

  //Name of the page: This is to be passed down as a prop to the Header component:
  let titleName = 'Client Cards'

  //import in reducers using useSelector:
  const clientCardsReducer = useSelector(store => store.clientCardsReducer);
  console.log("CLIENTCARDSREDUCER --->", clientCardsReducer);
  
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header
          titleName={titleName}
        />
        <section>
        {clientCardsReducer.map((clientCard) => (
            <h1>{clientCard.id}</h1>
          ))}
        </section>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;
