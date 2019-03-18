import React from 'react';
import CardModel from "../../models/cardModel";
import './Card.scss'


interface Props {
    card: CardModel,
    onStatusChanged: any
    toggleStatuses: any,
}

function Card(props: Props) {
    const {card,  toggleStatuses} = props;
    return (
        <div className="Card">
            <div className="media Card-media">
                <img src={card.description.imgPath} className="mr-5" alt="Photo"/>
                <div className="media-body">
                    <h5 className="mt-0">{card.name}</h5>
                    <p>Age: {card.description.age}</p>
                    <p>City: {card.description.city}</p>
                </div>
            </div>
            {toggleStatuses.left && <button className="btn btn-small" onClick={() => {props.onStatusChanged(card.id, toggleStatuses.left)}}>Left</button>}
            {toggleStatuses.right && <button className="btn btn-small" onClick={() => {props.onStatusChanged(card.id, toggleStatuses.right)}}>Right</button>}
        </div>
    );
}

export default Card;