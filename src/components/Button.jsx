import React from 'react'

const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button 
      class={`flex gap-2 justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none  rounded-full 
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor} `: 'bg-coral-red border-coral-red text-white '}
      ${fullWidth && 'w-full'}
      `}
    >
        {label}
        {
          iconURL && <img src={iconURL} alt="arrowRight" class='ml-2 rounded-full w-5 h-5'/>
        }
        
    </button>
  )
}

export default Button