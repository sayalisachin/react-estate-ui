import { useState } from 'react'
import './searchBar.scss'

function SearchBar(){
    const[query, setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,

    })
    const switchType=()=>{

    }
    return(
        <div className="searchBar">
            <div className='type'>
                <button onClick={()=>switchType}>Buy</button>
                <button>Rent</button>
            </div>
            <form>
                <input type ="text" name="location" placeholder='City Location'/>
                <input type ="number" name="minPrice" min={0} max={1000000} placeholder='Min Price'/>
                <input type ="number" name="maxPrice" min={0} max={1000000} placeholder='Max Price'/>
                <button><img src="/search.png"/></button>
            </form>
        </div>
    )
}

export default SearchBar