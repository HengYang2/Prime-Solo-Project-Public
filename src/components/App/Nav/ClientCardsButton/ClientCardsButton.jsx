import { func } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ClientCardsButton(props) {

  const history = useHistory();

  function goToPath() {
    history.push('/clientCards');
  }

  return (
    <div onClick={() => {goToPath()}} className={'navButton'}>Client Cards</div>
  );
}

export default ClientCardsButton;
