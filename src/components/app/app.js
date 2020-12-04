import React from 'react';
import Header from '../app-header/app-header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends React.Component {

    swapi = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        console.log('componentDidCatch');
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage getAllPeople={this.swapi.getAllPeople} />
                
                <div>
                    <p>People Page</p>
                    <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapi.getAllPlanets} />
                    <PersonDetails personId={this.state.selectedPerson} />
                    <ErrorButton />
                </div>
                
                <div>
                    <p>People Page</p>
                    <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapi.getAllStarships} />
                    <PersonDetails personId={this.state.selectedPerson} />
                    <ErrorButton />
                </div>
            </div>
        )
    }
}

