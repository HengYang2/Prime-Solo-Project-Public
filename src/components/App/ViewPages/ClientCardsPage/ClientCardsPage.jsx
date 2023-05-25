import React from 'react';
import { useSelector } from 'react-redux';
import './Universal.css';
import Header from '../../Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Import nav bar component:
import Nav from '../../Nav/Nav';

//Import ClientCard component:
import ClientCard from './ClientCard/ClientCard';

function ClientCardsPage() {

  const dispatch = useDispatch();

  //Name of the page: This is to be passed down as a prop to the Header component:
  let titleName = 'Client Cards'

  //import in reducers using useSelector:
  const clientCardsReducer = useSelector(store => store.clientCardsReducer);

  //Use 'useEffect' hook to refresh the clientCardsReducer data:
  useEffect(() => {
    dispatch({ type: 'FETCH_CLIENTCARDS' });
  }, []);

  // console.log('clientCardsReducer VALUE --->', clientCardsReducer);
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header
          titleName={titleName}
        />
        <section>
          {clientCardsReducer.map((clientCard) => (
            <ClientCard
              key={clientCard.id}
              clientInfo={clientCard}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;
