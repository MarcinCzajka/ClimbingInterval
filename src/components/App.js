import React from 'react';
import Timer from './Timer';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: 5000,
            currentTime: 0,
            climberActivity: "Prepare",
            activityIndex: 0,
            endAt: 8,
            baseRest: 120000,
            shouldTimerRender: true
        };
        
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
    };



    render() {
        
        return (
            <div>
                <Timer 
                    timeLeft={this.state.timeLeft}
                    currentTime={this.state.currentTime}
                    setCurrentTime={this.setCurrentTime}
                    climberActivity={this.state.climberActivity}
                    changeActivity={this.changeActivity}
                    shouldTimerRender={this.state.shouldTimerRender}/>
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
                timeLeft: false,
                currentTime: 0,
                climberActivity: activities[activities.length-1],
                activityIndex: this.state.activityIndex + 1,
                shouldTimerRender: false
            });
        }
        else if((this.state.activityIndex + 1) % 2 !== 0) {
            this.setState({
                timeLeft: 120000,
                currentTime: 0,
                climberActivity: activities[1],
                activityIndex: this.state.activityIndex + 1,
                shouldTimerRender: true
            });
        }
        else {
            let restingTime = this.state.baseRest;
            if(this.state.activityIndex + 1 > 2) {
                restingTime = this.state.baseRest / ((this.state.activityIndex + 1) / 2);
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

export default App;