import { Component } from "react";

//css files will still overlap into other outside components. this is just a designation for us the developer
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type='search'
        placeholder='search monsters'
        // filter down list of monsters
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
