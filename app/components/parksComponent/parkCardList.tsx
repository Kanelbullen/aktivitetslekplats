
import React from 'react'
import ParkCard from './parkCard'
import ParkImage from '../../assets/playgroundHero.jpg'

const ParkCardList = () => {

  return (
    <div className='my-5 flex flex-col gap-2'>
      {/* I varje ParkCard kan du föra in värderna från databasen. Skulle kanske behöva en For loop föra alla ID:s i databasen och loopa genom alla id:s med korressponderande info */}
      <ParkCard id={1} name='Park 1' distance={12} img={ParkImage} description='Very nice park'/>
      <ParkCard id={2} name='Park 2' distance={12} img={ParkImage} description='Very nice park'/>
      <ParkCard id={3} name='Park 3' distance={12} img={ParkImage} description='Very nice park'/>
      <ParkCard id={4} name='Park 4' distance={12} img={ParkImage} description='Very nice park'/>
    </div>
  )
}

export default ParkCardList