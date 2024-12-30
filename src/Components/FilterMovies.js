
import "../App.css"
const FilterMovies = ({ placeholder,search,setSearch }) => {
    
    return(
        <div className="search-bar">
        <input
        
          type="text"
          className="search-input"
          placeholder="Rechercher un film"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="search-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75L19.5 19.5M10.5 15a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 0 1 0 10.5z"
            />
          </svg>
        </button>
      </div>
    )
}
export default FilterMovies 