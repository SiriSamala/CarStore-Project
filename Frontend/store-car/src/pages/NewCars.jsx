import React from 'react'
import NewCarsCards from '../components/NewCarsCards'
import NewCarsCarousel from '../components/NewCarsCarousel'

const NewCars = () => {
  return (
    <>
    <div className='flex flex-col gap-5'>
    <NewCarsCards />

    <NewCarsCarousel />
    </div>
    </>
  )
}

export default NewCars