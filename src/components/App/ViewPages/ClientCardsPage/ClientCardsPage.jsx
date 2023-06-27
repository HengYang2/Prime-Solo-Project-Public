import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


//Import need components and css:
import Navbar from '../../Nav/Nav';
import Header from '../../Header/Header';
import './Universal.css';



//Import modals:
import CreateClientCardModal from '../../../Modals/CreateClientCardModal/CreateClientCardModal';
import DeleteClientCardModal from '../../../Modals/DeleteClientCardModal/DeleteClientCardModal'
import MainModal from '../../../Modals/MainModal/MainModal';

//Import ClientCard component:
import ClientCard from './ClientCard/clientCard';


function ClientCardsPage() {

  const dispatch = useDispatch();

  //useState to tell that the modal is open:
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenD, setIsOpenD] = useState(false);


  //useState of the selected client card:
  const [selectedClientCard, setSelectedClientCard] = useState('');

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
    <div className="viewportContainer">
      <Navbar />
      <div className='mainContent'>
        <Header
          titleName={titleName}
        />
        <section className='clientCardGrid'>
          {clientCardsReducer.map((clientCard) => (
            <ClientCard
              key={clientCard.id}
              clientInfo={clientCard}
            />
          ))}
        </section>
        <section className='clientCardFooter'>
          <CreateClientCardModal
            isOpen={isOpen}
            onClose={() => { setIsOpen(false) }}
          />
          <DeleteClientCardModal
            isOpenD={isOpenD}
            onCloseD={() => { setIsOpenD(false) }}
          />
          <MainModal
            selectedClientCard={selectedClientCard}
          />
          <button className='clientCardFooterBtn' onClick={() => { setIsOpen(true) }}>Create New Client</button>
          <button className='clientCardFooterBtn' onClick={() => { setIsOpenD(true) }}>Delete Client</button>
        </section>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;
