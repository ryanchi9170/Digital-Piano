import React from "react";
import Select from "react-select";
import options from "../SongChoices.js";
import { pokeCenter } from "../PresetSongs.js";

class TunePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songChoice: null,
      selectedValue: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clickHandler() {
    if (this.state.songChoice === "pokemon") {
      pokeCenter();
    }
  }

  handleChange(event) {
    this.setState({
      songChoice: event.value,
    });
  }

  render() {
    return (
      <div className="song">
        <Select
          className="selector"
          options={options}
          value={options.find((obj) => obj.value === this.state.songChoice)}
          onChange={this.handleChange}
        />
        <span className="button">
          <button onClick={this.clickHandler}>Play</button>
        </span>
      </div>
    );
  }
}

export default TunePicker;
