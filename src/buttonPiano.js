import * as Tone from "tone";

// imported into Keys.jsx to map keyboard buttons to piano notes
export default function buttonPiano(event) {
  if (event.repeat) {
    return;
  }
  if (event.keyCode === 90) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C3", "8n");
  } else if (event.keyCode === 83) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C#3", "8n");
  } else if (event.keyCode === 88) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D3", "8n");
  } else if (event.keyCode === 68) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D#3", "8n");
  } else if (event.keyCode === 67) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E3", "8n");
  } else if (event.keyCode === 86) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F3", "8n");
  } else if (event.keyCode === 71) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F#3", "8n");
  } else if (event.keyCode === 66) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G3", "8n");
  } else if (event.keyCode === 72) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G#3", "8n");
  } else if (event.keyCode === 78) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A3", "8n");
  } else if (event.keyCode === 74) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A#3", "8n");
  } else if (event.keyCode === 77) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B3", "8n");
  } else if (event.keyCode === 81) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  } else if (event.keyCode === 50) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C#4", "8n");
  } else if (event.keyCode === 87) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
  } else if (event.keyCode === 51) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D#4", "8n");
  } else if (event.keyCode === 69) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
  } else if (event.keyCode === 82) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
  } else if (event.keyCode === 53) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F#4", "8n");
  } else if (event.keyCode === 84) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
  } else if (event.keyCode === 54) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G#4", "8n");
  } else if (event.keyCode === 89) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
  } else if (event.keyCode === 55) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A#4", "8n");
  } else if (event.keyCode === 85) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
  } else if (event.keyCode === 73) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C5", "8n");
  }
}
