import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftCircle, BsFillMoonFill, BsFillSunFill, BsFullscreenExit, BsThreeDots } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getLang, isDark } from "../store/selector";
import { HU, GB } from 'country-flag-icons/react/3x2'
import Image from "next/image"
import app from "../public/manager/app.png"
import viewer from "../public/manager/viewer.png"
import github from "../public/manager/github.png"
import Carousel from "nuka-carousel/lib/carousel";
import png1 from "../public/manager/1.png"
import png2 from "../public/manager/2.png"
import png3 from "../public/manager/3.png"
import png4 from "../public/manager/4.png"
import png5 from "../public/manager/5.png"
import { PhotoSlider } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

export default function Manager() {
    const darkMode = useSelector(isDark);
    const lang = useSelector(getLang);
    const dispatch = useDispatch();


    const [isVisible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const makeOpal = (index) => {
        var otherElements1 = document.getElementsByClassName("opaltext")
        for (let item of otherElements1) {
            item.classList.remove("show")
        }

        var elements = document.getElementsByClassName("opaltext" + index)
        for (let item of elements) {
            item.classList.add("show")
        }
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>HP - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-500 px-10 md:px-20 lg:px-30 bg-gradient-to-b from-gray-300 to-gray-100'>
                <section className='min-h-screen'>
                    <nav className='py-10 mb-8 flex justify-between'>
                        <div className='flex gap-10'>
                            <Link href="/">
                                <BsArrowLeftCircle className='cursor-pointer text-2xl lg:text-3xl dark:text-white text-gray-800' />
                            </Link>
                            <h1 className='text-lg md:text-xl lg:text-2xl dark:text-white font-burtons text-gray-800'>manager app</h1>
                        </div>
                        <ul className='flex items-center'>
                            <li>
                                {darkMode ?
                                    <BsFillSunFill onClick={() => {
                                        dispatch({ type: "CHANGE_DARKNESS" })
                                    }} className='cursor-pointer text-2xl lg:text-3xl text-white' />
                                    :
                                    <BsFillMoonFill onClick={() => {
                                        dispatch({ type: "CHANGE_DARKNESS" })
                                    }} className='cursor-pointer text-2xl lg:text-3xl text-gray-800' />
                                }
                            </li>
                            <li>
                                {lang === "ENG" ?
                                    <HU title='Váltás magyarra' className='h-7 ml-8 cursor-pointer border-2 border-black' onClick={() => dispatch({ type: "CHANGE_LANGUAGE" })} />
                                    :
                                    <GB title='Change to english' className='h-7 ml-8 cursor-pointer border-2 border-black' onClick={() => dispatch({ type: "CHANGE_LANGUAGE" })} />
                                }
                            </li>
                        </ul>
                    </nav>

                    <PhotoSlider
                        images={[
                            "manager/1.png",
                            "manager/2.png",
                            "manager/3.png",
                            "manager/4.png",
                            "manager/5.png",
                        ].map((item) => ({ src: item, key: item }))}
                        visible={isVisible}
                        onClose={() => setVisible(false)}
                        index={index}
                        onIndexChange={setIndex}
                    />


                    <div className="grid grid-cols-8 grid-rows-1 pb-10 center mx-auto gap-10 lg:w-9/12 w-11/12 center">
                        <div className="lg:col-span-5 md:col-span-10 sm:col-span-8 col-span-8 h-[18rem] dark:bg-orange-50 bg-sky-300 rounded-3xl p-10 flex flex-col justify-center shadow-card">
                            <h3 className="text-2xl md:text-2xl mb-5 lg:text-2xl text-gray-800 font-burtons">Manager App</h3>
                            {lang === "ENG" ? <p className="text-xs sm:text-sm md:text-lg lg:text-base xl:text-lg">The "Manager App" is also a very small project in which I tested the functionality of React, ExpressJS, and the MaterialUI CSS framework. In terms of usefulness and features, it is not realistic. There are very few options available, you can only log in, add users (by filling out a form), and switch between light and dark themes. When adding a user, it is saved in memory through a REST API.</p> : <p className="text-xs sm:text-lg md:text-lg lg:text-sm xl:text-lg">A "Manager App" egy szintén nagyon kicsi projekt, amiben a React, ExpressJS és a MaterialUI CSS keretrendszer funkcionalitásait teszteltem. A hasznosságát és funkcióit tekintve nem életszerű. Nagyon kevés lehetőség rejlik benne, csupán bejelentkezni és felhasználókat felvenni lehet (formot kitölteni) és sötét-világos témák között lehet váltani. Felhasználó felvételekor REST-API-n keresztül történik a mentés, memóriába.</p>}
                        </div>

                        <div className="lg:col-span-3 md:col-span-5 md:col-start-3 sm:col-span-6 sm:col-start-2 col-span-8 h-[18rem]" >
                            <Carousel wrapAround autoplay={true} autoplayInterval={3000} className="rounded-3xl h-[18rem]"
                                defaultControlsConfig={{
                                    pagingDotsStyle: {
                                        fill: "gray",
                                        gap: "5rem"
                                    }
                                }}
                                afterSlide={(index) => makeOpal(index)}
                                renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                                    <button onClick={nextSlide} disabled={nextDisabled}>
                                    </button>
                                )}
                                renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                                    <button onClick={previousSlide} disabled={previousDisabled}>
                                    </button>
                                )}
                                renderBottomCenterControls={({ currentSlide, goToSlide }) => (
                                    <div className="flex gap-5">
                                        <button onClick={() => goToSlide(0)}>{currentSlide === 0 ? <RxDotFilled className="text-3xl" /> : <RxDot className="text-3xl" />}</button>
                                        <button onClick={() => goToSlide(1)}>{currentSlide === 1 ? <RxDotFilled className="text-3xl" /> : <RxDot className="text-3xl" />}</button>
                                        <button onClick={() => goToSlide(2)}>{currentSlide === 2 ? <RxDotFilled className="text-3xl" /> : <RxDot className="text-3xl" />}</button>
                                    </div>
                                )}
                            >
                                <div className="relative">
                                    <div className="opaltext show opaltext0 text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl">
                                            {lang === "ENG" ? "Try out the app: " : "Próbáld ki az appot: "}
                                        </p>
                                        <div className="text-2xl font-burtons cursor-not-allowed bg-red-800 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            {lang === "ENG" ? <div>Coming soon</div> : <div >Hamarosan</div>}
                                        </div>
                                    </div>
                                    <Image alt="Kép a játékból" priority src={app} className="h-[18rem] object-cover" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                                <div className="relative">
                                    <div className="opaltext opaltext1 text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl">

                                            {lang === "ENG" ? "Watch the pictures: " : "Nézd meg a képeket: "}

                                        </p>
                                        <div className="text-2xl font-burtons cursor-pointer bg-gray-400 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            <button onClick={(e) => { e.stopPropagation(); setIndex(0); setVisible(true) }}>{lang === "ENG" ? "click" : "kattints"}</button>
                                        </div>
                                    </div>
                                    <Image alt="Kép a játékból" src={viewer} className="h-[18rem] object-cover" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>

                                <div className="relative">
                                    <div className="opaltext opaltext2 text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl lg:text-3xl md:text-xl ">

                                            {lang === "ENG" ? "Watch it on GitHub " : "Nézd meg GitHubon:"}

                                        </p>
                                        <div className="text-2xl font-burtons cursor-pointer bg-gray-400 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            <Link target="_blank" href="https://github.com/PettkoHarsanyi/manager-app">{lang === "ENG" ? "click" : "kattints"}</Link>
                                        </div>
                                    </div>
                                    <Image alt="Kép a játékból" src={github} className="h-[18rem] object-cover" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="grid grid-cols-8 auto-rows-[300px] grid-flow-dense pb-10 mx-auto gap-10 lg:w-9/12 w-11/12 center content-between">
                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(0); setVisible(true) }} src={png1} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(1); setVisible(true) }} src={png2} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(2); setVisible(true) }} src={png3} className="cursor-pointer object-cover h-full z-0" />
                        </div>



                        <div className="2xl:col-span-4 xl:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(3); setVisible(true) }} src={png4} className="cursor-pointer object-cover h-full z-0" />
                        </div>



                        <div className="2xl:col-span-4 xl:col-span-4 md:col-span-8 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(4); setVisible(true) }} src={png5} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="col-span-8 sm:col-span-8 row-span-1 xl:col-span-4 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg lg:text-xl text-lg italic text-center">
                                {lang === "ENG" ? <p>Creator:</p> : <p>Készítő:</p>}
                                {lang === "ENG" ? <p>Peter Harsanyi</p> : <p>Harsányi Péter</p>}
                                <p>pettko.harsanyi@gmail.com</p>
                                <p>di2e6a</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div >
    )
}