import React, { Component } from 'react';
import CardsList from "../components/cardsList/CardsList";
import CardModel from "../models/cardModel";
import {State} from "../store/reducers";
import {getCards, toggleStatus} from "../store/actions";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {STATUS_CONSTANT} from "./constants";
import './FilterableCards.scss';

interface Props {
    cards: CardModel[],
    loading: boolean,
    isFailed: boolean,
    getCards: Function,
    onStatusChanged: Function
}

const mapStateToProps = (state:State) => ({
    cards: state.cards,
    loading: state.loading,
    isFailed: state.isFailed
});
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getCards: () => dispatch(getCards()),
    onStatusChanged: (id:string, status:string)=> dispatch(toggleStatus(id, status))
})

class ConnectedFilterableCards extends Component<Props> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount(): void {
        this.props.getCards();
    }
    render() {
        const {cards, loading, isFailed, onStatusChanged} = this.props;
        return (

            <div className="FilterableCards" >
                <CardsList toggleStatuses={{right: STATUS_CONSTANT.INTERVIEWED}} status={ STATUS_CONSTANT.APPLIED} cards={cards.filter(card => card.status=== STATUS_CONSTANT.APPLIED)}
                           onStatusChanged={onStatusChanged}/>
                <CardsList toggleStatuses={{left:  STATUS_CONSTANT.APPLIED , right: STATUS_CONSTANT.HIRED}} status={STATUS_CONSTANT.INTERVIEWED}
                           cards={cards.filter(card => card.status===STATUS_CONSTANT.INTERVIEWED)}
                           onStatusChanged={onStatusChanged}/>
                <CardsList toggleStatuses={{left: STATUS_CONSTANT.INTERVIEWED}} status={ STATUS_CONSTANT.HIRED} cards={cards.filter(card => card.status=== STATUS_CONSTANT.HIRED)}
                           onStatusChanged={onStatusChanged}/>
            </div>
        );
    }
}
const FilterableCards = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilterableCards);
export default FilterableCards;