import React, { useEffect, useState } from 'react'
import VolkswagenCarsCards from '../components/VolkswagenCarsCards'
import { Loader2, TriangleAlert } from 'lucide-react'
import { getVolkswagenCar } from '../api/api'

const VolkswagenCars = () => {
  const [volkswagencars, setVolkswagenCars] = useState()
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await getVolkswagenCar()
      if (res.status === 200) {
        setVolkswagenCars(res.data)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-black h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!volkswagencars || volkswagencars.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Volkswagen Cars Available !
          </p>
        </div>
      </>
    )
  }


  return (
    <>
      
      <div className='w-screen h-full flex justify-start items-start flex-col flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
        {volkswagencars.map((volkswagencar, index) => (
          <VolkswagenCarsCards img={volkswagencar.img} name={volkswagencar.name} price={volkswagencar.price}  key={volkswagencar._id} description={volkswagencar.description} />
        ))
        }
      </div>
    </>
  )
}

export default VolkswagenCars