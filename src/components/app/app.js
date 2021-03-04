import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/';
import './app.css'
import ToogleRandomButton from '../button';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import gotService from '../../services/gotService';

export default class App extends Component {
constructor(props){
    super(props);
    this.state ={
        showRandomChar:true,
        error: false
    }
    this.onRandomChar =this.onRandomChar.bind(this);
}
gotService = new gotService();
componentDidCatch(){
    console.log('error');
    this.setState({
        error:true
    })
}
onRandomChar (){
    this.setState({
        showRandomChar:!this.state.showRandomChar
    })
}

    render(){
        const showRandomChar=this.state.showRandomChar;
        
        if(this.state.error){
            return <ErrorMessage/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    {
                        showRandomChar? <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <RandomChar />
                        </Col>
                    </Row>:null
                    }
                    <ToogleRandomButton onRandomChar={this.onRandomChar}/>
                    <CharacterPage/>
                    {/* <Row>
                        <Col md='6'>
                            <ItemList  
                                onItenSelected={this.onItemSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem = {(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <ItemDetails  charId={this.state.selectedItem}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList  
                                onItemSelected={this.onItemSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem = {(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <ItemDetails  itemId={this.state.selectedChar}/>
                        </Col>
                    </Row> */}
                </Container>
            </>
        );
    }
};

