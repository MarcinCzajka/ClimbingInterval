import React from 'react';
import { Form, Label } from "semantic-ui-react";

class CurrentSettingsDisplay extends React.Component {
     

    render() {
        return ( 
            <Form widths="Two">
                <Form.Group >
                    <Label>Prepare: </Label><Label>{this.props.prepareTime+" seconds"}</Label>
                </Form.Group>

                <Form.Group>
                    <Label>Climbing: </Label><Label>{this.props.timeLeft+" seconds"}</Label>
                </Form.Group>
                    
                <Form.Group>
                    <Label>Resting: </Label><Label>{this.props.baseRest+" seconds"}</Label>
                </Form.Group>
                    
                <Form.Group>
                    <Label>Cycles: </Label><Label>{this.props.cycles}</Label>
                </Form.Group>
            </Form>
        );
    };

};

export default CurrentSettingsDisplay;