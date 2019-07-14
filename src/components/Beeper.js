const AudioContext = window.audioContext || window.AudioContext || window.webkitAudioContext

class Beeper extends AudioContext{
    constructor() {
        super();
        
        this.type = 'triangle';
        this.suspend();
    }

    start(duration) {
        this.resume();
        const oscillator = this.createOscillator();

        oscillator.connect(this.destination)

        if (oscillator.noteOn) oscillator.noteOn(0);
        if (oscillator.start) oscillator.start();

        setTimeout(() => {
            this.suspend();
        }, duration);

    }
}

module.exports = Beeper