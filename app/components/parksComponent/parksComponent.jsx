"use client"
import React, { useState } from 'react'
import ParkList from "./parkCardList"
import ParkMap from "./parkmap"

const ParksComponent = () => {

  const [parkSwitch, setParkSwitch] = useState(0)
  const setMap = () => setParkSwitch(0);
  const setList = () => setParkSwitch(1);

let activeElement;
if (parkSwitch === 0) {
  activeElement = <ParkMap/>
} else if (parkSwitch === 1) {
activeElement = <ParkList/>  // Fixed: import parkMap component
}

  return (
    <div className=' w-11/12 mx-auto m-3' >
      <div className='flex flex-row gap-7'>
          <div onClick={setMap} className='text-black text-xl underline underline-offset-1 hover:font-se'>Karta</div>
          <div onClick={setList} className='text-black text-xl underline underline-offset-1 hover:font-se'>Lista</div>
      </div>
      {activeElement}
    </div>

  )
}

export default ParksComponent
