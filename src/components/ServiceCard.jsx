import React from 'react'
import { truckFast } from '../assets/icons'
const ServiceCard = ({ imgURL,label,subtext }) => {
  return (
    <div class='w-full shadow-3xl sm:w-[350px] rounded-[20px] px-10 py-16 sm:min-w-[350px] flex-1'>
        <div class='flex justify-center items-center bg-coral-red rounded-full w-11 h-11'>
            <img src={imgURL} alt={label} height={24} width={24}/>
        </div>
        <h3 class='font-bold text-3xl leading-normal mt-5 font-palanquin'>{label}</h3>
        <p class='text-lg font-montserrat mt-3 leading-normal text-slate-gray break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard