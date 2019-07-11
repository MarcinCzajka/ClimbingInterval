import React from 'react';
import TimerDriver from './TimerDriver';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };



    render() {
        
        return (
            <div>
                <TimerDriver></TimerDriver>
            </div>
        );
    };

    
};

export default App;