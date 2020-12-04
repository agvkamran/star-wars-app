import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class PersonDetails extends React.Component {

    swapi = new SwapiService();

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        this.setState({ loading: true })
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.swapi
            .getPerson(personId)
            .then((person) => {
                this.setState({ person: person, loading: false })
            })
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        if (this.state.loading) {
            return <Spinner />
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='chacacter' />
                <div>
                    <h4>{name} {this.props.personId}</h4>
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
