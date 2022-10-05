import React, { Component } from "react";

import Card from "../card/cad.component";
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {
                    monsters.map((monster) => {
                        return (
                           <Card monster={monster} key={monster} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;
