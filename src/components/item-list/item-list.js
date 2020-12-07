import React from 'react';
import SwapiService from '../../services/swapi-service';
import WithData from '../hoc-helpers/with-data';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return <li key={id}
            onClick={() => onItemSelected(id)} >
            {label}</li>
    })

    return (
        <ul>
            {items}
        </ul>
    )
}

const { getAllPeople } = new SwapiService();

export default WithData(ItemList, getAllPeople);