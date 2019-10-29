const AudioContext = window.audioContext || window.AudioContext || window.webkitAudioContexts

class Beeper extends AudioContext{
    constructor() {
        super();
        
        this.type = 'triangle';
    }

    start(duration) {
        const oscillator = this.createOscillator();
        const gainNode = this.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.destination);

        gainNode.gain.value = 1;

        if (oscillator.noteOn) oscillator.noteOn(0);
        if (oscillator.start) oscillator.start();

        setTimeout(() => {
            if (oscillator.noteOff) oscillator.noteOff(0);
            if (oscillator.stop) oscillator.stop();
        }, duration);

    }
}

export default Beeper