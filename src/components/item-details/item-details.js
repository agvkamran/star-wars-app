import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class ItemDetails extends React.Component {

    swapi = new SwapiService();

    state = {
        item: null,
        loading: true,
        image: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        this.setState({ loading: true })
        const { itemId: itemId, getData: getData, getImageUrl: getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item: item, loading: false, image: getImageUrl(item) })
            })
    }

    render() {
        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }

        if (this.state.loading) {
            return <Spinner />
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.item;
        const { image } = this.state;
        
        return (
            <div>
                <img src={image} alt='chacacter' />
                <div>
                    <h4>{name} {this.props.itemId}</h4>
                    <ul>
                        <li>
                            <span>Gender: </span>
                            <span>{gender}</span>
                        </li>
                        <li>
                            <span>Birth year: </span>
                            <span>{birthYear}</span>
                        </li>
                        <li>
                            <span>Eye color: </span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
