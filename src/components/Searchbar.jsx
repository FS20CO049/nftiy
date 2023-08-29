import React from 'react'
import './sidebar.css'
import {BiSearch} from 'react-icons/bi'
const Searchbar = () => {
  return (
    <div className='search'>
      
      <input type="text" className="rounded-search" placeholder="Search..."  >
        
        </input>
        {/* <button><BiSearch style={{background:"none"}}/></button> */}
        
      <button className="btn btn-primary connect-btn">Connect</button>
    
    </div>
  )
}

export default Searchbar
