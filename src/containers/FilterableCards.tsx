import React, { Component } from 'react';
import CardsList from "../components/cardsList/CardsList";
import CardModel from "../models/cardModel";
import {State} from "../store/reducers";
import {getCards, toggleStatus} from "../store/actions";
import {connect} from "react-redux";
import {STATUS_CONSTANT} from "./constants";
import './FilterableCards.scss';

interface Props {
    cards: CardModel[],
    loading: boolean,
    isFailed: boolean,
    getCards(): void,
    onStatusChanged(id:string, status:string | undefined ): void
}

const mapStateToProps = (state:State) => ({
    cards: state.cards,
    loading: state.loading,
    isFailed: state.isFailed
});

class ConnectedFilterableCards extends Component<Props> {
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
const FilterableCards = connect(mapStateToProps, { getCards: getCards, onStatusChanged: toggleStatus })(ConnectedFilterableCards);
export default FilterableCards;