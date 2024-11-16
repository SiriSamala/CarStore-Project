import React from 'react'
import UsedCarsCarousel from '../components/UsedCarsCarousel'
import UsedCarsCards from '../components/UsedCarsCards'

const UsedCars = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
                <UsedCarsCarousel />
                <UsedCarsCards
                  // img={UsedCars.img} name={UsedCars.name} price={UsedCars.price} key={UsedCars._id}
                />
    </div>
  )
}

export default UsedCars