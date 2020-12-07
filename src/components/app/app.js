import React from 'react';
import Header from '../app-header/app-header';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details/item-details';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';

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

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapi;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field='gender' label='Gender: ' />
                <Record field='eyeColor' label='Eye Color: ' />
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                <Record field='model' label='Model: ' />
                <Record field='length' label='Length: ' />
                <Record field='passengers' label='Passengers: ' />
            </ItemDetails>
        )
        return (
            <ErrorBoundry>
                <div>
                    <Header />
                    <Row left={personDetails} right={starshipDetails} />
                </div>
            </ErrorBoundry>
        )
    }
}























































// return (
//     <div>
//         <Header />
//         <Row />
{/* <RandomPlanet />
        <ErrorButton />
        <PeoplePage getAllPeople={this.swapi.getAllPeople} /> */}

{/* <div>
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapi.getAllPlanets} 
                renderItem={(item) => <span>{item.name}<button>!</button></span>}
                />
            <PersonDetails personId={this.state.selectedPerson} />
            <ErrorButton />
        </div>
        
        <div>
            <ItemList onItemSelected={this.onPersonSelected}
                getData={this.swapi.getAllStarships}
                renderItem={(item) => item.name} />
            <PersonDetails personId={this.state.selectedPerson} />
            <ErrorButton />
        </div> */}
//     </div>
// )
// }