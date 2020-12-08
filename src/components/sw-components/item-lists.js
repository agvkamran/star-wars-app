import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers/with-data';
import SwapiService from '../../services/swapi-service';
// import { render } from '@testing-library/react';

const swapi = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapi;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};

// const renderName = ({ name }) => {

//     return <span>{name}</span>;
// }

// const renderNameAndModel = ({ model, name}) => {
// <span>{name} ({model})</span>
// }
// console.log(name);
// const ListWithChildren = withChildFunction(ItemList, renderName);

const ListWithChildren = withChildFunction(
    ItemList,
    ({name}) => <span>{name}</span>
) 


const ListWithChildrenModel = withChildFunction(
    ItemList,
    ({name, model}) => <span>{name} {model}</span>
)
// внизу таже функция


const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetList = withData(ListWithChildren, getAllPlanets);
const StarshipList = withData(ListWithChildrenModel, getAllStarships);

// const PersonList = withData(
//                             withChildFunction(ItemList, renderName),
//                             getAllPeople);
// const PlanetList = withData(
//                             withChildFunction,(ItemList, renderName),
//                             getAllPlanets);
// const StarshipList = withData(
//                             withChildFunction,(ItemList, renderName),
//                             getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}