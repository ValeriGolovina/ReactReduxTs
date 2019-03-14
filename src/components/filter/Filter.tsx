import React, { Component } from 'react';
import './Filter.scss';
import FiltersModel from "../../models/filtersModel";

interface Props {
    filters: FiltersModel,
    onChangingFilterTexts(event: any): void;
}


function Filter(props:Props) {
    const { onChangingFilterTexts, filters } = props;
    const handleNameChanges = (e: any):void => {
        onChangingFilterTexts({ ...filters, name: e.target.value });
    }
    const handleCityChanges = (e: any):void => {
        console.log(filters);
        onChangingFilterTexts({ ...filters, city: e.target.value });
    }
        return (
            <form className="Filter">
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" value={filters.name} onChange={handleNameChanges}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="city" placeholder="City" value={filters.city} onChange={handleCityChanges}/>
                </div>
            </form>
        );
}

export default Filter;