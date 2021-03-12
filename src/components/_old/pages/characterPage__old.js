import React, { Component } from 'react';
// import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../../services/gotService';
import RowBlock from '../rowBlock';


export default class CharacterPage extends Component{
    gotService = new gotService();
    state = {
        selectedChar:null,
        error:false 
    }
    onItemSelected = (id) =>{
        this.setState({
            selectedChar: id
        })
    }
    componentDidCatch(){
        console.log('error');
        this.setState({
            error:true
        })
    }
    render(){
        if(this.state.error){
            return <ErrorMessage/>
        }
        const itemList = (
                <ItemList  
                    onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllCharacters}
                    renderItem={(item) => item.name}/>
                )
        const charDetails = ( 
            <ItemDetails  
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter}>
                <Field field = 'gender' label= 'Grnder'/>
                <Field field = 'born' label= 'Born'/>
                <Field field = 'died' label= 'Died'/>
                <Field field = 'culture' label= 'Culture'/>
            </ItemDetails>
            )                   
        return(
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}