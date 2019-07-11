import React from 'react';
import { Progress } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './Timer.css';


class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startingTime: this.props.timeLeft
        };
    };

    componentDidMount() {
        setTimeout(() => {
            const currentTime = this.props.currentTime + 100;
            this.props.setCurrentTime(currentTime);
        }, 100);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.currentTime < this.state.startingTime) {
            setTimeout(() => {
                const currentTime = this.props.currentTime + 100;
                this.props.setCurrentTime(currentTime);
            }, 100);
        };
	};

    render() {
        const value = Math.floor((this.props.currentTime / this.state.startingTime) * 100);

        return (
        <>
            <Progress 
            className="bar"
            indicating
            percent={value} />

            <div>Seconds left: {(this.state.startingTime - this.props.currentTime) / 1000}</div>
        </>
        )
    }
};

export default Timer;