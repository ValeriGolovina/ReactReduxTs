import React, { Component } from 'react';
import Card from "../card/Card";
import CardModel from "../../models/cardModel";
import FiltersModel from "../../models/filtersModel";

interface Props {
    cards: CardModel[],
    filters: FiltersModel
}
class CardsList extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        let cards: object[] = [];
        this.props.cards.forEach((card: CardModel) => {
            if (card.name.indexOf(this.props.filters.name) === -1 || card.description.city.indexOf(this.props.filters.city) === -1) {
                return;
            }
            cards.push(<Card card={card} key={card.id}/>);
        });
        return (
            <div className="CardsList">
                <div className="CardsList-item">
                    {cards}
                </div>
            </div>
        );
    }
}

export default CardsList;