import { Component } from "react";
import "./scss/search-box-style.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangehandler}
      ></input>
    );
  }
}

export default SearchBox;
