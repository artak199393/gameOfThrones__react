import React from 'react';
import './errorMesage.css';
import img from './error.jpg';

const ErrorMessage = () =>{
    return(
        <>
            <img src={img} alt='error'/>
            <span>Something  goes WRONG</span>
        </>
        
    )
}
export default ErrorMessage;