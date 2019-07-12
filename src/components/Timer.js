import React from 'react';
import { Progress, Container, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './Timer.css';


class Timer extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            const currentTime = this.props.currentTime + 100;
            this.props.setCurrentTime(currentTime);
        }, 100);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.shouldTimerRender) {
            const milisecondsLeft = (this.props.timeLeft - this.props.currentTime);
            if(milisecondsLeft <= 0) {
                navigator.vibrate(300, 300, 300);
                this.beeper(1000, 475, 1, 'triangle');
                this.props.changeActivity();
            }

            
            if(milisecondsLeft === 3000 || milisecondsLeft === 2000 || milisecondsLeft === 1000) {
                navigator.vibrate(400);
                this.beeper(300, 470, 1, 'triangle');
            }

            if(this.props.currentTime < this.props.timeLeft) {
                setTimeout(() => {
                    const currentTime = this.props.currentTime + 100;
                    this.props.setCurrentTime(currentTime);
                }, 100);
            };
        };
    };

    render() {

        const secondsLeft = Math.ceil((this.props.timeLeft - this.props.currentTime) / 1000);

        return (
        <div className={this.props.shouldTimerRender === true ? "visible" : "hidden"}>
            
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
            <div id="timerSecondsDisplay">
                {secondsLeft}
            </div>
            
        </div>
        );
    };

    beeper(duration, frequency, volume, type, callback) {
        //source: https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
        //Author: Houshalter

            //duration of the tone in milliseconds. Default is 500
            //frequency of the tone in hertz. default is 440
            //volume of the tone. Default is 1, off is 0.
            //type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
            //callback to use on end of tone


        var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

        var oscillator = audioCtx.createOscillator();
        var gainNode = audioCtx.createGain();
    
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
    
        if (volume){gainNode.gain.value = volume;};
        if (frequency){oscillator.frequency.value = frequency;}
        if (type){oscillator.type = type;}
        if (callback){oscillator.onended = callback;}
    
        oscillator.start();
        setTimeout(function(){oscillator.stop()}, (duration ? duration : 500));
    };
};

export default Timer;