import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapi;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
            <Record field='gender' label='Gender: ' />
            <Record field='eyeColor' label='Eye Color: ' />
        </ItemDetails>
    )
}

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>
            <Record field='population' label='Population: ' />
            <Record field='rotationPeriod' label='Rotation Period: ' />
            <Record field='diameter' label='Diameter: ' />
        </ItemDetails>
    )
}

const StarshipDetails = () => {
    return (
        <ItemDetails
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field='model' label='Model: ' />
            <Record field='length' label='Length: ' />
            <Record field='passengers' label='Passengers: ' />
        </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}