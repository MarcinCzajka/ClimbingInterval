import React from 'react';
import CurrentSettingsDisplay from './CurrentSettingsDisplay';
import TimerSettings from './TimerSettings';
import TimerDriver from './TimerDriver';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prepareTime: 5,
            timeLeft: 120,
            baseRest: 120,
            reduceRestByPercent: 50,
            cycles: 8
        };
    };

    handleDataFromSettings = (data) => {
        const prepareTime = (data.prepMinutes * 60) + data.prepSeconds;
        const timeLeft = (data.climbMinutes * 60) + data.climbSeconds;
        const baseRest = (data.restMinutes * 60) + data.restSeconds;

        this.setState({
            prepareTime: prepareTime,
            timeLeft: timeLeft,
            baseRest: baseRest,
            reduceRestByPercent: data.reduceRestByPercent,
            cycles: data.cycles
        });
    };

    render() {
        
        return (
            <div >
                <CurrentSettingsDisplay
                    prepareTime={this.state.prepareTime}
                    timeLeft={this.state.timeLeft}
                    baseRest={this.state.baseRest}
                    reduceRestByPercent={this.state.reduceRestByPercent}
                    cycles={this.state.cycles}
                />
                <TimerSettings handleSubmit={this.handleDataFromSettings}></TimerSettings>
                <TimerDriver
                    prepareTime={this.state.prepareTime}
                    timeLeft={this.state.timeLeft}
                    baseRest={this.state.baseRest}
                    reduceRestByPercent={this.state.reduceRestByPercent}
                    cycles={this.state.cycles}>
                </TimerDriver>
            </div>
        );
    };

    
};

export default App;