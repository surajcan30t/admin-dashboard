import React, { useState } from 'react'

function RangeSelect({onRadiusChange}) {
    const [radius,setRadius]=useState(2500);
  return (
    <div className='mt-5 px-2'>
        <h2
        className='font-bold '
        >Select Radius (In Kilometer)</h2>
        <input type='range'
        className='w-full h-2 bg-gray-200
        rounded-lg appearance-none
        cursor-pointer '
        min="500"
        max="50000"
        step="5000"
        onChange={(e)=>{setRadius(e.target.value);onRadiusChange(e.target.value)}}
        defaultValue={radius}
        />
        <label className='text-gray-500
        text-[15px]'>{radius} in Kilometer</label>
    </div>
  )
}

export default RangeSelect