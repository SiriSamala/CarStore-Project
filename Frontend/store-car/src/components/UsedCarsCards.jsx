import { IndianRupee } from "lucide-react"

const UsedCarsCards = ({ name, img, price }) => {
    return (
        <>
            <div className="w-full flex flex-col gap-3">
                <p className=" px-8 text-3xl font-bold text-black"> Used Cars</p>

                <div className="w-full px-8 h-55 flex flex-col justify-center gap-2 bg-white rounded-lg shadow-black shadow-sm p-2">
                    <div className="flex gap-2">
                        <div className="w-1/2 h-[40%]">
                            <img className="bg-purple-200 w-full h-45 shrink-0 rounded-lg" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Jeep/Grand-Cherokee/10945/1690624307755/front-left-side-47.jpg?tr=w-664" />
                        </div>
                        <div className=" w-1/2 h-[40%] flex flex-col gap-3 text-black">
                            <span className="font-bold text-3xl">Benz abd number1</span>
                            <p className=" font-sans  leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
                                <IndianRupee className='h-5 w-6' /> 25,00,000
                            </p>
                            <button className=" w-[50%] bg-sky-200 font-bold text-blue-500 hover:bg-blue-500 hover:text-white rounded-sm shadow-sm p-2">
                                Order Now
                            </button>
                        </div>

                    </div>
                </div>

                {/* <div className="w-full h-75 flex flex-col justify-center gap-2 bg-indigo-500 rounded-lg shadow p-2">
                    <div className="flex gap-2">
                        <img src={img} alt={name} className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg" />
                        <div className="flex flex-col text-white">
                            <span className="font-bold italic">{name}</span>
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
                </div> */}

                <div className="w-full px-8 h-55 flex flex-col justify-center gap-2 bg-white rounded-lg shadow-black shadow-sm p-2">
                    <div className="flex gap-2">
                        <div className="w-1/2 h-[40%]">
                            <img src={img} alt={name} className="bg-purple-200 w-full h-45 shrink-0 rounded-lg" />
                        </div>
                        <div className=" w-1/2 h-[40%] flex flex-col gap-3 text-black">
                            <span className="font-bold text-3xl">{name}</span>
                            <p className=" font-sans  leading-relaxed text-inherit antialiased font-bold flex flex-row text-xl items-center">
                                <IndianRupee className='h-5 w-6' /> {price}
                            </p>
                            <button className="hover:bg-sky-50 bg-neutral-50 font-bold text-blue-400 rounded p-2">
                                Order Now
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default UsedCarsCards