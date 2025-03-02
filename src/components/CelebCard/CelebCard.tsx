import React from 'react'
import { CelebrityCardType } from '@/types/types'
import Image from 'next/image'

const CelebCard = (data: CelebrityCardType) => {
  return (
    <div className='flex flex-col justify-center items-center w-full mb-10'>
      <div className='w-3/5 sm:w-2/5 md:w-1/3 lg:w-1/4 aspect-square overflow-hidden rounded-full'>
        <Image 
          src={data.imageUrl} 
          alt={data.name} 
          width={200} 
          height={200} 
          className='w-full h-full object-cover'
        />
      </div>
      <h3 className='text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-black mt-3'>
        {data.name}
      </h3>
      <h4 className='text-[13px] sm:text-[14px] md:text-[15px] font-normal text-gray-500'>
        {data.role}
      </h4>
    </div>
  )
}

export default CelebCard
