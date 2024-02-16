import React from 'react'

// Card function component which represents single card
const Card = ({data}) => {
  return (
    <div className='flex flex-row h-16 mx-auto bg-white p-2 rounded-xl drop-shadow-lg
     shadow-slate-200 gap-6 transition-all hover:bg-yellow-100 duration-500 hover:scale-110 hover:cursor-pointer hover:shadow-slate-500' >
    {/* Image */}
        <img src={data.img} alt={data.first_name} className='w-10  h-10 object-cover mb-2 rounded-full' >
            
        </img>

        <div className='flex flex-col '>
            {/* Name of Team Member */}
            <div className='font-bold text-sm '>
                {data.first_name}
            </div>
            {/* Email Id of Team Memebr */}
            <div className='text-gray-600 text-xs'>
                {data.email}
            </div>
        </div>
    
    </div>
  )
}

export default Card