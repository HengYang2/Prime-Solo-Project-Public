import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* deleteClientCard(action) {

  console.log('ACTION>PAYLOAD', action.payload);
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.delete(`/api/clientCards/${action.payload}`);

    //Fetch client cards after the new post was made:
    yield put({ type: 'FETCH_CLIENTCARDS'});
  } catch (error) {
    console.log('Client card delete request failed:', error);
  }
}

function* deleteClientCardSaga() {
  yield takeLatest('DELETE_CLIENTCARD', deleteClientCard);
}

export default deleteClientCardSaga;