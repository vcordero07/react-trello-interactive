import React from 'react';

import List from './list';
import AddForm from './add-form';

import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [{
                title: 'Example list 1'
            }, {
                title: 'Example list 2'
            }]
        };
    }

    render() {
        const lists = this.state.lists.map((list, index) =>
            <List key={index} {...list} />
        );

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="lists">
                    {lists}
                    <AddForm type="list" onAdd={this.addList} />
                </div>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};
