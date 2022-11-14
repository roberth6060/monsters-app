import "./scss/search-box-style.css";

const SearchBox = (props) => (
  <input
    className={`search-box ${props.className}`}
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChangehandler}
  ></input>
);

export default SearchBox;
