import * as Tone from "tone";

export function pokeCenter() {
  // pokemon center
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  //treble clef
  synth.triggerAttackRelease("D5", "10n", now);
  synth.triggerAttackRelease("A4", "10n", now + 0.25);
  synth.triggerAttackRelease("D5", "10n", now + 0.5);
  synth.triggerAttackRelease("A5", "8n", now + 0.75);
  synth.triggerAttackRelease("G5", "8n", now + 1.25);
  synth.triggerAttackRelease("F#5", "8n", now + 1.75);
  synth.triggerAttackRelease("E5", "8n", now + 2);
  synth.triggerAttackRelease("C#5", "8n", now + 2.25);

  synth.triggerAttackRelease("C#5", "10n", now + 4);
  synth.triggerAttackRelease("A4", "10n", now + 4.25);
  synth.triggerAttackRelease("C#5", "10n", now + 4.5);
  synth.triggerAttackRelease("F#5", "8n", now + 4.75);
  synth.triggerAttackRelease("E5", "8n", now + 5.25);
  synth.triggerAttackRelease("C#5", "10n", now + 5.75);
  synth.triggerAttackRelease("D5", "10n", now + 6);
  synth.triggerAttackRelease("F#5", "10n", now + 6.25);

  synth.triggerAttackRelease("D5", "10n", now + 8);
  synth.triggerAttackRelease("A4", "10n", now + 8.25);
  synth.triggerAttackRelease("D5", "10n", now + 8.5);
  synth.triggerAttackRelease("A5", "8n", now + 8.75);
  synth.triggerAttackRelease("G5", "8n", now + 9.25);
  synth.triggerAttackRelease("F#5", "8n", now + 9.75);
  synth.triggerAttackRelease("E5", "8n", now + 10);
  synth.triggerAttackRelease("C#5", "8n", now + 10.25);

  synth.triggerAttackRelease("C#5", "10n", now + 12);
  synth.triggerAttackRelease("A4", "10n", now + 12.25);
  synth.triggerAttackRelease("C#5", "10n", now + 12.5);
  synth.triggerAttackRelease("F#5", "8n", now + 12.75);
  synth.triggerAttackRelease("E5", "8n", now + 13.25);
  synth.triggerAttackRelease("C#5", "10n", now + 13.75);
  synth.triggerAttackRelease("D5", "8n", now + 14);

  synth.triggerAttackRelease("F#5", "3n", now + 16);
  synth.triggerAttackRelease("A5", "3n", now + 17);
  synth.triggerAttackRelease("G5", "10n", now + 18);
  synth.triggerAttackRelease("A5", "10n", now + 18.25);
  synth.triggerAttackRelease("G5", "10n", now + 18.5);
  synth.triggerAttackRelease("F#5", "10n", now + 18.75);
  synth.triggerAttackRelease("E5", "3n", now + 19);

  synth.triggerAttackRelease("C#5", "3n", now + 20);
  synth.triggerAttackRelease("E5", "3n", now + 21);
  synth.triggerAttackRelease("F#5", "10n", now + 22);
  synth.triggerAttackRelease("G5", "10n", now + 22.25);
  synth.triggerAttackRelease("F#5", "10n", now + 22.5);
  synth.triggerAttackRelease("E5", "10n", now + 22.75);
  synth.triggerAttackRelease("D5", "3n", now + 23);

  synth.triggerAttackRelease("F#5", "3n", now + 24);
  synth.triggerAttackRelease("A5", "3n", now + 25);
  synth.triggerAttackRelease("G5", "10n", now + 26);
  synth.triggerAttackRelease("F#5", "10n", now + 26.25);
  synth.triggerAttackRelease("G5", "10n", now + 26.5);
  synth.triggerAttackRelease("A5", "10n", now + 26.75);
  synth.triggerAttackRelease("B5", "3n", now + 27);

  synth.triggerAttackRelease("A5", "8n", now + 28);
  synth.triggerAttackRelease("G5", "10n", now + 28.5);
  synth.triggerAttackRelease("F#5", "10n", now + 28.75);
  synth.triggerAttackRelease("G5", "3n", now + 29);
  synth.triggerAttackRelease("F#5", "10n", now + 30);
  synth.triggerAttackRelease("G5", "10n", now + 30.25);
  synth.triggerAttackRelease("F#5", "10n", now + 30.5);
  synth.triggerAttackRelease("E5", "10n", now + 30.75);
  synth.triggerAttackRelease("D5", "3n", now + 31);

  //base clef
  synth.triggerAttackRelease("D3", "10n", now);
  synth.triggerAttackRelease("F#3", "10n", now + 0.25);
  synth.triggerAttackRelease("D3", "10n", now + 0.5);
  synth.triggerAttackRelease("F#3", "10n", now + 0.75);
  synth.triggerAttackRelease("D3", "10n", now + 1);
  synth.triggerAttackRelease("F#3", "10n", now + 1.25);
  synth.triggerAttackRelease("G3", "10n", now + 1.5);
  synth.triggerAttackRelease("F#3", "10n", now + 1.75);

  synth.triggerAttackRelease("E3", "10n", now + 2);
  synth.triggerAttackRelease("A3", "10n", now + 2.25);
  synth.triggerAttackRelease("E3", "10n", now + 2.5);
  synth.triggerAttackRelease("A3", "10n", now + 2.75);
  synth.triggerAttackRelease("E3", "10n", now + 3);
  synth.triggerAttackRelease("A3", "10n", now + 3.25);
  synth.triggerAttackRelease("E3", "10n", now + 3.5);
  synth.triggerAttackRelease("A3", "10n", now + 3.75);

  synth.triggerAttackRelease("E3", "10n", now + 4);
  synth.triggerAttackRelease("A3", "10n", now + 4.25);
  synth.triggerAttackRelease("E3", "10n", now + 4.5);
  synth.triggerAttackRelease("A3", "10n", now + 4.75);
  synth.triggerAttackRelease("E3", "10n", now + 5);
  synth.triggerAttackRelease("A3", "10n", now + 5.25);
  synth.triggerAttackRelease("G3", "8n", now + 5.5);

  synth.triggerAttackRelease("F#3", "10n", now + 6);
  synth.triggerAttackRelease("A3", "10n", now + 6.25);
  synth.triggerAttackRelease("F#3", "10n", now + 6.5);
  synth.triggerAttackRelease("A3", "10n", now + 6.75);
  synth.triggerAttackRelease("F#3", "10n", now + 7);
  synth.triggerAttackRelease("A3", "10n", now + 7.25);
  synth.triggerAttackRelease("E3", "8n", now + 7.5);

  synth.triggerAttackRelease("D3", "10n", now + 8);
  synth.triggerAttackRelease("F#3", "10n", now + 8.25);
  synth.triggerAttackRelease("D3", "10n", now + 8.5);
  synth.triggerAttackRelease("F#3", "10n", now + 8.75);
  synth.triggerAttackRelease("D3", "10n", now + 9);
  synth.triggerAttackRelease("F#3", "10n", now + 9.25);
  synth.triggerAttackRelease("G3", "10n", now + 9.5);
  synth.triggerAttackRelease("F#3", "10n", now + 9.75);

  synth.triggerAttackRelease("E3", "10n", now + 10);
  synth.triggerAttackRelease("A3", "10n", now + 10.25);
  synth.triggerAttackRelease("E3", "10n", now + 10.5);
  synth.triggerAttackRelease("A3", "10n", now + 10.75);
  synth.triggerAttackRelease("E3", "10n", now + 11);
  synth.triggerAttackRelease("A3", "10n", now + 11.25);
  synth.triggerAttackRelease("E3", "10n", now + 11.5);
  synth.triggerAttackRelease("A3", "10n", now + 11.75);

  synth.triggerAttackRelease("E3", "10n", now + 12);
  synth.triggerAttackRelease("A3", "10n", now + 12.25);
  synth.triggerAttackRelease("E3", "10n", now + 12.5);
  synth.triggerAttackRelease("A3", "10n", now + 12.75);
  synth.triggerAttackRelease("E3", "10n", now + 13);
  synth.triggerAttackRelease("A3", "10n", now + 13.25);
  synth.triggerAttackRelease("G3", "8n", now + 13.5);

  synth.triggerAttackRelease("D3", "10n", now + 14);
  synth.triggerAttackRelease("E3", "10n", now + 14.25);
  synth.triggerAttackRelease("D3", "10n", now + 14.5);
  synth.triggerAttackRelease("E3", "10n", now + 14.75);
  synth.triggerAttackRelease("D3", "8n", now + 15);
  synth.triggerAttackRelease("E3", "8n", now + 15.5);

  synth.triggerAttackRelease("F#3", "10n", now + 16);
  synth.triggerAttackRelease("A3", "10n", now + 16.25);
  synth.triggerAttackRelease("F#3", "10n", now + 16.5);
  synth.triggerAttackRelease("A3", "10n", now + 16.75);
  synth.triggerAttackRelease("F#3", "10n", now + 17);
  synth.triggerAttackRelease("A3", "10n", now + 17.25);
  synth.triggerAttackRelease("F#3", "10n", now + 17.5);
  synth.triggerAttackRelease("A3", "10n", now + 17.75);

  synth.triggerAttackRelease("G3", "10n", now + 18);
  synth.triggerAttackRelease("B3", "10n", now + 18.25);
  synth.triggerAttackRelease("G3", "10n", now + 18.5);
  synth.triggerAttackRelease("B3", "10n", now + 18.75);
  synth.triggerAttackRelease("G3", "10n", now + 19);
  synth.triggerAttackRelease("B3", "10n", now + 19.25);
  synth.triggerAttackRelease("G3", "10n", now + 19.5);
  synth.triggerAttackRelease("B3", "10n", now + 19.75);

  synth.triggerAttackRelease("E3", "10n", now + 20);
  synth.triggerAttackRelease("G3", "10n", now + 20.25);
  synth.triggerAttackRelease("E3", "10n", now + 20.5);
  synth.triggerAttackRelease("G3", "10n", now + 20.75);
  synth.triggerAttackRelease("E3", "10n", now + 21);
  synth.triggerAttackRelease("G3", "10n", now + 21.25);
  synth.triggerAttackRelease("E3", "10n", now + 21.5);
  synth.triggerAttackRelease("G3", "10n", now + 21.75);

  synth.triggerAttackRelease("F#3", "10n", now + 22);
  synth.triggerAttackRelease("A3", "10n", now + 22.25);
  synth.triggerAttackRelease("F#3", "10n", now + 22.5);
  synth.triggerAttackRelease("A3", "10n", now + 22.75);
  synth.triggerAttackRelease("F#3", "10n", now + 23);
  synth.triggerAttackRelease("A3", "10n", now + 23.25);
  synth.triggerAttackRelease("G#3", "10n", now + 23.5);
  synth.triggerAttackRelease("A3", "10n", now + 23.75);

  synth.triggerAttackRelease("F#3", "10n", now + 24);
  synth.triggerAttackRelease("A3", "10n", now + 24.25);
  synth.triggerAttackRelease("F#3", "10n", now + 24.5);
  synth.triggerAttackRelease("A3", "10n", now + 24.75);
  synth.triggerAttackRelease("F#3", "10n", now + 25);
  synth.triggerAttackRelease("A3", "10n", now + 25.25);
  synth.triggerAttackRelease("F#3", "10n", now + 25.5);
  synth.triggerAttackRelease("A3", "10n", now + 25.75);

  synth.triggerAttackRelease("G3", "10n", now + 26);
  synth.triggerAttackRelease("B3", "10n", now + 26.25);
  synth.triggerAttackRelease("G3", "10n", now + 26.5);
  synth.triggerAttackRelease("B3", "10n", now + 26.75);
  synth.triggerAttackRelease("G3", "10n", now + 27);
  synth.triggerAttackRelease("B3", "10n", now + 27.25);
  synth.triggerAttackRelease("G3", "10n", now + 27.5);
  synth.triggerAttackRelease("B3", "10n", now + 27.75);

  synth.triggerAttackRelease("E3", "10n", now + 28);
  synth.triggerAttackRelease("G3", "10n", now + 28.25);
  synth.triggerAttackRelease("E3", "10n", now + 28.5);
  synth.triggerAttackRelease("G3", "10n", now + 28.75);
  synth.triggerAttackRelease("E3", "10n", now + 29);
  synth.triggerAttackRelease("G3", "10n", now + 29.25);
  synth.triggerAttackRelease("E3", "10n", now + 29.5);
  synth.triggerAttackRelease("G3", "10n", now + 29.75);

  synth.triggerAttackRelease("F#3", "10n", now + 30);
  synth.triggerAttackRelease("A3", "10n", now + 30.25);
  synth.triggerAttackRelease("F#3", "10n", now + 30.5);
  synth.triggerAttackRelease("A3", "10n", now + 30.75);
  synth.triggerAttackRelease("F#3", "10n", now + 31);
  synth.triggerAttackRelease("G3", "10n", now + 31.25);
  synth.triggerAttackRelease("F#3", "10n", now + 31.5);
  synth.triggerAttackRelease("G3", "10n", now + 31.75);

  //mid piano
  synth.triggerAttackRelease("F#4", "10n", now);
  synth.triggerAttackRelease("F4", "10n", now + 0.25);
  synth.triggerAttackRelease("F#4", "8n", now + 0.5);
  synth.triggerAttackRelease("C#5", "10n", now + 1.25);
  synth.triggerAttackRelease("B4", "10n", now + 1.5);
  synth.triggerAttackRelease("A4", "10n", now + 1.75);

  synth.triggerAttackRelease("B4", "10n", now + 2);
  synth.triggerAttackRelease("A4", "10n", now + 2.25);
  synth.triggerAttackRelease("G4", "10n", now + 2.5);
  synth.triggerAttackRelease("F#4", "10n", now + 2.75);
  synth.triggerAttackRelease("A4", "10n", now + 3);
  synth.triggerAttackRelease("F#4", "10n", now + 3.25);
  synth.triggerAttackRelease("G4", "10n", now + 3.5);
  synth.triggerAttackRelease("A4", "10n", now + 3.75);

  synth.triggerAttackRelease("A4", "10n", now + 4);
  synth.triggerAttackRelease("E4", "10n", now + 4.25);
  synth.triggerAttackRelease("A4", "8n", now + 4.5);
  synth.triggerAttackRelease("B4", "10n", now + 5.25);
  synth.triggerAttackRelease("A4", "10n", now + 5.5);
  synth.triggerAttackRelease("G4", "10n", now + 5.75);

  synth.triggerAttackRelease("F#4", "10n", now + 6);
  synth.triggerAttackRelease("A4", "10n", now + 6.25);
  synth.triggerAttackRelease("B4", "10n", now + 6.5);
  synth.triggerAttackRelease("C#5", "10n", now + 6.75);
  synth.triggerAttackRelease("D5", "10n", now + 7);
  synth.triggerAttackRelease("C#5", "10n", now + 7.25);
  synth.triggerAttackRelease("B4", "10n", now + 7.5);
  synth.triggerAttackRelease("A4", "10n", now + 7.75);

  synth.triggerAttackRelease("F#4", "10n", now + 8);
  synth.triggerAttackRelease("F4", "10n", now + 8.25);
  synth.triggerAttackRelease("F#4", "8n", now + 8.5);
  synth.triggerAttackRelease("C#5", "10n", now + 9.25);
  synth.triggerAttackRelease("B4", "10n", now + 9.5);
  synth.triggerAttackRelease("A4", "10n", now + 9.75);

  synth.triggerAttackRelease("B4", "10n", now + 10);
  synth.triggerAttackRelease("A4", "10n", now + 10.25);
  synth.triggerAttackRelease("G4", "10n", now + 10.5);
  synth.triggerAttackRelease("F#4", "10n", now + 10.75);
  synth.triggerAttackRelease("A4", "10n", now + 11);
  synth.triggerAttackRelease("F#4", "10n", now + 11.25);
  synth.triggerAttackRelease("G4", "10n", now + 11.5);
  synth.triggerAttackRelease("A4", "10n", now + 11.75);

  synth.triggerAttackRelease("A4", "10n", now + 12);
  synth.triggerAttackRelease("E4", "10n", now + 12.25);
  synth.triggerAttackRelease("A4", "8n", now + 12.5);
  synth.triggerAttackRelease("B4", "10n", now + 13.25);
  synth.triggerAttackRelease("A4", "10n", now + 13.5);
  synth.triggerAttackRelease("G4", "10n", now + 13.75);

  synth.triggerAttackRelease("F#4", "10n", now + 14);
  synth.triggerAttackRelease("E4", "10n", now + 14.25);
  synth.triggerAttackRelease("D4", "10n", now + 14.5);
  synth.triggerAttackRelease("E4", "10n", now + 14.75);
  synth.triggerAttackRelease("F#4", "10n", now + 15);
  synth.triggerAttackRelease("G4", "10n", now + 15.25);
  synth.triggerAttackRelease("A4", "10n", now + 15.5);
  synth.triggerAttackRelease("B4", "10n", now + 15.75);

  synth.triggerAttackRelease("F#4", "10n", now + 16);
  synth.triggerAttackRelease("E4", "10n", now + 16.25);
  synth.triggerAttackRelease("D4", "8n", now + 16.5);
  synth.triggerAttackRelease("E4", "10n", now + 17);
  synth.triggerAttackRelease("F#4", "10n", now + 17.25);
  synth.triggerAttackRelease("G4", "10n", now + 17.5);
  synth.triggerAttackRelease("A4", "10n", now + 17.75);

  synth.triggerAttackRelease("B4", "3n", now + 18);
  synth.triggerAttackRelease("E4", "10n", now + 19);
  synth.triggerAttackRelease("F#4", "10n", now + 19.25);
  synth.triggerAttackRelease("G4", "10n", now + 19.5);
  synth.triggerAttackRelease("A4", "10n", now + 19.75);

  synth.triggerAttackRelease("G4", "10n", now + 20);
  synth.triggerAttackRelease("F#4", "10n", now + 20.25);
  synth.triggerAttackRelease("E4", "8n", now + 20.5);
  synth.triggerAttackRelease("C#4", "10n", now + 21);
  synth.triggerAttackRelease("D4", "10n", now + 21.25);
  synth.triggerAttackRelease("E4", "10n", now + 21.5);
  synth.triggerAttackRelease("G4", "10n", now + 21.75);

  synth.triggerAttackRelease("F#4", "10n", now + 22);
  synth.triggerAttackRelease("G4", "10n", now + 22.25);
  synth.triggerAttackRelease("A4", "10n", now + 22.5);
  synth.triggerAttackRelease("B4", "10n", now + 22.75);
  synth.triggerAttackRelease("A4", "3n", now + 23);

  synth.triggerAttackRelease("D5", "10n", now + 24);
  synth.triggerAttackRelease("C#5", "10n", now + 24.25);
  synth.triggerAttackRelease("B4", "8n", now + 24.5);
  synth.triggerAttackRelease("A4", "10n", now + 25);
  synth.triggerAttackRelease("B4", "10n", now + 25.25);
  synth.triggerAttackRelease("C#5", "10n", now + 25.5);
  synth.triggerAttackRelease("D5", "10n", now + 25.75);

  synth.triggerAttackRelease("E5", "10n", now + 26);
  synth.triggerAttackRelease("D5", "10n", now + 26.25);
  synth.triggerAttackRelease("C#5", "8n", now + 26.5);
  synth.triggerAttackRelease("B4", "10n", now + 27);
  synth.triggerAttackRelease("C#5", "10n", now + 27.25);
  synth.triggerAttackRelease("D5", "10n", now + 27.5);
  synth.triggerAttackRelease("E5", "10n", now + 27.75);

  synth.triggerAttackRelease("C#5", "10n", now + 28);
  synth.triggerAttackRelease("B4", "10n", now + 28.25);
  synth.triggerAttackRelease("A4", "8n", now + 28.5);
  synth.triggerAttackRelease("G4", "10n", now + 29);
  synth.triggerAttackRelease("A4", "10n", now + 29.25);
  synth.triggerAttackRelease("B4", "10n", now + 29.5);
  synth.triggerAttackRelease("G4", "10n", now + 29.75);

  synth.triggerAttackRelease("A4", "8n", now + 30);
  synth.triggerAttackRelease("D4", "10n", now + 31);
  synth.triggerAttackRelease("E4", "10n", now + 31.25);
  synth.triggerAttackRelease("F#4", "10n", now + 31.5);
  synth.triggerAttackRelease("G4", "10n", now + 31.75);
}

export function tetris() {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  //treble clef
  synth.triggerAttackRelease("E5", "10n", now);
  synth.triggerAttackRelease("B4", "5n", now + 0.5);
  synth.triggerAttackRelease("G#4", "5n", now + 0.5);
  synth.triggerAttackRelease("C5", "5n", now + 0.75);
  synth.triggerAttackRelease("D5", "5n", now + 1);
  synth.triggerAttackRelease("E5", "5n", now + 1.25);
  synth.triggerAttackRelease("D5", "5n", now + 1.375);
  synth.triggerAttackRelease("C5", "10n", now + 1.5);
  synth.triggerAttackRelease("A4", "10n", now + 1.5);
  synth.triggerAttackRelease("G#4", "10n", now + 1.75);
  synth.triggerAttackRelease("B4", "10n", now + 1.75);

  synth.triggerAttackRelease("E4", "10n", now + 2);
  synth.triggerAttackRelease("A4", "10n", now + 2);
  synth.triggerAttackRelease("A4", "5n", now + 2.5);
  synth.triggerAttackRelease("C5", "5n", now + 2.75);
  synth.triggerAttackRelease("E5", "10n", now + 3);
  synth.triggerAttackRelease("D5", "5n", now + 3.5);
  synth.triggerAttackRelease("C5", "5n", now + 3.75);

  synth.triggerAttackRelease("G#4", "10n", now + 4);
  synth.triggerAttackRelease("B4", "10n", now + 4);
  synth.triggerAttackRelease("B4", "5n", now + 4.5);
  synth.triggerAttackRelease("G#4", "5n", now + 4.5);
  synth.triggerAttackRelease("A4", "5n", now + 4.75);
  synth.triggerAttackRelease("C5", "5n", now + 4.75);
  synth.triggerAttackRelease("B4", "10n", now + 5);
  synth.triggerAttackRelease("D5", "10n", now + 5);
  synth.triggerAttackRelease("E5", "10n", now + 5.5);

  synth.triggerAttackRelease("C5", "10n", now + 6);
  synth.triggerAttackRelease("A4", "10n", now + 6.5);
  synth.triggerAttackRelease("A4", "10n", now + 7);

  synth.triggerAttackRelease("F4", "10n", now + 8.25);
  synth.triggerAttackRelease("D5", "10n", now + 8.25);
  synth.triggerAttackRelease("A4", "5n", now + 8.75);
  synth.triggerAttackRelease("F5", "5n", now + 8.75);
  synth.triggerAttackRelease("C5", "10n", now + 9);
  synth.triggerAttackRelease("A5", "10n", now + 9);
  synth.triggerAttackRelease("B4", "5n", now + 9.5);
  synth.triggerAttackRelease("G5", "5n", now + 9.5);
  synth.triggerAttackRelease("A4", "5n", now + 9.75);
  synth.triggerAttackRelease("F5", "5n", now + 9.75);

  synth.triggerAttackRelease("E5", "10n", now + 10);
  synth.triggerAttackRelease("G4", "10n", now + 10);
  synth.triggerAttackRelease("C5", "5n", now + 10.75);
  synth.triggerAttackRelease("E4", "5n", now + 10.75);
  synth.triggerAttackRelease("G4", "10n", now + 11);
  synth.triggerAttackRelease("E5", "10n", now + 11);
  synth.triggerAttackRelease("D5", "5n", now + 11.5);
  synth.triggerAttackRelease("F4", "5n", now + 11.5);
  synth.triggerAttackRelease("E4", "5n", now + 11.75);
  synth.triggerAttackRelease("C5", "5n", now + 11.75);

  synth.triggerAttackRelease("G#4", "10n", now + 12);
  synth.triggerAttackRelease("B4", "10n", now + 12);
  synth.triggerAttackRelease("G#4", "5n", now + 12.5);
  synth.triggerAttackRelease("B4", "5n", now + 12.5);
  synth.triggerAttackRelease("A4", "5n", now + 12.75);
  synth.triggerAttackRelease("C5", "5n", now + 12.75);
  synth.triggerAttackRelease("B4", "10n", now + 13);
  synth.triggerAttackRelease("D5", "10n", now + 13);
  synth.triggerAttackRelease("E5", "10n", now + 13.5);

  synth.triggerAttackRelease("C5", "10n", now + 14);
  synth.triggerAttackRelease("A4", "10n", now + 14.5);
  synth.triggerAttackRelease("A4", "10n", now + 15);

  synth.triggerAttackRelease("E5", "10n", now + 16);
  synth.triggerAttackRelease("B4", "5n", now + 16.5);
  synth.triggerAttackRelease("G#4", "5n", now + 16.5);
  synth.triggerAttackRelease("C5", "5n", now + 16.75);
  synth.triggerAttackRelease("D5", "10n", now + 17);
  synth.triggerAttackRelease("C5", "5n", now + 17.5);
  synth.triggerAttackRelease("A4", "5n", now + 17.5);
  synth.triggerAttackRelease("G#4", "5n", now + 17.75);
  synth.triggerAttackRelease("B4", "5n", now + 17.75);

  synth.triggerAttackRelease("E4", "10n", now + 18);
  synth.triggerAttackRelease("A4", "10n", now + 18);
  synth.triggerAttackRelease("A4", "5n", now + 18.5);
  synth.triggerAttackRelease("C5", "5n", now + 18.75);
  synth.triggerAttackRelease("E5", "10n", now + 19);
  synth.triggerAttackRelease("D5", "5n", now + 19.5);
  synth.triggerAttackRelease("C5", "5n", now + 19.75);

  synth.triggerAttackRelease("G#4", "10n", now + 20);
  synth.triggerAttackRelease("B4", "10n", now + 20);
  synth.triggerAttackRelease("B4", "5n", now + 20.5);
  synth.triggerAttackRelease("G#4", "5n", now + 20.5);
  synth.triggerAttackRelease("A4", "5n", now + 20.75);
  synth.triggerAttackRelease("C5", "5n", now + 20.75);
  synth.triggerAttackRelease("B4", "10n", now + 21);
  synth.triggerAttackRelease("D5", "10n", now + 21);
  synth.triggerAttackRelease("E5", "10n", now + 21.5);

  synth.triggerAttackRelease("C5", "10n", now + 22);
  synth.triggerAttackRelease("A4", "10n", now + 22.5);
  synth.triggerAttackRelease("A4", "10n", now + 23);

  synth.triggerAttackRelease("F4", "10n", now + 24.25);
  synth.triggerAttackRelease("D5", "10n", now + 24.25);
  synth.triggerAttackRelease("A4", "5n", now + 24.75);
  synth.triggerAttackRelease("F5", "5n", now + 24.75);
  synth.triggerAttackRelease("C5", "10n", now + 25);
  synth.triggerAttackRelease("A5", "10n", now + 25);
  synth.triggerAttackRelease("B4", "5n", now + 25.5);
  synth.triggerAttackRelease("G5", "5n", now + 25.5);
  synth.triggerAttackRelease("A4", "5n", now + 25.75);
  synth.triggerAttackRelease("F5", "5n", now + 25.75);

  synth.triggerAttackRelease("E5", "10n", now + 26);
  synth.triggerAttackRelease("G4", "10n", now + 26);
  synth.triggerAttackRelease("C5", "5n", now + 26.75);
  synth.triggerAttackRelease("E4", "5n", now + 26.75);
  synth.triggerAttackRelease("G4", "10n", now + 27);
  synth.triggerAttackRelease("E5", "10n", now + 27);
  synth.triggerAttackRelease("D5", "5n", now + 27.5);
  synth.triggerAttackRelease("F4", "5n", now + 27.5);
  synth.triggerAttackRelease("E4", "5n", now + 27.75);
  synth.triggerAttackRelease("C5", "5n", now + 27.75);

  synth.triggerAttackRelease("G#4", "10n", now + 28);
  synth.triggerAttackRelease("B4", "10n", now + 28);
  synth.triggerAttackRelease("G#4", "5n", now + 28.5);
  synth.triggerAttackRelease("B4", "5n", now + 28.5);
  synth.triggerAttackRelease("A4", "5n", now + 28.75);
  synth.triggerAttackRelease("C5", "5n", now + 28.75);
  synth.triggerAttackRelease("B4", "10n", now + 29);
  synth.triggerAttackRelease("D5", "10n", now + 29);
  synth.triggerAttackRelease("E5", "10n", now + 29.5);

  synth.triggerAttackRelease("C5", "10n", now + 30);
  synth.triggerAttackRelease("A4", "10n", now + 30.5);
  synth.triggerAttackRelease("A4", "10n", now + 31);

  synth.triggerAttackRelease("C4", "5n", now + 32);
  synth.triggerAttackRelease("E4", "5n", now + 32);
  synth.triggerAttackRelease("A3", "5n", now + 33);
  synth.triggerAttackRelease("C4", "5n", now + 33);

  synth.triggerAttackRelease("B3", "5n", now + 34);
  synth.triggerAttackRelease("D4", "5n", now + 34);
  synth.triggerAttackRelease("B3", "5n", now + 35);
  synth.triggerAttackRelease("G#3", "5n", now + 35);

  synth.triggerAttackRelease("A3", "5n", now + 36);
  synth.triggerAttackRelease("C4", "5n", now + 36);
  synth.triggerAttackRelease("A3", "5n", now + 37);
  synth.triggerAttackRelease("E3", "5n", now + 37);

  synth.triggerAttackRelease("G#3", "5n", now + 38);
  synth.triggerAttackRelease("E3", "5n", now + 38);
  synth.triggerAttackRelease("B3", "5n", now + 39);
  synth.triggerAttackRelease("G#3", "5n", now + 39);

  synth.triggerAttackRelease("C4", "5n", now + 40);
  synth.triggerAttackRelease("E4", "5n", now + 40);
  synth.triggerAttackRelease("A3", "5n", now + 41);
  synth.triggerAttackRelease("C4", "5n", now + 41);

  synth.triggerAttackRelease("B3", "5n", now + 42);
  synth.triggerAttackRelease("D4", "5n", now + 42);
  synth.triggerAttackRelease("G#3", "5n", now + 43);
  synth.triggerAttackRelease("B3", "5n", now + 43);

  synth.triggerAttackRelease("A3", "10n", now + 44);
  synth.triggerAttackRelease("C4", "10n", now + 44);
  synth.triggerAttackRelease("C4", "10n", now + 44.5);
  synth.triggerAttackRelease("E4", "10n", now + 44.5);
  synth.triggerAttackRelease("E4", "5n", now + 45);
  synth.triggerAttackRelease("A4", "5n", now + 45);

  synth.triggerAttackRelease("B3", "2n", now + 46);
  synth.triggerAttackRelease("E4", "2n", now + 46);
  synth.triggerAttackRelease("G#4", "2n", now + 46);

  //bass clef
  synth.triggerAttackRelease("E2", "16n", now);
  synth.triggerAttackRelease("E3", "16n", now + 0.25);
  synth.triggerAttackRelease("E2", "16n", now + 0.5);
  synth.triggerAttackRelease("E3", "16n", now + 0.75);
  synth.triggerAttackRelease("E2", "16n", now + 1);
  synth.triggerAttackRelease("E3", "16n", now + 1.25);
  synth.triggerAttackRelease("E2", "16n", now + 1.5);
  synth.triggerAttackRelease("E3", "16n", now + 1.75);

  synth.triggerAttackRelease("A1", "16n", now + 2);
  synth.triggerAttackRelease("A2", "16n", now + 2.25);
  synth.triggerAttackRelease("A1", "16n", now + 2.5);
  synth.triggerAttackRelease("A2", "16n", now + 2.75);
  synth.triggerAttackRelease("A1", "16n", now + 3);
  synth.triggerAttackRelease("A2", "16n", now + 3.25);
  synth.triggerAttackRelease("A1", "16n", now + 3.5);
  synth.triggerAttackRelease("A2", "16n", now + 3.75);

  synth.triggerAttackRelease("G#1", "16n", now + 4);
  synth.triggerAttackRelease("G#2", "16n", now + 4.25);
  synth.triggerAttackRelease("G#1", "16n", now + 4.5);
  synth.triggerAttackRelease("G#2", "16n", now + 4.75);
  synth.triggerAttackRelease("G#1", "16n", now + 5);
  synth.triggerAttackRelease("G#2", "16n", now + 5.25);
  synth.triggerAttackRelease("G#1", "16n", now + 5.5);
  synth.triggerAttackRelease("G#2", "16n", now + 5.75);

  synth.triggerAttackRelease("A1", "16n", now + 6);
  synth.triggerAttackRelease("A2", "16n", now + 6.25);
  synth.triggerAttackRelease("A1", "16n", now + 6.5);
  synth.triggerAttackRelease("A2", "16n", now + 6.75);
  synth.triggerAttackRelease("A1", "16n", now + 7);
  synth.triggerAttackRelease("A2", "16n", now + 7.25);
  synth.triggerAttackRelease("B2", "16n", now + 7.5);
  synth.triggerAttackRelease("C3", "16n", now + 7.75);

  synth.triggerAttackRelease("D3", "16n", now + 8);
  synth.triggerAttackRelease("D2", "16n", now + 8);
  synth.triggerAttackRelease("D3", "16n", now + 8.25);
  synth.triggerAttackRelease("D2", "16n", now + 8.5);
  synth.triggerAttackRelease("D3", "16n", now + 8.75);
  synth.triggerAttackRelease("D2", "16n", now + 9);
  synth.triggerAttackRelease("D3", "16n", now + 9.25);
  synth.triggerAttackRelease("D2", "16n", now + 9.5);
  synth.triggerAttackRelease("D3", "16n", now + 9.75);

  synth.triggerAttackRelease("C2", "16n", now + 10);
  synth.triggerAttackRelease("C3", "16n", now + 10.25);
  synth.triggerAttackRelease("C2", "16n", now + 10.5);
  synth.triggerAttackRelease("C3", "16n", now + 10.75);
  synth.triggerAttackRelease("C2", "16n", now + 11);
  synth.triggerAttackRelease("C3", "16n", now + 11.25);
  synth.triggerAttackRelease("C2", "16n", now + 11.5);
  synth.triggerAttackRelease("C3", "16n", now + 11.75);

  synth.triggerAttackRelease("B1", "16n", now + 12);
  synth.triggerAttackRelease("B2", "16n", now + 12.25);
  synth.triggerAttackRelease("B1", "16n", now + 12.5);
  synth.triggerAttackRelease("B2", "16n", now + 12.75);
  synth.triggerAttackRelease("B1", "16n", now + 13);
  synth.triggerAttackRelease("B2", "16n", now + 13.25);
  synth.triggerAttackRelease("B1", "16n", now + 13.5);
  synth.triggerAttackRelease("B2", "16n", now + 13.75);

  synth.triggerAttackRelease("A1", "16n", now + 14);
  synth.triggerAttackRelease("A2", "16n", now + 14.25);
  synth.triggerAttackRelease("A1", "16n", now + 14.5);
  synth.triggerAttackRelease("A2", "16n", now + 14.75);
  synth.triggerAttackRelease("A1", "16n", now + 15);
  synth.triggerAttackRelease("A2", "16n", now + 15.25);
  synth.triggerAttackRelease("A1", "16n", now + 15.5);
  synth.triggerAttackRelease("A2", "16n", now + 15.75);

  synth.triggerAttackRelease("E2", "16n", now + 16);
  synth.triggerAttackRelease("E3", "16n", now + 16.25);
  synth.triggerAttackRelease("E2", "16n", now + 16.5);
  synth.triggerAttackRelease("E3", "16n", now + 16.75);
  synth.triggerAttackRelease("E2", "16n", now + 17);
  synth.triggerAttackRelease("E3", "16n", now + 17.25);
  synth.triggerAttackRelease("E2", "16n", now + 17.5);
  synth.triggerAttackRelease("E3", "16n", now + 17.75);

  synth.triggerAttackRelease("A1", "16n", now + 18);
  synth.triggerAttackRelease("A2", "16n", now + 18.25);
  synth.triggerAttackRelease("A1", "16n", now + 18.5);
  synth.triggerAttackRelease("A2", "16n", now + 18.75);
  synth.triggerAttackRelease("A1", "16n", now + 19);
  synth.triggerAttackRelease("A2", "16n", now + 19.25);
  synth.triggerAttackRelease("A1", "16n", now + 19.5);
  synth.triggerAttackRelease("A2", "16n", now + 19.75);

  synth.triggerAttackRelease("G#1", "16n", now + 20);
  synth.triggerAttackRelease("G#2", "16n", now + 20.25);
  synth.triggerAttackRelease("G#1", "16n", now + 20.5);
  synth.triggerAttackRelease("G#2", "16n", now + 20.75);
  synth.triggerAttackRelease("G#1", "16n", now + 21);
  synth.triggerAttackRelease("G#2", "16n", now + 21.25);
  synth.triggerAttackRelease("G#1", "16n", now + 21.5);
  synth.triggerAttackRelease("G#2", "16n", now + 21.75);

  synth.triggerAttackRelease("A1", "16n", now + 22);
  synth.triggerAttackRelease("A2", "16n", now + 22.25);
  synth.triggerAttackRelease("A1", "16n", now + 22.5);
  synth.triggerAttackRelease("A2", "16n", now + 22.75);
  synth.triggerAttackRelease("A1", "16n", now + 23);
  synth.triggerAttackRelease("A2", "16n", now + 23.25);
  synth.triggerAttackRelease("B2", "16n", now + 23.5);
  synth.triggerAttackRelease("C3", "16n", now + 23.75);

  synth.triggerAttackRelease("D3", "16n", now + 24);
  synth.triggerAttackRelease("D2", "16n", now + 24);
  synth.triggerAttackRelease("D3", "16n", now + 24.25);
  synth.triggerAttackRelease("D2", "16n", now + 24.5);
  synth.triggerAttackRelease("D3", "16n", now + 24.75);
  synth.triggerAttackRelease("D2", "16n", now + 25);
  synth.triggerAttackRelease("D3", "16n", now + 25.25);
  synth.triggerAttackRelease("D2", "16n", now + 25.5);
  synth.triggerAttackRelease("D3", "16n", now + 25.75);

  synth.triggerAttackRelease("C2", "16n", now + 26);
  synth.triggerAttackRelease("C3", "16n", now + 26.25);
  synth.triggerAttackRelease("C2", "16n", now + 26.5);
  synth.triggerAttackRelease("C3", "16n", now + 26.75);
  synth.triggerAttackRelease("C2", "16n", now + 27);
  synth.triggerAttackRelease("C3", "16n", now + 27.25);
  synth.triggerAttackRelease("C2", "16n", now + 27.5);
  synth.triggerAttackRelease("C3", "16n", now + 27.75);

  synth.triggerAttackRelease("E2", "16n", now + 28);
  synth.triggerAttackRelease("E3", "16n", now + 28.25);
  synth.triggerAttackRelease("E2", "16n", now + 28.5);
  synth.triggerAttackRelease("E3", "16n", now + 28.75);
  synth.triggerAttackRelease("E2", "16n", now + 29);
  synth.triggerAttackRelease("E3", "16n", now + 29.25);
  synth.triggerAttackRelease("E2", "16n", now + 29.5);
  synth.triggerAttackRelease("E3", "16n", now + 29.75);

  synth.triggerAttackRelease("A2", "16n", now + 30);
  synth.triggerAttackRelease("A3", "16n", now + 30.25);
  synth.triggerAttackRelease("A2", "16n", now + 30.5);
  synth.triggerAttackRelease("A3", "16n", now + 30.75);
  synth.triggerAttackRelease("A2", "16n", now + 31);
  synth.triggerAttackRelease("A3", "16n", now + 31.25);
  synth.triggerAttackRelease("A2", "16n", now + 31.5);
  synth.triggerAttackRelease("A3", "16n", now + 31.75);

  synth.triggerAttackRelease("A2", "16n", now + 32);
  synth.triggerAttackRelease("E3", "16n", now + 32.25);
  synth.triggerAttackRelease("A2", "16n", now + 32.5);
  synth.triggerAttackRelease("E3", "16n", now + 32.75);
  synth.triggerAttackRelease("A2", "16n", now + 33);
  synth.triggerAttackRelease("E3", "16n", now + 33.25);
  synth.triggerAttackRelease("A2", "16n", now + 33.5);
  synth.triggerAttackRelease("E3", "16n", now + 33.75);

  synth.triggerAttackRelease("G#2", "16n", now + 34);
  synth.triggerAttackRelease("E3", "16n", now + 34.25);
  synth.triggerAttackRelease("G#2", "16n", now + 34.5);
  synth.triggerAttackRelease("E3", "16n", now + 34.75);
  synth.triggerAttackRelease("G#2", "16n", now + 35);
  synth.triggerAttackRelease("E3", "16n", now + 35.25);
  synth.triggerAttackRelease("G#2", "16n", now + 35.5);
  synth.triggerAttackRelease("E3", "16n", now + 35.75);

  synth.triggerAttackRelease("A2", "16n", now + 36);
  synth.triggerAttackRelease("E3", "16n", now + 36.25);
  synth.triggerAttackRelease("A2", "16n", now + 36.5);
  synth.triggerAttackRelease("E3", "16n", now + 36.75);
  synth.triggerAttackRelease("A2", "16n", now + 37);
  synth.triggerAttackRelease("E3", "16n", now + 37.25);
  synth.triggerAttackRelease("A2", "16n", now + 37.5);
  synth.triggerAttackRelease("E3", "16n", now + 37.75);

  synth.triggerAttackRelease("G#2", "16n", now + 38);
  synth.triggerAttackRelease("E3", "16n", now + 38.25);
  synth.triggerAttackRelease("G#2", "16n", now + 38.5);
  synth.triggerAttackRelease("E3", "16n", now + 38.75);
  synth.triggerAttackRelease("G#2", "16n", now + 39);
  synth.triggerAttackRelease("E3", "16n", now + 39.25);
  synth.triggerAttackRelease("G#2", "16n", now + 39.5);
  synth.triggerAttackRelease("E3", "16n", now + 39.75);

  synth.triggerAttackRelease("A2", "16n", now + 40);
  synth.triggerAttackRelease("E3", "16n", now + 40.25);
  synth.triggerAttackRelease("A2", "16n", now + 40.5);
  synth.triggerAttackRelease("E3", "16n", now + 40.75);
  synth.triggerAttackRelease("A2", "16n", now + 41);
  synth.triggerAttackRelease("E3", "16n", now + 41.25);
  synth.triggerAttackRelease("A2", "16n", now + 41.5);
  synth.triggerAttackRelease("E3", "16n", now + 41.75);

  synth.triggerAttackRelease("G#2", "16n", now + 42);
  synth.triggerAttackRelease("E3", "16n", now + 42.25);
  synth.triggerAttackRelease("G#2", "16n", now + 42.5);
  synth.triggerAttackRelease("E3", "16n", now + 42.75);
  synth.triggerAttackRelease("G#2", "16n", now + 43);
  synth.triggerAttackRelease("E3", "16n", now + 43.25);
  synth.triggerAttackRelease("G#2", "16n", now + 43.5);
  synth.triggerAttackRelease("E3", "16n", now + 43.75);

  synth.triggerAttackRelease("A2", "16n", now + 44);
  synth.triggerAttackRelease("E3", "16n", now + 44.25);
  synth.triggerAttackRelease("A2", "16n", now + 44.5);
  synth.triggerAttackRelease("A3", "16n", now + 44.75);
  synth.triggerAttackRelease("A2", "16n", now + 45);
  synth.triggerAttackRelease("A3", "16n", now + 45.25);
  synth.triggerAttackRelease("A2", "16n", now + 45.5);
  synth.triggerAttackRelease("A3", "16n", now + 45.75);

  synth.triggerAttackRelease("E2", "16n", now + 46);
  synth.triggerAttackRelease("E3", "16n", now + 46.25);
  synth.triggerAttackRelease("E2", "16n", now + 46.5);
  synth.triggerAttackRelease("E3", "16n", now + 46.75);
  synth.triggerAttackRelease("E2", "16n", now + 47);
  synth.triggerAttackRelease("E3", "16n", now + 47.25);
  synth.triggerAttackRelease("E2", "16n", now + 47.5);
  synth.triggerAttackRelease("E3", "16n", now + 47.75);
}
