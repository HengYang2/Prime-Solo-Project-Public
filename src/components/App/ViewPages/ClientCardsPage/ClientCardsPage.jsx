import React from 'react';
import { useSelector } from 'react-redux';
import './Universal.css';
import './ClientCardGrid.css';
import Header from '../../Header/Header';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


//Import CreateClientCardModal:
import CreateClientCardModal from '../../../Modals/CreateClientCardModal/CreateClientCardModal';
import DeleteClientCardModal from '../../../Modals/DeleteClientCardModal/DeleteClientCardModal'
import MainModal from '../../../Modals/MainModal/MainModal';

//Import nav bar component:
import Nav from '../../Nav/Nav';

//Import ClientCard component:
import ClientCard from './ClientCard/ClientCard';


function ClientCardsPage() {

  const dispatch = useDispatch();

  //useState to tell that the modal is open:
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenD, setIsOpenD] = useState(false);
  const [isOpenM, setIsOpenM] = useState(false);

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

  //Function to open Modal:


  // console.log('clientCardsReducer VALUE --->', clientCardsReducer);
  return (
    <div className="container">
      <Nav />
      <div className='rightside_page_render'>
        <Header
          titleName={titleName}
        />
        <section className='clientCardGrid'>
          {clientCardsReducer.map((clientCard) => (
            <ClientCard
              key={clientCard.id}
              clientInfo={clientCard}
              setIsOpenM={setIsOpenM}
              setSelectedClientCard={setSelectedClientCard}
            />
          ))}
        </section>
        <section >
          <CreateClientCardModal
            isOpen={isOpen}
            onClose={() => { setIsOpen(false) }}
          />
          <DeleteClientCardModal
            isOpenD={isOpenD}
            onCloseD={() => { setIsOpenD(false) }}
          />
          <MainModal
            isOpenM={isOpenM}
            onCloseM={() => { setIsOpenM(false) }}
            selectedClientCard={selectedClientCard}
          />
          <button onClick={() => { setIsOpen(true) }}>Create New Client</button>
          <button onClick={() => { setIsOpenD(true) }}>Delete New Client</button>
        </section>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ClientCardsPage;
