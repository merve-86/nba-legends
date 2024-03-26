import React from 'react'
import nbaLogo from "../assets/nba-logo.png";

const Header = ({searchPlayer, setSearchPlayer}) => {

  const handleChange = (e) => {
    setSearchPlayer(e.target.value);    
  }
  

  return (
    <div className='header'>
        <img src={nbaLogo} alt="" />
        <div className='search-area'>
            <h2>NBA Legends</h2>
            <input
              type="search"
              name="search"
              id="search"
              placeholder='Search player...'
              value={searchPlayer}
              onChange={handleChange}
              />
        </div>
      
    </div>
  )
}

export default Header 

