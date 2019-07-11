import React from 'react';
import Timer from './Timer';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timeLeft: 360000
        };
        
        this.setTimeLeft = this.setTimeLeft.bind(this);
    };

    render() {
        return (
        <Timer 
            timeLeft={this.state.timeLeft} 
            setTimeLeft={this.setTimeLeft} />
        );
    };

    setTimeLeft = (timeLeft) => {
        this.setState({timeLeft: timeLeft});
    }
};

export default App;