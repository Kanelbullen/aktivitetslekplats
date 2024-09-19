
import React from 'react'
import ParkCard from './parkCard'
import ParkImage from '../../assets/playgroundHero.jpg'

const ParkCardList = () => {

  return (
    <div className='my-5 flex flex-col gap-2'>
      <ParkCard id={1} name='Park 1' distance={12} img={ParkImage} description='Very nice park'/>
      <ParkCard id={2} name='Park 2' distance={12} img={ParkImage} description='Very nice park'/>
      <ParkCard id={3} name='Park 3' distance={12} img={ParkImage} description='Very nice park'/>
      <ParkCard id={4} name='Park 4' distance={12} img={ParkImage} description='Very nice park'/>
    </div>
  )
}

export default ParkCardList