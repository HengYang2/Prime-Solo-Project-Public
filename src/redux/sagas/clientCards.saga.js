import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchClientCards() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/clientCards', config);

    yield put({ type: 'SET_CLIENTCARDS', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* clientCardsSaga() {
  yield takeLatest('FETCH_CLIENTCARDS', fetchClientCards);
}

export default clientCardsSaga;
