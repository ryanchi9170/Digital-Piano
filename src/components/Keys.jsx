import React from "react";
import * as Tone from "tone";

class Keys extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(this.props.note, "8n");
  }
  // clickHandler() {
  //   const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  //   const now = Tone.now();
  //   synth.triggerAttackRelease("C4", "8n", now);
  //   synth.triggerAttackRelease("D#4", "8n", now);
  //   synth.triggerAttackRelease("G4", "8n", now);
  // }

  render() {
    return (
      <div onClick={this.clickHandler}>
        {this.props.note.length > 2 ? (
          <div className="key flat"></div>
        ) : (
          <div className="key">
            <div className="key-text">{this.props.note.slice(0, 1)}</div>
          </div>
        )}
      </div>
    );
    // return (
    //   <div>
    //     {this.props.note.length > 2 ? (
    //       <input className="key flat"></input>
    //     ) : (
    //       <input className="key">
    //         <div className="key-text" onKeyDown={this.handleKeyPress}>
    //           {this.props.note.slice(0, 1)}
    //         </div>
    //       </input>
    //     )}
    //   </div>
    // );
  }
}

export default Keys;

//   <div className="key">
//     <div className="key-text">{this.props.note}</div>
//   </div>
// );
