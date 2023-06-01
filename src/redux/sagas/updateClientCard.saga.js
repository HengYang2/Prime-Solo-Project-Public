import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useSelector } from 'react-redux';


// worker Saga: will be fired on "FETCH_USER" actions
function* updateClientCard(action) {

    console.log("IN THE UPDATE CLIENT CARD SAGA");


    console.log('ACTION>PAYLOAD', action.payload);
    try {
        // const config = {
        //   headers: { 'Content-Type': 'application/json' },
        //   withCredentials: true,
        // };

        const response = yield axios.put(`/api/clientCards/${action.payload.client_card_id}`, action.payload);

        //Fetch client cards after the new post was made:
        yield put({ type: 'FETCH_CLIENTCARDS' });
    } catch (error) {
        console.log('Client card update request failed:', error);
    }
}

function* updateClientCardSaga() {
    yield takeLatest('SAGA_UPDATE_CLIENT_CARD', updateClientCard);
}

export default updateClientCardSaga;