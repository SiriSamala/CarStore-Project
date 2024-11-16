import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BadgeCheck } from 'lucide-react'
const UsedCarsCarousel = () => {
  return (
    <>
      <div className="flex gap-7 flex-col">


        <div className="w-1/3 h-[20vh] absolute bottom-24 left-10 z-50 flex justify-center items-center rounded-md bg-black/20 hover:bg-white/30 ">
          <div className="h-[80%] w-[90%] flex flex-col justify-start items-start gap-2 ">
            <h1 className='w-full text-left text-xl  font-bold text-white hover:text-black'>2018 Mercedes-Benz GLA Class</h1>
            <h1 className='w-full text-left text-xl  font-bold text-white hover:text-black'>₹23,90,000</h1>
            <h1 className='w-full text-left text-xl  font-bold text-white hover:bg-white/30 hover:text-black rounded-sm '>Buy Now</h1>


          </div>
        </div>

        <Carousel className="w-full h-[70vh] rounded-md" autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img className="h-[85vh] object-cover" src="https://images10.gaadi.com/usedcar_image/4223807/original/processed_62ae47840c806d47a4b2f9a993354f8a.jpg?imwidth=640" />

          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://images10.gaadi.com/usedcar_image/4223807/original/processed_283928c4e35c88a70910a8ce6d7e094b.jpg?imwidth=640" />

          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://images10.gaadi.com/usedcar_image/4223807/original/processed_63a2eb44e04598fca9488a84b5fea9e9.jpg?imwidth=640" />

          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://images10.gaadi.com/usedcar_image/4223807/original/processed_c77c59d265cda500bf1a316176529439.jpg?imwidth=640" />

          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://images10.gaadi.com/usedcar_image/4223807/original/efa9120319c2dd9b48d063e63f6dff56.jpg?imwidth=640" />

          </div>
          <div>
            <img className="h-[85vh] object-cover" src="https://images10.gaadi.com/usedcar_image/4223807/original/25fdd207f5d67fa23549301d75ca18bd.jpg?imwidth=640" />

          </div>
        </Carousel>

      /* From Uiverse.io by themrsami */
        <div className="bg-sky-50 h-[15vh]  text-black max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl transition-all duration-500 ease-in-out">
          <div className="md:flex flex flex-row">
            <div className="p-8 flex flex-row ">
              <div className=' h-[10vh] justify-start items-center'>
                <BadgeCheck className='text-blue-500 h-10 w-14 ' />
              </div>
              <div className="mt-2">
                <p className=" h-10 text-black">Trusted by hunderds of sellers and buyers .</p>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="w-full flex flex-col gap-3">
          <p className=" px-8 text-3xl font-bold text-black"> Used Cars</p>

          <div className="w-full px-8 h-75 flex flex-col justify-center gap-2 bg-white rounded-lg shadow-black shadow-sm p-2">
            <div className="flex gap-2">
              <div className="w-2/3 h-[90%]">
              <img className="bg-purple-200 w-full h-45 shrink-0 rounded-lg" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Jeep/Grand-Cherokee/10945/1690624307755/front-left-side-47.jpg?tr=w-664" />
              </div>
              <div className="flex flex-col text-black">
                <span className="font-bold italic">Card title</span>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
                  dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
                  tellus, congue vel lectus aliquam, dignissim porttitor velit.
                </p>
              </div>
            </div>
            <button className="hover:bg-sky-50 bg-neutral-50 font-bold text-blue-400 rounded p-2">
              Order Now
            </button>
          </div>

          <div className="w-full h-75 flex flex-col justify-center gap-2 bg-indigo-500 rounded-lg shadow p-2">
            <div className="flex gap-2">
              <img className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg" src="" />
              <div className="flex flex-col text-white">
                <span className="font-bold italic">Card title</span>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
                  dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
                  tellus, congue vel lectus aliquam, dignissim porttitor velit.
                </p>
              </div>
            </div>
            <button className="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2">
              See more
            </button>
          </div>

        </div> */}



      </div>
    </>
  )
}

export default UsedCarsCarousel