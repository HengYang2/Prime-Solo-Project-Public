import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions
function* updatePost(action) {

  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.put(`/api/clientCards/posts/${action.payload.post_id}`, action.payload);
   
    //Fetch all posts for the client card again - refreshing client post list:
    yield put({ type: 'FETCH_POST_LIST', payload: action.payload.client_id });
  } catch (error) {
    console.log('Client card post request failed', error);
  }
}

function* updatePostSaga() {
  yield takeLatest('SAGA_UPDATE_POST', updatePost);
}

export default updatePostSaga;