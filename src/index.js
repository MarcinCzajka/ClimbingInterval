import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.screen.orientation.lock("portrait-primary");

async function lockOrientation() {
    try {
        await window.screen.orientation.lock("portrait-primary");
    } catch(err) {
        console.log(err)
    }
}

lockOrientation();

ReactDOM.render(<App />, document.querySelector("#root"));