import React, { useEffect, useState } from 'react'
import HondaCarsCards from '../components/HondaCarsCards'
import { Loader2, TriangleAlert } from 'lucide-react'
import { getHondaCar } from '../api/api'

const HondaCars = () => {
  const [hondacars, setHondaCars] = useState()
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await getHondaCar()
      if (res.status === 200) {
        setHondaCars(res.data)
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
  if (!hondacars || hondacars.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Honda Cars Available !
          </p>
        </div>
      </>
    )
  }


  return (
    <>
      
      <div className='w-screen h-full flex justify-start items-start flex-col flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
        {hondacars.map((hondacar, index) => (
          <HondaCarsCards img={hondacar.img} name={hondacar.name} price={hondacar.price}  key={hondacar._id} description={hondacar.description} />
        ))
        }
      </div>
    </>
  )
}

export default HondaCars