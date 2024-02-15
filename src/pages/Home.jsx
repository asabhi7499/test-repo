import React from 'react'
import Header from "../components/Header";
import Administrators from '../components/Administrators';
import Members from '../components/Members';
import { CiCirclePlus } from "react-icons/ci";

const Home = () => {

  const style = { fill: 'rgba(96 ,165 ,250 ,1)', fontSize: "1.5em" }

  return (
    <div className='flex flex-col gap-4 font--italic relative z-0'>

        <Header/>

        <Administrators/>

        <div
        className='w-[90%] h-[1px] bg-slate-200 mx-auto mt-5 '

        />

        <Members/>

        <CiCirclePlus className='fixed z-10 w-16 h-16 bottom-6 right-12 ' style={style}/>

      

    </div>
  )
}

export default Home