import Head from "next/head"
import Header from "../components/Header"

import Corousal from "nuka-carousel"
import Card from "../components/Card"
import Footer from '../components/Footer';

import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import axios from "@/helpers/httpHelper";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [blogs, setBlogs] = useState([])

  console.log(blogs, "hii");

  useEffect(() => {
    axios.get("/blog/get-all?page=1&limit=4")
      .then(res => { setBlogs(res?.data?.data?.blogs) })
      .catch(err => console.log("Error :", err))
  }, [])

  return (
    <>
      <Head>
        <title>Built From Scratch - Home</title>
      </Head>
      <Header />
      <div className='max-w-screen-2xl mx-auto'>
        <Corousal
          defaultControlsConfig={{ nextButtonText: ">", prevButtonText: "<" }}
          autoplay={true}
          autoplayInterval={6000}
          wrapAround={true}
          dragging={true}
          cellAlign="center"
          slidesToShow={1}
          className='relative'>
          <img src='https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__480.jpg' className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-red-500 mx-auto w-full object-cover' />
          <div className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-green-500 mx-auto'></div>
          <img src='https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__480.jpg' className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-red-500 mx-auto w-full object-cover' />
          <div className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-yellow-500 mx-auto'></div>
          <img src='https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__480.jpg' className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-red-500 mx-auto w-full object-cover' />
          <div className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-purple-500 mx-auto'></div>
          <img src='https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__480.jpg' className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-red-500 mx-auto w-full object-cover' />
          <div className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-orange-500 mx-auto'></div>
          <img src='https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__480.jpg' className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-red-500 mx-auto w-full object-cover' />
          <div className='min-h-[50vh] lg:min-h-[80vh] max-h-[50vh] lg:max-h-[80vh] bg-blue-500 mx-auto'></div>
        </Corousal >
        <h1 className='text-5xl font-semibold py-12 text-center font-playfair'>Recent Posts</h1>
        <div className='max-w-screen-2xl px-4 lg:px-10 flex flex-wrap gap-10 items-center justify-center mb-8'>
          {blogs?.map(val => <Card value={val} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}
