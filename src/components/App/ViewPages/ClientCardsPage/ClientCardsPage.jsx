import React from 'react';
import { useSelector } from 'react-redux';
import './Universal.css';
import './ClientCardGrid.css';
import Header from '../../Header/Header';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//Import templateModal:
import '../../../Modal/TemplateModal';


//Import nav bar component:
import Nav from '../../Nav/Nav';

//Import ClientCard component:
import ClientCard from './ClientCard/ClientCard';
import TemplateModal from '../../../Modal/TemplateModal';

function ClientCardsPage() {

  const dispatch = useDispatch();

  //useState to tell that the modal is open:
  const [isOpen, setIsOpen] = useState(false);

  //Name of the page: This is to be passed down as a prop to the Header component:
  let titleName = 'Client Cards'

  //import in reducers using useSelector:
  const clientCardsReducer = useSelector(store => store.clientCardsReducer);

  //Use 'useEffect' hook to refresh the clientCardsReducer data:
  useEffect(() => {
    dispatch({ type: 'FETCH_CLIENTCARDS' });
  }, []);

  //Function to open Modal:


  // console.log('clientCardsReducer VALUE --->', clientCardsReducer);
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header
          titleName={titleName}
        />
        <TemplateModal
          isOpen={isOpen}
          onClose={() => {setIsOpen(false)}}
        >
          TemplateModal
        </TemplateModal>
        <section className='clientCardGrid'>
          {clientCardsReducer.map((clientCard) => (
            <ClientCard
              key={clientCard.id}
              clientInfo={clientCard}
            />
          ))}
        </section>
        <section>
          <button onClick={() => {setIsOpen(true)}}>Create New Client</button>
        </section>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;
