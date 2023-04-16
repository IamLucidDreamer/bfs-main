import CardLarge from "@/components/CardLarge";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getBlogsByCategory } from "@/services/blogService";
import Head from "next/head";
import { useEffect, useState } from "react";

export async function getServerSideProps({ params }) {
    const { categoryTitle } = params;

    return {
        props: {
            categoryTitle
        }
    };
}

export default function MyPage({ categoryTitle }) {

    const heroBg = "https://c8.alamy.com/comp/FY71YT/seamless-geometric-pattern-design-for-kids-background-shapes-in-the-FY71YT.jpg"
    const [apiData, setApiData] = useState([])

    const requestCaller = async () => {
        try {
            const response = await getBlogsByCategory(categoryTitle, 1, 10)
            if (response.status >= 200 && response.status < 300) {
                console.log("hii");
                setApiData(response?.data?.data?.blogs)
            }
        }
        catch (err) {
            console.log("Somethnig Went Wrong.", err);
        }
    }

    useEffect(() => {
        requestCaller()
    }, [])


    return (
        <>
            <Head>
                <title>Built From Scratch : {categoryTitle}</title>
            </Head>
            <Header />
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center z-10 min-h-screen">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${heroBg})`,
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
                                <h1 className="text-white font-semibold text-5xl font-playfair uppercase">{categoryTitle}</h1>
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
            <div className='max-w-screen-2xl px-4 lg:px-10 flex flex-col gap-10 items-center my-12'>
                {apiData?.map(val => <CardLarge value={val} />)}
            </div>
            <Footer />
        </>
    );
}