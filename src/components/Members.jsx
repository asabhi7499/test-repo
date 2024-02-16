import React , { useEffect } from 'react'
import Card from './Card';
import { useDispatch , useSelector} from "react-redux"
import {getHomePageData} from "../services/operations/homeAPI"


// Team Member functional component which represents Members data
const Members = () => {


  const { teamData } = useSelector((state) => state.home);
  console.log("meri team", teamData);
  
  const memberTeam = Object.values(teamData || {}).filter((member) => member.role === 'member');

  return (
    <div className='min-h-fit'>
       <h1 className='font-poppins text-[28px] ml-[74px] mb-6 mt-2 text-slate-400'>Members</h1>
       { 
            <div className='flex flex-wrap gap-10 h-auto  justify-center items-center'>
                {
                  memberTeam.map((data, index) => {
                    return(
                      <div key={index} className='w-1/5 h-auto border-[2px] border-white '>
                        <Card data={data}/>
                      </div>
                    )    
                  })
                }
            </div>          
       }
    </div>
  )
}

export default Members