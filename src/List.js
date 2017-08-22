import React, { Component } from 'react';

class List extends Component {
    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.items.map(el =>
                    <li key={el}>{el}</li>
                )}
            </ul>
        );
    }
}

export default List;
