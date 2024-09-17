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
    <div>
      <div className='flex flex-row gap-7 mx-6'>
          <div onClick={setMap} className='text-xl underline underline-offset-1'>Karta</div>
          <div onClick={setList} className='text-xl underline underline-offset-1'>Lista</div>
      </div>
      {activeElement}
    </div>

  )
}

export default ParksComponent
