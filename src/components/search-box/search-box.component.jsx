import React, { Component } from "react";

import './search-box.styles.css';

class SearchBox extends Component {
    render() {

        const { onSearchChange } = this.props;

        return(
            <div>
                <input type="search" className={`search-input ${this.props.className}`} placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />
            </div>
        )
    }
}

export default SearchBox;
