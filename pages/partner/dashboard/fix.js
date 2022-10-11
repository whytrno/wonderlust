import React from 'react'

// const { useState, useCallback } = React.useState();

const SearchComponent = ({ citySearch, updateCitySearch, searchCityClick }) => (
  <div> 
    <input
      value={citySearch}
      onChange={e => updateCitySearch(e.target.value)} />
    
    <button onClick={searchCityClick}>Search</button>
  </div>
);

export default function MyInput () {
  const [citySearch, updateCitySearch] = React.useState('');
  console.log(citySearch)

  const searchCityClick = () => alert(citySearch);

  return(
    <div>
      <SearchComponent 
        citySearch={citySearch} 
        updateCitySearch={updateCitySearch}
        searchCityClick={searchCityClick} />
    </div>
  );
};
