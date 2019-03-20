import React from 'react';
import Card from "../card/Card";
import CardModel from "../../models/cardModel";
import ToggleStatusesModel from "../../models/toggleStatusesModel";

interface Props {
    cards: CardModel[],
    status: string,
    toggleStatuses: ToggleStatusesModel,
    onStatusChanged(id:string, status:string | undefined ): void
}
function CardsList ({cards, status, toggleStatuses, onStatusChanged}:Props) {
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