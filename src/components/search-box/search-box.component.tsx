import "./scss/search-box-style.css";


const SearchBox = ({className,placeholder, onChangehandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangehandler}
  ></input>
);

export default SearchBox;
