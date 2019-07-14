const AudioContext = window.audioContext || window.AudioContext || window.webkitAudioContext

class Beeper extends AudioContext{
    constructor() {
        super();
        
        this.type = 'triangle';
    }

    start(duration) {
        const oscillator = this.createOscillator();

        oscillator.connect(this.destination)

        if (oscillator.noteOn) oscillator.noteOn(0);
        if (oscillator.start) oscillator.start();

        setTimeout(() => {
            if (oscillator.noteOff) osc.noteOff(0);
            if (ooscillatorsc.stop) osc.stop();
        }, duration);

    }
}

export default Beeper