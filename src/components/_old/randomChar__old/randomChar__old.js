import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../../services/gotService';
import Spinner from '../spinner__old';
import ErrorMessage from '../errorMessage__old';

export default class RandomChar extends Component {
    gotService = new gotService();
    state = {
        char: {},
        loading:true,
        error: false
    }
    componentDidMount() {
        this.upDateChar();
        this.timerId = setInterval(this.upDateChar, 1500);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) =>{
        this.setState({
            char,
            loading:false
        })
    }
    onError = (err) =>{
        this.setState({
            error:true,
            loading:false
        })
    }
    upDateChar = () => {
        const id = Math.floor(Math.random()*140+25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }
    render() {
        const {char, loading, error} = this.state;
        const spinner = loading ? <Spinner/>: null;
        const content = !(loading || error )? <View char={char}/>:null;
        const errorMessage = error ? <ErrorMessage/>: null;
        return (
            <div className="random-block rounded">
                {errorMessage}
                {content}
                {spinner}
            </div>
        );

        
    }
}
const View = ({char}) =>{
    const {name, gender, born, died, culture} = char;
    return(
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}
