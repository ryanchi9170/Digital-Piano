/* eslint-disable no-useless-constructor */
import React from "react";
import Keys from "./Keys.jsx";
import { notes } from "../Notes.js";

class Piano extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="piano">
        {notes.map((note, index) => {
          return <Keys note={note} key={index} />;
        })}
      </div>
    );
  }
}

export default Piano;
