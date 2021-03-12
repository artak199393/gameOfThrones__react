import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import './app.css'
import ToogleRandomButton from '../button';
import ErrorMessage from '../errorMessage';
import gotService from '../../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BooksItem from '../pages/booksItem__old';


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
                    <Route path='/' exact component={() => <h1>Welcom to GOT DB</h1>}/>
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

