import React, { useEffect, useState } from 'react'
import BMWCarsCards from '../components/BMWCarsCards'
import { Loader2, TriangleAlert } from 'lucide-react'
import { getBMWCar } from '../api/api'

const BMWCars = () => {
  const [bmwcars, setbmwCars] = useState()
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await getBMWCar()
      if (res.status === 200) {
        setbmwCars(res.data)
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
  if (!bmwcars || bmwcars.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No BMW Cars Available !
          </p>
        </div>
      </>
    )
  }


  return (
    <>
      
      <div className='w-screen h-full flex justify-start items-start flex-col flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
        {bmwcars.map((bmwcar, index) => (
          <BMWCarsCards img={bmwcar.img} name={bmwcar.name} price={bmwcar.price}  key={bmwcar._id} description={bmwcar.description} />
        ))
        }
      </div>
    </>
  )
}

export default BMWCars