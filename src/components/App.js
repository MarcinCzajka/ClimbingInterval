import React from 'react';
import Timer from './Timer';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: 2000,
            currentTime: 0,
            climberActivity: "Climbing"
        };
        
        this.setCurrentTime = this.setCurrentTime.bind(this);
    };

    render() {
        return (
        <Timer 
            timeLeft={this.state.timeLeft} 
            currentTime={this.state.currentTime}
            setCurrentTime={this.setCurrentTime} 
            climberActivity={this.state.climberActivity} />
        );
    };

    setCurrentTime = (currentTime) => {
        this.setState({currentTime: currentTime});
    }
};

export default App;