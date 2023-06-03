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
   
   //Fetch all posts for the client card again - refreshing client post list:
    yield put({ type: 'FETCH_POST_LIST', payload: action.payload.client_id});
  } catch (error) {
    console.log('Client card post request failed', error);
  }
}

function* createPostSaga() {
  yield takeLatest('SAGA_CREATE_POST', createPost);
}

export default createPostSaga;

