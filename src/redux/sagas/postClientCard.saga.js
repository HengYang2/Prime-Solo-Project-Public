import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* postClientCard(action) {

  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.post('/api/clientCards', action.payload);
   
    //Fetch client cards after the new post was made:
    yield put({ type: 'FETCH_CLIENTCARDS'});
  } catch (error) {
    console.log('Client card post request failed', error);
  }
}

function* postClientCardSaga() {
  yield takeLatest('POST_CLIENTCARD', postClientCard);
}

export default postClientCardSaga;