import {Action} from "../../models/actionModel";
import {REQUEST_CARDS, REQUEST_CARDS_FAILURE, REQUEST_CARDS_SUCCESS, TOGGLE_STATUS} from "../actions/constants";
import CardModel from "../../models/cardModel";

export interface State {
    cards: CardModel[],
    loading: boolean,
    isFailed: boolean
}

const initialState: State = {
    cards: [],
    loading: false,
    isFailed: false
};
const reducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case REQUEST_CARDS:
            return { ...state, loading: true };
        case REQUEST_CARDS_SUCCESS:
            const cards: CardModel[] = action.payload.map((fullCard: any) => {
                return {
                    id: fullCard.id.value,
                    name: fullCard.name.title + ' ' + fullCard.name.first +  ' ' + fullCard.name.last,
                    description: {
                        age: fullCard.dob.age,
                        city: fullCard.location.city,
                        imgPath: fullCard.picture.medium
                    },
                    status: 'Applied'
                }
            })
            return { ...state, cards, loading: false };
        case REQUEST_CARDS_FAILURE:
            return { ...state, loading: false, isFailed: true };
        case TOGGLE_STATUS: {
            const {id, status} = action.payload;
            return {
                ...state,
                cards: state.cards.map((card: CardModel) => card.id === id ? {...card, status} : card)};
        }
        default:
            return state;
    }
};
export default reducer;