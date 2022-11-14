import "./scss/search-box-style.css";
import {ChangeEvent} from "react"

type SearcBoxProps =  {
  className: string;
  placeholder?: string;
  onChangehandler:(event: ChangeEvent <HTMLInputElement>) => void;
}


const SearchBox = ({className,placeholder, onChangehandler }: SearcBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangehandler}
  ></input>
);

export default SearchBox;
