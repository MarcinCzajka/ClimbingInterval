const AudioContext = window.audioContext || window.AudioContext || window.webkitAudioContexts;

class Beeper {
    constructor() {
        super();
		
		this.AudioContext.AudioContext = new AudioContext();
        this.AudioContext.type = 'triangle';
    }

    start(duration) {
        const oscillator = this.AudioContext.createOscillator();
        const gainNode = this.AudioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.AudioContext.destination);

        gainNode.gain.value = 1;

        if (oscillator.noteOn) oscillator.noteOn(0);
        if (oscillator.start) oscillator.start();

        setTimeout(() => {
            if (oscillator.noteOff) oscillator.noteOff(0);
            if (oscillator.stop) oscillator.stop();
        }, duration);

    }
};

export default Beeper