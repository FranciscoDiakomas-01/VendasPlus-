import './index.css'
import { FaSearch } from "react-icons/fa";
export default function SearchBar({placeholder}) {
    return (
    <form id='searchBar'>
        <input placeholder={placeholder}/>
        <FaSearch/>
    </form>
    
    );
}