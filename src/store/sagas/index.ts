import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {getCardsFailure, getCardsSucceed} from "../actions";
import {REQUEST_CARDS} from "../actions/constants";

const getCards = () => axios.get(`https://randomuser.me/api/?nat=gb&results=5`);

function* loadCards() {
    try {
        const cards = yield call(getCards);
        yield put(getCardsSucceed(cards.data.results));
    } catch(error) {
        yield put(getCardsFailure());
    }
}
export function* listenerSaga () {
    yield takeLatest(REQUEST_CARDS, loadCards);
}