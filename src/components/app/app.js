import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css'
import ToogleRandomButton from '../button';



export default class App extends Component {
constructor(props){
    super(props);
    this.state ={
        showRandomChar:true
    }
    this.onRandomChar =this.onRandomChar.bind(this);
}

onRandomChar (){
    this.setState({
        showRandomChar:!this.state.showRandomChar
    })
}

    render(){
        const showRandomChar=this.state.showRandomChar;
        
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

