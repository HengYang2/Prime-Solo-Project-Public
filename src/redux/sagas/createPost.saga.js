import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* createPost(action) {

  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.post('/api/clientCards/posts', action.payload);
   
    //Fetch client cards after the new post was made:
    // yield put({ type: 'FETCH_CLIENTCARDS'});
  } catch (error) {
    console.log('Client card post request failed', error);
  }
}

function* createPostSaga() {
  yield takeLatest('SAGA_CREATE_POST', createPost);
}

export default createPostSaga;

