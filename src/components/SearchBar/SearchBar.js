import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    "Best Match": 'best_match',
    "Highest Rated": 'rating',
    "Monst Reviewed": 'review_count '
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            terms: '',
            location: '',
            sortBy: 'best_match'
        };
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    }

    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
            </div>
        );
    }
}

export default SearchBar;