import React from 'react';
import TimerSettings from './TimerSettings';
import TimerDriver from './TimerDriver';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prepareTime: 0,
            timeLeft: 0,
            baseRest: 0,
			reduceRestByPercent: 50,
            cycles: 0
        };
    };



    render() {
        
        return (
            <div>
                <TimerSettings></TimerSettings>
            </div>
        );
    };

    
};

export default App;