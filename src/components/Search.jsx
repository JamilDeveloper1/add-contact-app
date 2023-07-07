import React from 'react'
import  { BsSearch} from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'

const Search = ({isOpen,setIsOpen,setSearchTerm}) => {

  function openModal() {
    setIsOpen(true)
  }



    return (
    <div className='search z-30' >
        
      
      <label htmlFor="inp" >
      <BsSearch style={{color:"#fff"}} />
        <input type="text" 
        autoComplete='off'
        placeholder='Search Contacts...'
        onChange={(e)=>setSearchTerm(e.target.value)}
        id='inp'/>
      </label>
      <AiFillPlusCircle  
      onClick={openModal}
      style={{fontSize:'40px'}}
      className='text-white cursor-pointer'
      />
    </div>
  )
}

export default Search
