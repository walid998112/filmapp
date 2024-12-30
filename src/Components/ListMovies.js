
import CardMovies from "./CardMovies"
import FilterMovies from "./FilterMovies"


const ListMovies=({movies,search,njoum,setNjoum,setSearch,setMovies})=>{
    var x =   movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= njoum)
    return(
        <div>

                  <div className="centerDiv">
                        {
                        x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovies el={el}/>)
                            
                        }
                  </div>
        </div>
    )
}
export default ListMovies