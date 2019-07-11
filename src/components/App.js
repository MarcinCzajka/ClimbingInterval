import React from 'react';
import Timer from './Timer';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: 1000,
            currentTime: 0,
            climberActivity: "Prepare",
            activityIndex: 0,
            endAt: 6,
            baseRest: 20000
        };
        
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
    };



    render() {
        const secondsLeft = Math.ceil((this.state.timeLeft - this.state.currentTime) / 1000);
        return (
            <div>
                <div>{this.state.climberActivity} Seconds left: {secondsLeft}</div>
                <Timer 
                    timeLeft={this.state.timeLeft} 
                    currentTime={this.state.currentTime}
                    setCurrentTime={this.setCurrentTime} 
                    changeActivity={this.changeActivity} />
            </div>
        );
    };

    setCurrentTime = (currentTime) => {
        this.setState({currentTime: currentTime});
    }

    changeActivity = () => {
        const activities = ["Prepare", "Climbing", "Resting", "Finished"];

        if(this.state.activityIndex + 1 === this.state.endAt) {
            this.setState({
                timeLeft: 999999999999,
                currentTime: 0,
                climberActivity: activities[activities.length-1],
                activityIndex: this.state.activityIndex + 1
            });
        }
        else if((this.state.activityIndex + 1) % 2 !== 0) {
            this.setState({
                timeLeft: 1000,
                currentTime: 0,
                climberActivity: activities[1],
                activityIndex: this.state.activityIndex + 1
            });
        }
        else {
            let restingTime = this.state.baseRest;
            if(!(this.state.activityIndex + 1 <= 2)) {
                restingTime = this.state.baseRest / (this.state.activityIndex + 1);
            }

            this.setState({
                timeLeft: restingTime,
                currentTime: 0,
                climberActivity: activities[2],
                activityIndex: this.state.activityIndex + 1
            });
        };
    };

};

export default App;