import React from 'react';
import { Modal, Button, Header, Dropdown } from "semantic-ui-react";

class TimerSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prepareTime: 0,
            timeLeft: 0,
            baseRest: 0,
			reduceRestByPercent: 50,
            cycles: 0
        };
        
    };



    render() {
        
        return (
            <Modal trigger={<Button>Set Interval</Button>}>
                <Modal.Header>Settings:</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    };

};

export default TimerSettings;