import React from 'react';
import Header from '../app-header/app-header';
import ItemList from '../item-list/item-list';
import RandomPlanet from '../random-planet/random-planet';
import PersonDetails from '../person-details/person-details';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch(){
        console.log('componentDidCatch');
        this.setState({ hasError: true })
    }

    render() {

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        return (
            <div>
                <Header />
                <RandomPlanet />
                <ErrorButton />
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        )
    }
}

