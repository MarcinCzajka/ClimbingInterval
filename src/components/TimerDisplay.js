import React from 'react';
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './TimerDisplay.css';

class Timer extends React.Component {

    render() {

        const colorOfSeconds = (this.props.climberActivity === "Climbing" ? 'red' : '#A333C8')

        return (
        <div >
            
            <Table color='purple' key='timerDisplay' inverted textAlign='center' size='large'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell colSpan='3'>Cycle: {Math.ceil(this.props.currentCycleIndex/2) || 1}/{this.props.lastCycleIndex/2}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>{this.props.climberActivity}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <div 
            id="timerSecondsDisplay" 
            style={{backgroundColor:colorOfSeconds}}
            onClick={this.props.setPause}>
                {this.props.secondsLeft}
            </div>
            
        </div>
        );
    };


};

export default Timer;