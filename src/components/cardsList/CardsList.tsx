import React from 'react';
import Card from "../card/Card";
import CardModel from "../../models/cardModel";

interface Props {
    cards: CardModel[],
    status: string,
    toggleStatuses: Object
    onStatusChanged: Function
}
function CardsList (props:Props) {
    const {cards, status, toggleStatuses, onStatusChanged} = props;
        const filteredCards: any[] = cards.map((card) =>
            <Card card={card} key={card.id} toggleStatuses={toggleStatuses} onStatusChanged={onStatusChanged}/>);
        return (
            <div className="CardsList">
                <div className="CardsList-item">
                    {status}
                    {filteredCards}
                </div>
            </div>
        );
}

export default CardsList;