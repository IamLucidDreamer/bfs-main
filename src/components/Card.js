import React from 'react'
import Image from 'next/image'
import { truncate } from '@/helpers'
import Link from 'next/link'

const Card = ({ value }) => {

    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <div className="w-full lg:w-5/12 bg-white hover:shadow-lg">
            <div className='h-72 md:h-96 relative'>
                <Image
                    loader={myLoader}
                    src={value?.imageSecondary}
                    alt="My Image"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="p-5">
                <div className='flex items-center justify-between m-2 mt-0'>
                    <h1 className='text-secondary text-lg'>By: {value?.userId?.name}</h1>
                    <Link href="/category/[categoryTitle]" as={`/category/${value.tag}`}>
                        <h1 className='border-2 border-secondary py-1.5 px-2 text-secondary'>{value?.tag}</h1>
                    </Link>
                </div>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-800">{value?.title}</h5>
                </a>
                <p className="mb-3 font-normal text-stone-700">{truncate(value?.description)}</p>
            </div>
        </div>
    )
}

export default Card