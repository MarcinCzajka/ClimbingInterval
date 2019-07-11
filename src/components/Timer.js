import React from 'react';
import { Progress } from "semantic-ui-react";
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
            if(this.props.currentTime >= this.props.timeLeft) this.props.changeActivity();

            if(this.props.currentTime < this.props.timeLeft) {
                setTimeout(() => {
                    const currentTime = this.props.currentTime + 100;
                    this.props.setCurrentTime(currentTime);
                }, 100);
            };
        }
	};

    render() {

        const secondsLeft = Math.ceil((this.props.timeLeft - this.props.currentTime) / 1000);
        const displayTimeLeft = (secondsLeft ? `Seconds left: ${secondsLeft}` : "")

        return (
        <div className={this.props.shouldTimerRender === true ? "visible" : "hidden"}>
            <p>{displayTimeLeft}</p>

            <Progress 
                indicating
                inverted
                value={this.props.currentTime} 
                total={this.props.timeLeft}
            >
                {this.props.climberActivity}
            </Progress>
        </div>
        )
    }
};

export default Timer;