import React from 'react';
import {Row, Col, Button} from 'reactstrap'

const ToogleRandomButton = ({onRandomChar}) => {
    return(
            <Row>
                <Col >
                    <Button 
                        type="button" 
                        onClick = {onRandomChar} 
                        color="primary">Toogle random character</Button>
                </Col>
            </Row>
    )
}
export default ToogleRandomButton;