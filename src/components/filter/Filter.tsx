import React, { Component } from 'react';
import './Filter.scss';
import FiltersModel from "../../models/filtersModel";

interface Props {
    filters: FiltersModel,
    onChangingFilterTexts(event: any): void;
}


class Filter extends Component<Props> {
    public updatedFilters: FiltersModel= this.props.filters;
    constructor(props: Props) {
        super(props);
        this.handleNameChanges = this.handleNameChanges.bind(this);
        this.handleCityChanges = this.handleCityChanges.bind(this);
    }
    handleNameChanges(e: any):void {
        this.updatedFilters.name = e.target.value;
        this.props.onChangingFilterTexts(this.updatedFilters);
    }
    handleCityChanges(e: any):void {
        this.updatedFilters.city = e.target.value;
        this.props.onChangingFilterTexts(this.updatedFilters);
    }
    render() {
        return (
            <form className="Filter">
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" value={this.props.filters.name} onChange={this.handleNameChanges}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="city" placeholder="City" value={this.props.filters.city} onChange={this.handleCityChanges}/>
                </div>
            </form>
        );
    }
}

export default Filter;