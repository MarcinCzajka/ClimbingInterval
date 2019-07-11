import React from 'react';
import { Progress } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startingTime: this.props.timeLeft
        };
    };

    componentDidMount() {
        setTimeout(() => {
            const timeLeft = this.props.timeLeft - 100;
            this.props.setTimeLeft(timeLeft);
        }, 100);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.timeLeft >= 0) {
            setTimeout(() => {
                const timeLeft = this.props.timeLeft - 10;
                this.props.setTimeLeft(timeLeft);
            }, 10);
        };
	};

    render() {
        console.log(this.props.timeLeft, this.state.startingTime)
        console.log(Math.ceil((this.props.timeLeft / this.state.startingTime) * 100))
        return (
        <div>
            <Progress percent={Math.ceil((this.props.timeLeft / this.state.startingTime) * 100)} />

            <div>Seconds: {this.props.timeLeft/1000}</div>
        </div>
        )
    }
};

export default Timer;