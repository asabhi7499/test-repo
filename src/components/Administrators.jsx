import React, { useEffect } from 'react'
import { useDispatch , useSelector} from "react-redux"

import {getHomePageData} from "../services/operations/homeAPI"
import Card from './Card';


// ADMIN Member functional component which represents admin team data
const Administrators = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePageData())
  },[dispatch])

  const { teamData } = useSelector((state) => state.home);
  console.log("meri team", teamData)
  //console.log("meri team", team.typeOf)
  

  const adminTeam = Object.values(teamData || {}).filter((member) => member.role === 'admin');

  return (
    <div className='min-h-fit'>
          <h1 className='font-poppins text-[28px] ml-[74px] mb-4 mt-4 text-slate-400'>Administrators</h1>
             
            <div className='flex flex-wrap gap-10 h-auto  justify-center items-center'>
                {
                  adminTeam.map((data, index) => {
                    return(
                      <div key={index} className='w-1/5 h-auto border-[2px] border-white '>
                        <Card data={data}/>
                      </div>
                    )    
                  })
                }
            </div>          

    </div>
  )
}

export default Administrators