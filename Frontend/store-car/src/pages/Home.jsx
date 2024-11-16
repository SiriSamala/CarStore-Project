
import { Tag } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <>

<div className='h-full w-full flex flex-col gap-6 shadow-md'>
      <div className=''>
          <img className="h-[80vh] w-full object-cover" src="https://img.freepik.com/premium-photo/ai-generated-illustration-porsche-911-car-driving-along-winding-mountain-road-dusk_665346-117268.jpg?w=996" />
      </div>



  <div className='w-full h-[20vh] flex flex-row  shadow-md'>

    <div className='w-[25%] h-full flex justify-center items-center shadow-md'>

        <div className=''>
          {/* <Award className='w-12 h-12 '/> */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DBb5Rr0aq5Wfk8E8it3TRKkvdbLJB7brXA&s" alt=""className='h-19 w-20' />
        </div>
        <div className="">
          <div>
              India's #1
          </div>
          <div>Largest Auto Portal</div>
        </div>
    </div>

      <div className='w-[25%] h-full flex flex-row justify-center items-center shadow-md'>
      <div className=''>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74YNegq2kcYjfJnITTbZt3nZg2TJ0Jck-EQ&s" alt=""className='h-20 w-20' />
                </div>
                <div className="">
                    <div>
                      Car Sold
                    </div>
                    <div> Every 4 minute</div>
                </div>
      </div>

      <div className='w-[25%] h-full flex justify-center items-center shadow-md'>
      <div className=''>
      <Tag className='w-12 h-12 '/>
                </div>
                <div className="">
                    <div>
                      Offers
                    </div>
                    <div> Stay updated pay less </div>
                </div>
      </div>

      <div className='w-[25%] h-full flex justify-center items-center shadow-md'>
      <div className=''>
            <img src="data:image/png;base64,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" alt=""className='w-20 h-20' />
                </div>
                <div className="">
                  
                    <div >
                      Compare
                    </div>
                    <div > Decode the right car </div>
                </div>
      </div>




  </div>

</div>

    </>
  )
}

export default Home