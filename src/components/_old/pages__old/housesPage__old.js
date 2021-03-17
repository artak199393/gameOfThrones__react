  
import React, {Component} from 'react';
import ItemList from '../itemList__old';
import ItemDetails, {Field} from '../itemDetails__old';
import ErrorMessage from '../errorMessage__old';
import gotService from '../../../services/gotService';
import RowBlock from '../rowBlock__old';

export default class HousesPage extends Component {
    gotService = new gotService();

    state = {
        selectedHouse: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse} >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={itemDetails} />
        )
    }
}
