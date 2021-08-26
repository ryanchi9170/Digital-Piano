import React from "react";
import * as Tone from "tone";
import buttonPiano from "../buttonPiano.js";

class Keys extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener("keydown", buttonPiano);

    this.state = {
      synth: null,
      keyboardButton: [
        "Z",
        "S",
        "X",
        "D",
        "C",
        "V",
        "G",
        "B",
        "H",
        "N",
        "J",
        "M",
        "Q",
        "2",
        "W",
        "3",
        "E",
        "R",
        "5",
        "T",
        "6",
        "Y",
        "7",
        "U",
        "I",
      ],
    };

    this.clickNote = this.clickNote.bind(this);
  }

  clickNote(event) {
    if (event === "down") {
      const now = Tone.now();
      const synth = new Tone.Synth().toDestination();
      this.setState({
        synth: synth,
      });
      synth.triggerAttack(this.props.note, now);
    } else if (event === "up") {
      this.state.synth.triggerRelease(this.now);
    }
  }

  render() {
    let keyClass = "key";
    if (this.props.note.length > 2) {
      keyClass += " flat";
    }
    // keyClass += ` ${this.props.note}`;
    return (
      <div
        onMouseDown={() => {
          keyClass += " pressed";
          this.clickNote("down");
        }}
        onMouseUp={() => {
          keyClass = keyClass.substring(0, keyClass.length - 8);
          this.clickNote("up");
        }}
      >
        {this.props.note.length > 2 ? (
          <div className={keyClass}>
            <div className="key-text-flat">
              {this.state.keyboardButton[this.props.index]}
            </div>
          </div>
        ) : (
          <div className={keyClass}>
            <div className="key-text">
              {this.state.keyboardButton[this.props.index]}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Keys;
