import {Action} from '../../models/actionModel';
import {REQUEST_CARDS, REQUEST_CARDS_FAILURE, REQUEST_CARDS_SUCCESS, TOGGLE_STATUS} from "./constants";
import CardModel from "../../models/cardModel";

export const getCards = ():Action => ({
    type: REQUEST_CARDS,
})
export const toggleStatus = (id:string, status:string):Action => ({
    type: TOGGLE_STATUS,
    payload: {id, status}
})
export const getCardsSucceed = (cards:CardModel[]): Action => ({
    type: REQUEST_CARDS_SUCCESS,
    payload: cards
})
export const getCardsFailure = (): Action => ({
    type: REQUEST_CARDS_FAILURE
})