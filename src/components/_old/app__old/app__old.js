import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header__old';
import RandomChar from '../randomChar__old';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages__old';
import './app.css'
import ToogleRandomButton from '../button__old';
import ErrorMessage from '../errorMessage__old';
import gotService from '../../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
constructor(props){
    super(props);
    this.state ={
        showRandomChar:true,
        error: false,
        selectedHouse: 20
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
            <Router>
                <div className='app'> 
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
                    <Route path='/' exact component={() => <h1 className='got-title'>Welcom to GOT DB</h1>}/>
                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/houses' component={HousesPage}/>
                    <Route path='/books' exact component={BooksPage}/>
                    <Route path='/books/:id' render={
                        ({match}) =>{
                            const {id} = match.params;

                            return <BooksItem bookId = {id}/>
                        }
                    }/>
                
                </Container>
            </div>
            </Router>
        );
    }
};

