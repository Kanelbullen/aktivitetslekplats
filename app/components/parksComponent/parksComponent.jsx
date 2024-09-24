"use client"
import React, { useState, useCallback } from 'react'
import ParkList from "./parkCardList"
import ParkMap from "./parkmap"




const ParksComponent = () => {
  const [parkSwitch, setParkSwitch] = useState(0);
  const setMap = useCallback(() => setParkSwitch(0), []);
  const setList = useCallback(() => setParkSwitch(1), []);

  const baseButtonClasses = 'text-black text-xl text-center px-2 py-2 rounded-t-md hover:underline underline-offset-1';

  // @ts-ignore
  const renderButton = (label, isActive, onClick) => (
    <div
      onClick={onClick}
      className={`${baseButtonClasses} ${isActive ? 'bg-slate-400' : 'bg-slate-300'}`}>
      {label}
    </div>
  );

  return (
    <div className='w-11/12 mx-auto p-3 flex flex-col'>
      <div className='grid grid-cols-2 bg-slate-300 justify-between rounded-md gap-1'>
        {renderButton('Karta', parkSwitch === 0, setMap)}
        {renderButton('Lista', parkSwitch === 1, setList)}
      </div>
      <div className='p-2 bg-slate-400 rounded-b-lg'>
        {parkSwitch === 0 ? <ParkMap /> : <ParkList />}
      </div> 
    </div>
  )
}

export default ParksComponent
