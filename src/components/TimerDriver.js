import React from 'react';
import Timer from './Timer';
import { Modal, Button } from "semantic-ui-react";

class TimerDriver extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: this.props.prepareTime * 1000,
            currentTime: 0,
            climberActivity: "Prepare",
            activityIndex: 0,
            endAt: this.props.cycles,
            baseRest: this.props.baseRest * 1000,
            shouldTimerRender: true,
            open: false
        };
        
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
    };

    close = () => this.setState({ open: false })

    resetTimer = () => {
        this.setState({
            timeLeft: this.props.prepareTime * 1000,
            currentTime: 0,
            climberActivity: "Prepare",
            activityIndex: 0,
            endAt: this.props.cycles,
            baseRest: this.props.baseRest * 1000,
            shouldTimerRender: true,
            open: true
        });
    };

    render() {
        
        return (
            <Modal 
                open={this.state.open}
                onClose={this.close}
                dimmer='blurring'
                trigger={<Button onClick={this.resetTimer} color='green' size='massive' fluid circular>Start</Button>}
            >
                <Modal.Header>Interval</Modal.Header>
                <Modal.Content>
                    <Timer 
                    timeLeft={this.state.timeLeft}
                    currentTime={this.state.currentTime}
                    setCurrentTime={this.setCurrentTime}
                    climberActivity={this.state.climberActivity}
                    changeActivity={this.changeActivity}
                    shouldTimerRender={this.state.shouldTimerRender}
                    />
                </Modal.Content>
            </Modal>
                
        );
    };

    setCurrentTime = (currentTime) => {
        this.setState({currentTime: currentTime});
    }

    changeActivity = () => {
        const activities = ["Prepare", "Climbing", "Resting", "Finished"];

        if(this.state.activityIndex + 1 === this.state.endAt) {
            this.close();
        }
        else if((this.state.activityIndex + 1) % 2 !== 0) {
            this.setState({
                timeLeft: this.props.timeLeft * 1000,
                currentTime: 0,
                climberActivity: activities[1],
                activityIndex: this.state.activityIndex + 1,
                shouldTimerRender: true
            });
        }
        else {
            let restingTime = this.state.baseRest;
            if(this.state.activityIndex + 1 > 2) {
                restingTime = this.state.baseRest / ((this.state.activityIndex + 1) * (this.props.reduceRestByPercent || 1));
            }

            this.setState({
                timeLeft: restingTime,
                currentTime: 0,
                climberActivity: activities[2],
                activityIndex: this.state.activityIndex + 1,
                shouldTimerRender: true
            });
        };
    };

};

export default TimerDriver;