import React, { Component } from 'react';
import Card from "../card/Card";
import CardModel from "../../models/cardModel";
import FiltersModel from "../../models/filtersModel";

interface Props {
    cards: CardModel[],
    filters: FiltersModel
}
function CardsList (props:Props) {
    const {cards, filters} = props;
        const filteredCards: any[] = cards.filter((card: CardModel) => {
            return card.name.includes(filters.name) && card.description.city.includes(filters.city)
        }).map((card) => <Card card={card} key={card.id}/>);

        return (
            <div className="CardsList">
                <div className="CardsList-item">
                    {filteredCards}
                </div>
            </div>
        );
}


export default CardsList;