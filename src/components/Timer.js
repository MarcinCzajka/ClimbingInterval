import React from 'react';
import { Progress, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './Timer.css';


class Timer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            const currentTime = this.props.currentTime + 1000;
            this.props.setCurrentTime(currentTime);
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {

        const milisecondsLeft = (this.props.timeLeft - this.props.currentTime);
        if(milisecondsLeft <= 0) {
            navigator.vibrate(300, 300, 300);
            this.props.changeActivity();
        }

        
        if(milisecondsLeft === 3000 || milisecondsLeft === 2000 || milisecondsLeft === 1000) {
            navigator.vibrate(350);
        }

        if(this.props.currentTime < this.props.timeLeft) {
            setTimeout(() => {
                const currentTime = this.props.currentTime + 1000;
                this.props.setCurrentTime(currentTime);
            }, 1000);
        };
    };

    render() {

        const secondsLeft = Math.ceil((this.props.timeLeft - this.props.currentTime) / 1000);

        const colorOfSeconds = (this.props.climberActivity === "Climbing" ? 'red' : '#A333C8')

        return (
        <div >
            
            <Table color='purple' key='timerDisplay' inverted textAlign='center' size='large'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Cycle:</Table.Cell><Table.Cell>{Math.ceil(this.props.activityIndex/2) || 1}/{this.props.endAt/2}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='2'>{this.props.climberActivity}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Progress 
                indicating
                inverted
                value={this.props.currentTime} 
                total={this.props.timeLeft}
            >
            </Progress>

            <div 
            id="timerSecondsDisplay" 
            style={{backgroundColor:colorOfSeconds}}>
                {secondsLeft}
            </div>
            
        </div>
        );
    };


};

export default Timer;