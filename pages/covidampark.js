import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftCircle, BsFillMoonFill, BsFillSunFill, BsFullscreenExit, BsThreeDots } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getLang, isDark } from "../store/selector";
import { HU, GB } from 'country-flag-icons/react/3x2'
import Image from "next/image"
import download from "../public/covidampark/download.png"
import viewer from "../public/covidampark/viewer.png"
import github from "../public/covidampark/github.png"
import Carousel from "nuka-carousel/lib/carousel";
import png1 from "../public/covidampark/1.png"
import png2 from "../public/covidampark/2.png"
import png3 from "../public/covidampark/3.png"
import png4 from "../public/covidampark/4.png"
import png5 from "../public/covidampark/5.png"
import png6 from "../public/covidampark/6.png"
import png7 from "../public/covidampark/7.png"
import png8 from "../public/covidampark/8.png"
import png9 from "../public/covidampark/9.png"
import png10 from "../public/covidampark/10.png"
import png11 from "../public/covidampark/11.png"
import png12 from "../public/covidampark/12.png"
import png13 from "../public/covidampark/13.png"
import png14 from "../public/covidampark/14.png"
import png15 from "../public/covidampark/15.png"
import png16 from "../public/covidampark/16.png"
import { PhotoSlider } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

export default function Bubbs() {
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

            <main className='dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-500 px-10 md:px-20 lg:px-30 bg-gradient-to-b from-gray-300 to-gray-100 flex flex-col justify-center items-center'>
                <section className='min-h-screen max-w-[1760px]'>
                    <nav className='py-10 mb-8 flex justify-between'>
                        <div className='flex gap-10'>
                            <Link href="/">
                                <BsArrowLeftCircle className='cursor-pointer text-2xl lg:text-3xl dark:text-white text-gray-800' />
                            </Link>
                            <h1 className='text-lg md:text-xl lg:text-2xl dark:text-white font-burtons text-gray-800'>Covidámpark</h1>
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
                            "covidampark/1.png",
                            "covidampark/3.png",
                            "covidampark/4.png",
                            "covidampark/2.png",
                            "covidampark/5.png",
                            "covidampark/6.png",
                            "covidampark/7.png",
                            "covidampark/8.png",
                            "covidampark/9.png",
                            "covidampark/10.png",
                            "covidampark/11.png",
                            "covidampark/12.png",
                            "covidampark/13.png",
                            "covidampark/14.png",
                            "covidampark/15.png",
                            "covidampark/16.png",
                        ].map((item) => ({ src: item, key: item }))}
                        visible={isVisible}
                        onClose={() => setVisible(false)}
                        index={index}
                        onIndexChange={setIndex}
                    />


                    <div className="grid grid-cols-8 grid-rows-1 pb-10 center mx-auto gap-10 lg:w-9/12 w-11/12 center">
                        <div className="lg:col-span-5 md:col-span-10 sm:col-span-8 col-span-8 h-[18rem] dark:bg-orange-50 bg-sky-300 rounded-3xl p-10 flex flex-col justify-center shadow-card">
                            <h3 className="text-xl md:text-2xl mb-1 lg:text-2xl text-gray-800 font-burtons">Covidámpark</h3>
                            {lang === "ENG" ? <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">&quot;Covidampark&quot; is a tycoon genre desktop computer game. The objective of the game is to manage an amusement park, build roller coasters, and attract as many visitors as possible. I created this game as a part of a university project with two of my friends. We named it &quot;Covidampark&quot; because we developed it during the time of the pandemic. I was responsible for 90% of the frontend development and integrating it with the business logic. We developed the program using Java.</p> : <p className="text-xs sm:text-lg md:text-lg lg:text-sm xl:text-lg">&quot;Covidámpark&quot; egy tycoon típusú számítógépes asztali játék. A játék lényege, hogy egy vidámparkot üzemeltess, hullámvasutakat építs, és ezáltal minél több látogatót vonzz. Egy egyetemi projekt kereteiben 2 barátommal együtt hoztam létre. Azért lett &quot;Covidámpark&quot;, mert a covid ideje alatt készítettük. A frontend részét 90%-ban én hoztam létre, és kötöttem az üzleti logikához. A programot Java-ban írtuk meg.</p>}
                        </div>

                        <div className="lg:col-span-3 md:col-span-5 md:col-start-3 sm:col-span-6 sm:col-start-2 col-span-8 h-[18rem]" >
                            <Carousel wrapAround className="rounded-3xl h-[18rem] shadow-card bg-black bg-opacity-60"
                                defaultControlsConfig={{
                                    pagingDotsStyle: {
                                        fill: "gray",
                                        gap: "5rem"
                                    }
                                }}
                                afterSlide={(index) => makeOpal(index)}
                                renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                                    <button onClick={nextSlide} disabled={nextDisabled} className="text-white bg-black py-2 px-3 bg-opacity-60 rounded-l-2xl" style={{ WebkitTapHighlightColor: "transparent" }}>
                                        {lang === "ENG" ? "Next" : "Kövi"}
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
                                        <button onClick={() => goToSlide(3)}>{currentSlide === 3 ? <RxDotFilled className="text-3xl" /> : <RxDot className="text-3xl" />}</button>
                                    </div>
                                )}
                            >
                                <div className="relative">
                                    <div className="opaltext show opaltext0 rounded-3xl text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl">
                                            {lang === "ENG" ? "Download the game:" : "Töltsd le a játékot:"}
                                        </p>
                                        <p className="font-burtons text-white text-base">
                                            {lang === "ENG" ? "(70 MB - takes some time)" : "(70 MB - idöt igényel)"}
                                        </p>
                                        <div className="text-2xl font-burtons cursor-not-allowed bg-green-700 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            {lang === "ENG" ? <a href='https://ikelte-my.sharepoint.com/:f:/g/personal/di2e6a_inf_elte_hu/En3KG3C3MshCqTOvd4ccPswBASPHRbOpvQAbgz12BEYdQQ?e=d5YNN7' target="_blank">Download</a> : <a href='https://ikelte-my.sharepoint.com/:f:/g/personal/di2e6a_inf_elte_hu/En3KG3C3MshCqTOvd4ccPswBASPHRbOpvQAbgz12BEYdQQ?e=d5YNN7' target="_blank" >Letöltés</a>}
                                        </div>
                                    </div>
                                    <Image alt="Kép a játékból" priority src={download} className="h-[18rem] object-cover rounded-3xl" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                                <div className="relative h-full">

                                    <div className="h-full dark:bg-orange-50 bg-sky-300 rounded-3xl p-10 flex flex-col">
                                        <h1 className="font-burtons                                     text-2xl   md:text-xl     lg:text-xl xl:text-2xl mb-5 absolute">{lang === "ENG" ? "Informations" : "Infók"}</h1>
                                        <div className="h-max flex flex-col justify-center flex-1 gap-2 text-base  md:text-base   lg:text-sm xl:text-lg lg:pr-0 xl:pr-6 pr-6">
                                            <p><b>Platform:</b> 💻 PC </p>
                                            {lang === "ENG" ? <p><b>JDK needed - </b> download <a href="https://www.oracle.com/java/technologies/downloads/" style={{ color: "blue" }} target="_blank">here</a> </p> : <p><b>JDK szükséges - </b> letöltés <a target="_blank" href="https://www.oracle.com/java/technologies/downloads/" style={{ color: "blue" }}>ide kattintva</a> </p>}
                                            {lang === "ENG" ? <p><b>Language:</b> <GB className="h-4 inline border-2 border-black"></GB> the game is english only</p> : <p><b>Nyelv:</b> <GB className="h-4 inline border-2 border-black"></GB> a játék nyelve angol</p>}

                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="opaltext opaltext2 rounded-3xl text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl">

                                            {lang === "ENG" ? "Watch the pictures: " : "Nézd meg a képeket: "}

                                        </p>
                                        <div className="text-2xl font-burtons cursor-pointer bg-gray-400 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            <button onClick={(e) => { e.stopPropagation(); setIndex(0); setVisible(true) }}>{lang === "ENG" ? "click" : "kattints"}</button>
                                        </div>
                                    </div>
                                    <Image alt="Kép a játékból" src={viewer} className="h-[18rem] object-cover rounded-3xl" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>

                                <div className="relative">
                                    <div className="opaltext opaltext3 rounded-3xl text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl lg:text-3xl md:text-xl ">

                                            {lang === "ENG" ? "Watch it on GitHub " : "Nézd meg GitHubon:"}

                                        </p>
                                        <div className="text-2xl font-burtons cursor-pointer bg-gray-400 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            <Link target="_blank" href="https://github.com/PettkoHarsanyi/bubbs">{lang === "ENG" ? "click" : "kattints"}</Link>
                                        </div>
                                    </div>
                                    <Image alt="Kép a játékból" src={github} className="h-[18rem] object-cover rounded-3xl" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="grid grid-cols-8 auto-rows-[300px] grid-flow-dense pb-10 mx-auto gap-10 lg:w-9/12 w-11/12 center content-between">

                        <div className="2xl:col-span-4 xl:col-span-5 lg:col-span-4 md:col-span-8 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(0); setVisible(true) }} src={png1} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(1); setVisible(true) }} src={png3} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(2); setVisible(true) }} src={png4} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-8 2xl:row-span-2 xl:col-span-5 lg:col-span-6 md:col-span-6 lg:col-start-2 md:col-start-2 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(3); setVisible(true) }} src={png2} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(4); setVisible(true) }} src={png5} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-5 md:col-span-4 sm:col-span-6 sm:col-start-2 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(5); setVisible(true) }} src={png6} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-8 sm:col-span-6 sm:col-start-2 row-span-1 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-base lg:text-lg text-lg italic text-center">
                                {lang === "ENG" ? <p>We created the game with the NetBeans Java UI designer program, with three of us working on it. My friends also implemented an A* pathfinding algorithm. The &quot;HKK&quot; logo visible in the main menu is an abbreviation of our names.</p> : <p>A játékot hárman csináltuk a NetBeans Java UI készítő programjával. A barátaim implementáltak útkereső A* algoritmust is. A főmenüben látható &quot;HKK&quot; logó a neveink rövidítése.</p>}
                            </div>
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-5 lg:col-span-5 md:col-span-8 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(6); setVisible(true) }} src={png7} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-5 md:col-span- sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(7); setVisible(true) }} src={png8} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-6 lg:col-start-2 xl:col-start-auto sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(8); setVisible(true) }} src={png9} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-5 lg:col-span-6 lg:col-start-2 xl:col-start-auto sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(9); setVisible(true) }} src={png10} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(10); setVisible(true) }} src={png11} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(11); setVisible(true) }} src={png12} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-4 lg:col-span-4 md:col-span-4 col-span-8 sm:col-span-6 sm:col-start-2 row-span-1 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-base lg:text-xl text-lg italic text-center">
                                {lang === "ENG" ? <p>In the game, there are a lot of things to pay attention to. Roller coasters can break down and you can only fix them by hiring maintenance workers. Walkways can get dirty, which decreases people&apos;s enjoyment and they may leave the park. To prevent this, you need to pay for janitors.</p> : <p>A játékban elég sok mindenre kell figyelni. A hullámvasutak elromolhatnak, amiket csak akkor tudsz megjavítani, ha alkalmazol karbantartókat. A járdák mocskolódnak, ami rontja az emberek kedvét, és elhagyják a parkot. Ez ellen takarítókat kell fizetni.</p>}
                            </div>
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-5 lg:col-span-3 md:col-span-5 sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(12); setVisible(true) }} src={png13} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-3 sm:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(13); setVisible(true) }} src={png14} className="cursor-pointer object-cover h-full z-0" />
                        </div>


                        <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-4 md:col-span-6 md:col-start-2 lg:col-start-auto sm:col-span-8 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(14); setVisible(true) }} src={png15} className="cursor-pointer object-cover h-full z-0" />
                        </div>




                        <div className="2xl:col-span-8 xl:col-span-5 lg:col-span-8 col-span-8 2xl:row-span-2 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(15); setVisible(true) }} src={png16} className="cursor-pointer object-cover h-full z-0" />
                        </div>

                        {/* <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(4); setVisible(true) }} src={png4} className="cursor-pointer object-cover h-full z-0" />
                        </div> */}

                        {/* <div className="2xl:col-span-4 xl:col-span-4 md:col-span-8 sm:col-span-8 col-span-8 xl:row-span-2 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            <Image alt="Kép a játékból" onClick={() => { setIndex(5); setVisible(true) }} src={png6} className="cursor-pointer object-cover h-full z-0" />
                        </div> */}

                        <div className="xl:col-span-4 xl:col-start-3 col-span-8 sm:col-span-8 row-span-1 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg lg:text-xl text-lg italic text-center">
                                {lang === "ENG" ? <p>Creators:</p> : <p>Készítők:</p>}
                                {lang === "ENG" ? <p>Balázs Kovács</p> : <p>Kovács Balázs</p>}
                                {lang === "ENG" ? <p>Illés Hajdú-Molnár</p> : <p>Hajdú-Molnár Illés</p>}
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