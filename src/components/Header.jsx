import e from 'cors';
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

const Header = () => {


  const [search, setSearch] = useState(true)
  const [searchText, setSearchText] = useState("")

  const searchTeamMember = (event) => {
      setSearchText(event.target.value)
  }

  return (
    <div className=' h-20 bg-blue-400 flex  items-center justify-between p-5 pl-16 pr-10 relative text-black'>
        <div className=' text-white text-3xl font-poppins' >
            Team
        </div>
        {
          search 
          
          ? (
            <div onClick={() => setSearch(false)} className='w-[256px] h-[34px] rounded-full bg-white flex flex-row gap-2 pl-3 pt-2'>
                <FiSearch className=''/>
                <p className='text-xs font-bold text-slate-400'>Search</p>
            </div>
          ) 
          
          : (
              <input type="text"
              title='search' 
             
              className='w-[256px] h-[34px] rounded-full bg-white flex flex-row gap-2 pl-5 pb-1 text-blue-500  '
              value={searchText}
              onChange={searchTeamMember}
              placeholder='search here'
              >
              
              </input>
            )
        }
        
    </div>
  )
}

export default Header