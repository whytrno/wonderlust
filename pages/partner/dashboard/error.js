
import React from 'react'

export default function MyInput(){
	const [citySearch, updateCitySearch] = React.useState();

	function searchCityClick(){
	   alert(citySearch);
	}
	
	const SearchComponent = ()=> (
	    <div> 
	        <input value={citySearch} onChange={(e) => updateCitySearch(e.target.value)}/>
	        <button variant="contained" color="primary" onClick={searchCityClick}>
	            Search
	        </button>
	    </div>

	);

	return(
	    <div>
	        <div>
	            <SearchComponent />
	        </div>
	    </div>
	)
}