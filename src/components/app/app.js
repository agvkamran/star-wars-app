import React from 'react';
import Header from '../app-header/app-header';
import ItemList from '../item-list/item-list';
import RandomPlanet from '../random-planet/random-planet';
import PersonDetails from '../person-details/person-details';

export default class App extends React.Component {

    state = {
        selectedPerson: Math.floor(Math.random()*10) + 1
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <ItemList onItemSelected={this.onPersonSelected} />
                <PersonDetails personId={this.state.selectedPerson} />
            </div>
        )
    }
}

