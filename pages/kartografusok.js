import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftCircle, BsFillMoonFill, BsFillSunFill, BsFullscreenExit, BsThreeDots } from "react-icons/bs";
import { RxDot, RxDotFilled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getLang, isDark } from "../store/selector";
import { HU, GB } from 'country-flag-icons/react/3x2'
import png1 from "../public/kartografusok/1.png"
import png2 from "../public/kartografusok/2.png"
import png3 from "../public/kartografusok/3.png"
import png4 from "../public/kartografusok/4.png"
import png5 from "../public/kartografusok/5.png"
import png6 from "../public/kartografusok/6.png"
import png7 from "../public/kartografusok/7.png"
import png8 from "../public/kartografusok/8.png"
import png9 from "../public/kartografusok/9.png"
import png10 from "../public/kartografusok/10.png"
import png11 from "../public/kartografusok/11.png"
import png12 from "../public/kartografusok/12.png"
import png13 from "../public/kartografusok/13.png"
import png14 from "../public/kartografusok/14.png"
import png15 from "../public/kartografusok/15.png"
import png16 from "../public/kartografusok/16.png"
import png17 from "../public/kartografusok/17.png"
import png18 from "../public/kartografusok/18.png"
import png19 from "../public/kartografusok/19.png"
import png20 from "../public/kartografusok/20.png"
import png21 from "../public/kartografusok/21.png"
import Image from "next/image"
import Slider from "react-slick";
import jatek from "../public/kartografusok/jatek.png"
import viewer from "../public/kartografusok/viewer.png"
import dokumentacio from "../public/kartografusok/dokumentacio.png"
import Carousel from "nuka-carousel/lib/carousel";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

export default function Kartografusok() {
    const darkMode = useSelector(isDark);
    const lang = useSelector(getLang);
    const dispatch = useDispatch();


    const [isVisible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const makeOpal = (index) => {
        var otherElements1 = document.getElementsByClassName("opaltext")
        for (let item of otherElements1) {
            console.log(item);
            item.classList.remove("show")
        }

        var elements = document.getElementsByClassName("opaltext" + index)
        for (let item of elements) {
            console.log(item);
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
                            <h1 className='text-lg md:text-xl lg:text-2xl dark:text-white font-burtons text-gray-800'>kartográfusok</h1>
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
                        "kartografusok/1.png", "kartografusok/2.png", "kartografusok/3.png", "kartografusok/4.png", "kartografusok/5.png", 
                        "kartografusok/6.png", "kartografusok/7.png", "kartografusok/8.png", "kartografusok/9.png", "kartografusok/10.png", 
                        "kartografusok/11.png", "kartografusok/12.png", "kartografusok/13.png", "kartografusok/14.png", "kartografusok/15.png", 
                        "kartografusok/16.png", "kartografusok/17.png", "kartografusok/18.png", "kartografusok/19.png", "kartografusok/20.png", 
                        "kartografusok/21.png", "kartografusok/22.png", "kartografusok/23.png", ].map((item) => ({ src: item, key: item }))}
                        visible={isVisible}
                        onClose={() => setVisible(false)}
                        index={index}
                        onIndexChange={setIndex}
                    />


                    <div className="grid grid-cols-8 grid-rows-1 pb-10 center mx-auto gap-10 lg:w-9/12 w-11/12 center">
                        <div className="lg:col-span-5 md:col-span-10 sm:col-span-8 col-span-8 h-[18rem] dark:bg-orange-50 bg-sky-300 rounded-3xl p-10 flex flex-col justify-center shadow-card">
                            <h3 className="text-2xl md:text-2xl mb-5 lg:text-2xl text-gray-800 font-burtons">Kartográfusok</h3>
                            {lang === "ENG" ? <p className="text-md sm:text-xl md:text-xl">I made this as my university thesis. Three program components work together to make this application work; backend that I wrote in NestJs, my frontend which is ReactJs, and SocketIO.</p>: <p className="text-sm sm:text-xl md:text-sm lg:text-md xl:text-xl">Ezt a projektet az egyetemen, szakmai dolgozatként csináltam. Az alkalmazás három részre oszlik, front-enden ReactJs működik, back-enden NestJs, a kapcsolatért pedig SocketIO felel. A grafikai elemeket (kártyák, térkép) nem én hoztam létre, viszont minden más a saját munkám.</p>}
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
                                            {lang === "ENG" ? "Try out the game: " : "Próbáld ki a játékot: "}
                                        </p>
                                        <div className="text-2xl font-burtons cursor-not-allowed bg-red-700 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-red-200">
                                            {lang === "ENG" ? <p>unavailable</p> : <p>nem elérhetö</p>}
                                        </div>
                                    </div>
                                    <Image src={jatek} className="h-[18rem] object-cover" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                                <div className="relative">
                                    <div className="opaltext opaltext1 text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl lg:text-3xl md:text-xl ">

                                            {lang === "ENG" ? "Download the documentation: " : "Töltsd le a dokumentációt:"}

                                        </p>
                                        <div className="text-2xl md:text-xl lg:text-2xl font-burtons cursor-pointer bg-green-600 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            {lang === "ENG" ? <a download="dokumentacio.docx" href="kartografusok/dokumentacio.docx" >download</a> : <a download="dokumentacio.docx" href="kartografusok/dokumentacio.docx">letöltés</a>}
                                        </div>
                                    </div>
                                    <Image src={dokumentacio} className="h-[18rem] object-cover" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                                <div className="relative">
                                    <div className="opaltext opaltext2 text-center absolute h-full w-full flex flex-col justify-center items-center p-8 bg-black bg-opacity-60 gap-10">
                                        <p className="font-burtons text-white text-3xl">

                                            {lang === "ENG" ? "Watch the pictures: " : "Nézd meg a képeket: "}

                                        </p>
                                        <div className="text-2xl font-burtons cursor-pointer bg-gray-400 px-4 py-1 rounded-xl shadow-card shadow-black border-2 border-black text-white">
                                            {lang === "ENG" ? <button onClick={() => {setIndex(0);setVisible(true)}}>click</button> : <button>kattints</button>}
                                        </div>
                                    </div>
                                    <Image src={viewer} className="h-[18rem] object-cover" style={{ pointerEvents: "none" }} draggable={false} />
                                </div>
                            </Carousel>
                        </div>

                        {/* <div className="lg:col-span-3 col-span-8 dark:bg-orange-100 bg-sky-200 rounded-3xl flex flex-col justify-between p-5 shadow-card">
                            <div><BsThreeDots className="text-4xl" /></div>
                            <div className=""></div>
                            <div className="font-burtons text-2xl">{lang === "ENG" ? <p>Documentation</p> : <p>Dokumentáció</p>}</div>
                        </div> */}
                    </div>

                    <div className="grid grid-cols-8 auto-rows-[300px] grid-flow-dense pb-10 mx-auto gap-10 lg:w-9/12 w-11/12 center content-between">

                        {/* ELSŐ */}
                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black z-10"></div>
                            {/* <PhotoView src="kartografusok/1.png"> */}
                            <Image onClick={() => { setIndex(0); setVisible(true) }} src={png1} className="cursor-pointer object-cover h-full z-0" />
                            {/* </PhotoView> */}
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(16); setVisible(true) }} src={png17} className="cursor-pointer object-cover h-full " />

                        </div>

                        {/* MÁSODIK */}
                        <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(1); setVisible(true) }} src={png2} className="cursor-pointer object-cover h-full w-full object-top" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-8 dark:bg-orange-100 bg-sky-200 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg italic text-xl sm:text-lg">{lang === "ENG" ? <p>Unfortunatelly, I can't host the game since I don't have the rights for that. The pictures show the content of the game. Some of my other projects, that are my own idea can be and are hosted.</p> : <p>Sajnos a játékot nem oszthatom meg, mert a szerzői jog a kiadót illeti, viszont itt van néhány kép a játékból. A többi projektemet, ami a saját ötletem volt, azokat megosztottam.</p>}</div>
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(18); setVisible(true) }} src={png19} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        {/* HARMADIK */}
                        <div className="2xl:col-span-4 xl:col-span-3 xl:col-start-2 col-start-1 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(13); setVisible(true) }} src={png14} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 sm:col-span-4 col-span-8 dark:bg-orange-200 bg-sky-100 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg italic text-xl sm:text-lg">
                                {lang === "ENG" ? <p>The site can be used even as a guest, but there is also a registration option. I included this feature so that players can compete on the leaderboard.</p> : <p>Az oldalt lehet használni vendégként, de van regisztrációs lehetőség is. Ezt azért vittem bele, hogy a játékosok versenyezni tudjanak a ranglétrán.</p>}</div>
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 xl:col-start-2 sm:col-span-4 col-start-1 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(3); setVisible(true) }} src={png4} className="cursor-pointer h-full w-full object-cover" />
                        </div>



                        {/* NEGYEDIK */}
                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 sm:col-span-4 col-span-8 dark:bg-orange-200 bg-sky-100 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg italic text-xl sm:text-lg">
                                {lang === "ENG" ? <p>There is an administration panel available, where all player data can be modified, and new levels and certain game cards can be created and deleted.</p> : <p>Van egy adminisztrációs panel is, ahol módosítani lehet az összes játékos adatait, ezenkívül lehet létrehozni és törölni új pályákat, illetve bizonyos, játékban szereplő kártyákat is.</p>}</div>
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(4); setVisible(true) }} src={png5} className="cursor-pointer object-cover h-full " />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-4 lg:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(7); setVisible(true) }} src={png8} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        {/* ÖTÖDIK */}
                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(6); setVisible(true) }} src={png7} className="cursor-pointer object-cover h-full " />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(8); setVisible(true) }} src={png9} className="cursor-pointer object-cover h-full " />
                        </div>

                        {/* HATODIK */}
                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(9); setVisible(true) }} src={png10} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-5 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(2); setVisible(true) }} src={png3} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(5); setVisible(true) }} src={png6} className="cursor-pointer object-cover h-full " />
                        </div>

                        {/* HETEDIK */}
                        <div className="2xl:col-span-4 xl:col-span-4 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(10); setVisible(true) }} src={png11} className="cursor-pointer object-cover h-full " />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-5 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(11); setVisible(true) }} src={png12} className="cursor-pointer object-cover h-full " />
                        </div>

                        {/* NYOLCAS */}
                        <div className="2xl:col-span-2 xl:col-span-3 sm:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(12); setVisible(true) }} src={png13} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-5 col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(14); setVisible(true) }} src={png15} className="cursor-pointer object-cover h-full " />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 sm:col-span-4 col-span-8 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg italic text-xl sm:text-lg">
                                {lang === "ENG" ? <p>If we want to play with our friends, we'll need the room code after creating a room. SocketIO generates this code, and they can join our room by entering it. This is where we can chat.</p> : <p>Ha játszani szeretnénk a barátainkkal, akkor egy szoba létrehozása után a szobakódra lesz szükségük. Ezt a socketIO generálja. A kód beírásával csatlakozhatnak a szobánkba. Itt lehet chatelni.</p>}</div>
                        </div>

                        {/* KILENCES */}
                        <div className="2xl:col-span-4 xl:col-span-4  col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(15); setVisible(true) }} src={png16} className="cursor-pointer object-cover h-full " />
                        </div>

                        <div className="2xl:col-span-4 xl:col-span-4  col-span-8 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(16); setVisible(true) }} src={png17} className="cursor-pointer object-cover h-full " />
                        </div>

                        {/* TIZES */}
                        <div className="2xl:col-span-3 xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-8 2xl:row-span-2 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(18); setVisible(true) }} src={png19} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-4 sm:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(17); setVisible(true) }} src={png18} className="cursor-pointer h-full w-full object-cover lg:object-left xl:object-center sm:object-left object-center" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 sm:col-span-4 col-span-8 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg italic text-xl sm:text-lg">
                                {lang === "ENG" ? <p>When the game starts, you can still use the chat. In the game you have to draw, use your Tetris skills and build. Don't forget that it's not frowned upon to outsmart your opponents a little.</p> : <p>Amint a játék elindult, továbbra is lehet chatelni. Rajzolni kell, tetrisezni és építgetni. Ne felejtsük el, hogy kicsit kiszúrni sem ítélendő az ellenfeleinkkel.</p>}</div>
                        </div>

                        <div className="2xl:col-span-5 xl:col-span-3 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(20); setVisible(true) }} src={png21} className="cursor-pointer object-cover h-full xl:object-left object-center" />
                        </div>

                        {/* TIZENEGYES */}

                        <div className="2xl:col-span-2 xl:col-span-2 lg:col-span-4 sm:col-span-4 col-span-8 row-span-1 relative rounded-3xl overflow-hidden">
                            <div style={{ pointerEvents: "none" }} className="absolute h-full w-full shadow-innerShadow shadow-black"></div>
                            <Image onClick={() => { setIndex(19); setVisible(true) }} src={png20} className="cursor-pointer h-full w-full object-cover" />
                        </div>

                        <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 lg:col-start-3 col-span-8 dark:bg-orange-300 bg-sky-50 rounded-3xl flex flex-col justify-center p-5 shadow-card">
                            <div className="2xl:text-lg lg:text-xl text-lg italic text-center">
                                {lang === "ENG" ? <p>Publisher:</p> : <p>Kiadó:</p>}
                                <p>Thunderwork Games</p>
                                <br />
                                <p>Designer:</p>
                                <p>Jordy Adan</p>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div >
    )
}