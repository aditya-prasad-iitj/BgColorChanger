import React from 'react'

function Button(props) {
  return (
    <button className='px-4 py-2 bg-indigo-500 text-white rounded-md
               hover:bg-indigo-600 hover:cursor-pointer
               active:scale-95 focus:outline-none
               disabled:opacity-50 disabled:cursor-not-allowed
               transition' onClick={()=>{
                props.setBgfn(props.name)
               }}>{props.name}</button>   
  )
}

export default Button
