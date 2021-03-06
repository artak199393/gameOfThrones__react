import React, {useEffect, useState} from 'react';
import './randomChar.css';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

function RandomChar ({getCharacter}) {
    
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=> {
        upDateChar();
        let timerId = setInterval(upDateChar, 1500);
        return ()=>{
            clearInterval(timerId);
        }
    },[])
    function onCharLoaded (char){
        setChar (char);
        setLoading(false);
        }
    
    function onError (err){
        setError(true);
        setLoading(false);
    }
    function upDateChar (){
        const id = Math.floor(Math.random()*140+25);
        getCharacter(id)
            .then(onCharLoaded)
            .catch(onError);
    }
    
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

        
    
}export default RandomChar;
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
