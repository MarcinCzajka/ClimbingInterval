import React from 'react';
import { Table } from "semantic-ui-react";
import './TimerDisplay.css';

class Timer extends React.Component {

    render() {

        let colorOfSeconds = '#A333C8';

        if (this.props.isPauseActive) {
            colorOfSeconds = '#6ec412';
        } else if(this.props.climberActivity === "Climbing") {
            colorOfSeconds = '#f00';
        };

        return (
        <div >
            
            <Table color='purple' key='timerDisplay' inverted textAlign='center' size='large'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell colSpan='3'>
                            Cycle: {Math.ceil(this.props.currentCycleIndex/2) || 1}/{this.props.lastCycleIndex/2}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell colSpan='3'>{this.props.climberActivity}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <div 
                id="timerSecondsDisplay" 
                style={{backgroundColor:colorOfSeconds}}
                onClick={this.props.setPause} >

                {Math.abs(this.props.secondsLeft)}
            </div>
            
        </div>
        );
    };


};

export default Timer;