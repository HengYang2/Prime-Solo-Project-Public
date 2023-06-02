import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPostList(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };
  
    const response = yield axios.get(`/api/clientCards/posts/${action.payload}` );
    console.log('POST LIST FROM DATBASE -->', response.data);
    yield put({ type: 'SET_POST_LIST', payload: response.data });
  } catch (error) {
    console.log('Client card get request failed', error);
  }
}

function* fetchPostListSaga() {
  yield takeLatest('FETCH_POST_LIST', fetchPostList);
}

export default fetchPostListSaga;
