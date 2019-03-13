import React, { Component } from 'react';
import CardModel from "../../models/cardModel";
import './Card.scss'

interface Props {
    card: CardModel,
}

class Card extends Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    render() {
        const {card} = this.props;
        return (
            <div className="Card">
                <div className="media Card-media">
                    <img src={card.description.imgPath} className="mr-5" alt="Photo" />
                        <div className="media-body">
                            <h5 className="mt-0">{card.name}</h5>
                            <p>Age: {card.description.age}</p>
                            <p>City: {card.description.city}</p>
                        </div>
                </div>
            </div>
        );
    }
}

export default Card;