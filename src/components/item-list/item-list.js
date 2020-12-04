import React from 'react';
import Spinner from '../spinner/spinner';

export default class ItemList extends React.Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);

            return <li key={id}
                onClick={() => this.props.onItemSelected(id)} >
                {label}</li>
        })
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList);

        return (
            <ul>
                {items}
            </ul>
        )
    }
}

