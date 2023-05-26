import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* postClientCard() {

  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/clientCards', config);

    yield put({ type: 'SET_CLIENTCARDS', payload: response.data });
  } catch (error) {
    console.log('Client card get request failed', error);
  }
}

function* postClientCardSaga() {
  yield takeLatest('POST_CLIENTCARD', postClientCard);
}

export default postClientCardSaga;