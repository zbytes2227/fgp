import React from 'react'

const SpecialProfileBox = (props) => {
  return (
    <div class="flex items-center p-1 rounded-md border justify-center ps-3 m-1">
    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.img}/>
    <div class="flex-grow">
      <h2 class="text-white title-font font-medium">{props.name}</h2>
      <p class="text-white">{props.post}</p>
    </div>
  </div>
  )
}

export default SpecialProfileBox