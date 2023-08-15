

import React from 'react'
import Image from 'next/image'
import { truncate } from '@/helpers'

const CardLarge = ({ value }) => {

    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 w-full">
            <div className='h-72 md:h-96 w-full md:w-1/3 relative'>
                <Image
                    loader={myLoader}
                    src={value?.imageSecondary || value?.imageMain}
                    alt="My Image"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3">
                <h5 class="mb-2 text-3xl font-bold tracking-tight text-stone-800 font-playfair">{value?.title}</h5>
                <p class="mb-3 font-normal text-gray-700">{truncate(value?.description)}</p>
            </div>
        </a>

    )
}

export default CardLarge