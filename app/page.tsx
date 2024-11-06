import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

const homePage = () => {
  return (
    <div className="h-screen">
      <Header/>
      <div className="flex">
      <div className="w-1/2 flex flex-col justify-center items-start m-12">
      <h1 className="font-bold text-[37.84px] tracking-[2.5%] leading-[62.24px] w-[472.97px] h-[162.53px] mt-20 ml-20">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className="text-brown font-medium text-[20px] leading-[30px] w-[500px] h-[144px] ml-20 mt-12 text-justify">An example of intricate workmanship and detail, elegant necklaces, and long and short chains form a part of our desirable collection.</p>
      <button className="bg-earthyBrown text-[25.8px] font-medium rounded-[8.6px] text-white w-[247.67px] h-[42.9px] ml-20">Explore Now</button>
      </div>
      <div className="w-1/2 h-[465px] mt-20">
      <Image src={"/cosmetic-girl.svg"} alt="next-image" width={421.38} height={573.5}/>
      </div>
      </div>
    </div>
   
  )
}
export default homePage
