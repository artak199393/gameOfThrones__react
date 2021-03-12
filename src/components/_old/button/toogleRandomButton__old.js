import React from 'react';
import {Row, Col} from 'reactstrap';
import './button.css';

const ToogleRandomButton = ({onRandomChar}) => {
    return(
            <Row>
                <Col >
                    <button className='toggle-btn'
                        type="button" 
                        onClick = {onRandomChar} 
                        color="primary">Toogle random character</button>
                </Col>
            </Row>
    )
}
export default ToogleRandomButton;