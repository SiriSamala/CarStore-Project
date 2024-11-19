import { IndianRupee } from 'lucide-react'
import React from 'react'

const BenzCarsCards = ({ name, img, price, description }) => {
  return (
    <>
    <div className="w-full px-8 h-55 flex flex-col justify-center gap-2 bg-white rounded-lg shadow-black shadow-sm p-2">
                <div className="flex gap-2">
                    <div className=" relative mx-4 -mt-6 overflow-hidden rounded-x bg-clip-border shadow-lg text-white w-1/2 h-[40%]">
                        <img src={img} alt={name} className="bg-purple-200 w-full h-45 shrink-0 rounded-lg" />
                    </div>
                    <div className=" w-1/2 h-[40%] flex flex-col gap-3 text-black">
                        <h3 className="font-bold text-3xl">{name}</h3>
                        <p className=" font-sans  leading-relaxed text-inherit antialiased flex flex-row text-lg items-center">
                            <IndianRupee className='h-5 w-6' /> {price}
                        </p>
                        <div className=" pt-0 w-full">
                            <button type="button" className=" w-full hover:bg-black bg-gray-700 font-bold text-white rounded p-2">
                                Order Now
                            </button>
                        </div>
                        <div className="w-[full] ">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default BenzCarsCards