import React from 'react';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        // if (this.state.hasError) {
        //     return <ErrorIndicator />
        // }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.props.getAllPeople}
            // renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
            >
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson} />
            </ErrorBoundry>
        )

        return <Row left={itemList} right={personDetails} />
    }
}




    // render() {
    //     if (this.state.hasError) {
    //         return <ErrorIndicator />
    //     }

    // const itemList = () => {
    //     return (
    //         <ItemList onItemSelected={this.onPersonSelected}
    //             getData={this.props.getAllPeople}
    //             renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
    //         />
    //         {(i) => `${i.name} (${i.birthyear})`}                        
    //      </ItemList> 
    //     )
    // }

    // const personDetails = () => {
    //     return (
    //         <PersonDetails personId={this.state.selectedPerson} />
    //     )
    // }

    //         return (
    //             <div>
    //                 <ItemList onItemSelected={this.onPersonSelected}
    //                 getData={this.props.getAllPeople}
    //                 renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}/>
    //                 <PersonDetails personId={this.state.selectedPerson} />
    //                 {/* <Row left={itemList} right={personDetails} /> */}
    //             </div >
    //         )
    //     }
    // }