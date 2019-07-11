import React from 'react';
import { Progress } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './Timer.css';


class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    };

    componentDidMount() {
        setTimeout(() => {
            const currentTime = this.props.currentTime + 100;
            this.props.setCurrentTime(currentTime);
        }, 100);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.currentTime < this.props.timeLeft) {
            setTimeout(() => {
                const currentTime = this.props.currentTime + 100;
                this.props.setCurrentTime(currentTime);
            }, 100);
        };
	};

    render() {
        const value = Math.floor((this.props.currentTime / this.props.timeLeft) * 100);

        if(value === 100) this.props.changeActivity();

        return (
        <>
            <Progress 
            className="bar"
            indicating
            percent={value} />

        </>
        )
    }
};

export default Timer;