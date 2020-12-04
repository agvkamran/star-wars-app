import React from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorButton from '../error-button/error-button';
export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div>
                <p>People Page</p>
                <ItemList onItemSelected={this.onPersonSelected}
                    getData={this.props.getAllPeople}
                    renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
                <PersonDetails personId={this.state.selectedPerson} />
                <ErrorButton />
            </div>
        )
    }
}