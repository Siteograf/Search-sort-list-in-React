import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

// import { httpGet } from './utils';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialPizzas : [],
            filterePizzas : [],
            searchLine    : ''
        }
    }

    componentDidMount() {
        const pizzaURL = './pizza.json';

        axios.get(pizzaURL)
            .then(response => {
                    this.setState({
                        initialPizzas : response.data.pizzas,
                        filterePizzas : response.data.pizzas,
                    });
                }
            )
            .catch(function (response) {
                console.log(response);
            });
    }

    reSearch(e) {
        e.preventDefault();
        this.setState({ searchLine : e.target.value });

        let substr = e.target.value;
        let filterePizzas = this.state.initialPizzas.filter(el => el.includes(substr))
        this.setState({ filterePizzas });
    }


    reSortAZ(e) {
        e.preventDefault();
        let filterePizzas = this.state.filterePizzas.sort();
        this.setState({
            filterePizzas
        });

    }
    reSortZA(e) {
        e.preventDefault();
        let filterePizzas = this.state.filterePizzas.sort().reverse();
        this.setState({
            filterePizzas
        });
    }

    content() {
        return (
            <div className="App">
                <input type="text"
                       value={this.state.searchLine}
                       onChange={this.reSearch.bind(this)}
                />
                <button onClick={this.reSortAZ.bind(this)}>Sort A-Z</button>
                <button onClick={this.reSortZA.bind(this)}>Sort Z-A</button>

                <List items={this.state.filterePizzas}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.initialPizzas ? this.content() : '... Loading'}
            </div>
        );
    }
}

export default App;
