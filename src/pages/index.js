import Head from "next/head"
import Header from "../components/Header"

import Corousal from "nuka-carousel"
import Card from "../components/Card"
import Footer from '../components/Footer';

import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import axios from "@/helpers/httpHelper";
import { getBlogsByCategory } from "@/services/blogService";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [blogs, setBlogs] = useState([])

  console.log(blogs, "hii");

  useEffect(() => {
    getBlogsByCategory(null, 1, 4)
      .then(res => { setBlogs(res?.data?.data?.blogs) })
      .catch(err => console.log("Error :", err))
  }, [])

  const heroData = [
    {
      title: "Some Title 1 about the section will come here.",
      bgImage: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    }, {
      title: "Some Title 2 about the section will come here.",
      bgImage: "https://www.cos.io/hubfs/Cos_2020/Blog_Media/lab-coats.png"
    }, {
      title: "Some Title 3 about the section will come here.",
      bgImage: "https://www.cos.io/hubfs/Cos_2020/Blog_Media/lab-coats.png"
    }]

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
          {heroData.map(val => {
            return (
              <div className="relative pt-16 pb-32 flex content-center items-center justify-center z-10 min-h-[80vh]">
                <div 
                  className="absolute top-0 w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${val?.bgImage})`,
                  }}
                >
                  <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-75 bg-black"
                  ></span>
                </div>
                <div className="container relative mx-auto">
                  <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                      <div className="pr-12">
                        <h1 className="text-white font-semibold text-5xl font-playfair uppercase">{val?.title}</h1>
                        <p className="mt-4 text-lg text-gray-300">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                          tempore voluptatem delectus quae, dolorem rerum maiores quia
                          quis alias adipisci aperiam eos illo itaque distinctio
                          quibusdam, aut iste natus enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Corousal >
        <h1 className='text-5xl font-semibold py-12 text-center font-playfair'>Recent Posts</h1>
        <div className='max-w-screen-2xl px-4 lg:px-10 flex flex-wrap gap-10 items-center justify-center mb-8'>
          {blogs?.map(val => <Card value={val} />)}
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="p-2 border-2 bg-primary text-white font-semibold hover:bg-white hover:text-primary border-primary my-2">
            See More
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
