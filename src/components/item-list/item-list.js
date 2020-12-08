import React from 'react';

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

// const { getAllPeople } = new SwapiService();

// export default WithData(ItemList, getAllPeople);
export default ItemList;