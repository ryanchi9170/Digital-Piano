import * as Tone from "tone";

export function pokeCenter() {
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
