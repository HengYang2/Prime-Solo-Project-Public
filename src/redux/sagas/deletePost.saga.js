import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deletePost(action) {

  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    const response = yield axios.delete(`/api/clientCards/posts/${action.payload.id}`);
   
   //Fetch all posts for the client card again - refreshing client post list:
    yield put({ type: 'FETCH_POST_LIST', payload: action.payload.client_id});
  } catch (error) {
    console.log('Client card delete request failed', error);
  }
}

function* deletePostSaga() {
  yield takeLatest('SAGA_DELETE_POST', deletePost);
}

export default deletePostSaga;