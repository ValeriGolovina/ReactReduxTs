import React, { Component } from 'react';
import Filter from "./../filter/Filter";
import CardsList from "./../cardsList/CardsList";
import { Route, Link } from 'react-router-dom';
import axios from "axios";
import FiltersModel from "../../models/filtersModel";
import CardModel from "../../models/cardModel";

interface Props { }
interface State {
    cards: CardModel[],
    filters: FiltersModel;
}

class FilterableCards extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            cards: [],
            filters: {
                name: '',
                city: ''
            }
        };
        this.handleFilterText = this.handleFilterText.bind(this);
    }
    handleFilterText(updatedFilters: FiltersModel): void{
        this.setState({
            filters: updatedFilters
        });
    }
    componentDidMount(): void {
        axios.get(`https://randomuser.me/api/?nat=gb&results=5`)
            .then(res => {
                const cards: CardModel[]=[];
                res.data.results.forEach((fullCard: any) => {
                    cards.push({
                        id: fullCard.id.value,
                        name: fullCard.name.title + ' ' + fullCard.name.first +  ' ' + fullCard.name.last,
                        description: {
                            age: fullCard.dob.age,
                            city: fullCard.location.city,
                            imgPath: fullCard.picture.medium
                        }
                    })
                })
                this.setState({ cards });
            })
            .catch(error => console.log(error))

    }
    render() {
        return (
            <div className="FilterableCards">
                <Filter filters={this.state.filters} onChangingFilterTexts={this.handleFilterText}/>
                <CardsList cards={this.state.cards} filters={this.state.filters}>
                    <Route path="card/:id" />
                </CardsList>
            </div>
        );
    }
}

export default FilterableCards;