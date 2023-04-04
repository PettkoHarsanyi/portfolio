import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeftCircle, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getLang, isDark } from "../store/selector";
import { HU, GB } from 'country-flag-icons/react/3x2'
import Image from "next/image"
import pic1 from "../public/aboutme/1.png"
import pic1_2 from "../public/aboutme/1_2.png"
import pic3 from "../public/aboutme/3.png"
import pic2 from "../public/aboutme/2.png"
import pic4 from "../public/aboutme/4.png"
import pic5 from "../public/aboutme/5.png"
import pic6 from "../public/aboutme/6.png"
import pic7 from "../public/aboutme/7.png"
import pic8 from "../public/aboutme/8.png"
import pic9 from "../public/aboutme/9.png"
import pic10 from "../public/aboutme/10.png"
import pic11 from "../public/aboutme/11.png"
import pic12 from "../public/aboutme/12.png"
import pic13 from "../public/aboutme/13.png"
import pic4_2 from "../public/aboutme/4_2.png"
import pic14 from "../public/aboutme/14.png"
import pic15 from "../public/aboutme/15.png"
import pic16 from "../public/aboutme/16.png"
import pic17 from "../public/aboutme/17.png"
import pic18 from "../public/aboutme/18.png"
import pic19 from "../public/aboutme/19.png"
import pic20 from "../public/aboutme/20.png"

import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

export default function About() {
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

            <main className='dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-500 px-10 md:px-20 lg:px-30 bg-gradient-to-b from-gray-300 to-gray-100 flex flex-col items-center'>
                <section className='w-full min-h-screen max-w-[1760px]'>
                    <nav className='py-10 mb-8 flex justify-between'>
                        <div className='flex gap-10'>
                            <Link href="/">
                                <BsArrowLeftCircle className='cursor-pointer text-2xl lg:text-3xl dark:text-white text-gray-800' />
                            </Link>
                            <h1 className='text-lg md:text-xl lg:text-2xl dark:text-white font-burtons text-gray-800'>{lang == "ENG" ? "About me" : "Rólam"}</h1>
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

                    <PhotoProvider>
                        <div className="grid grid-cols-8 grid-rows-1 pb-10 center gap-10 w-full center dark:text-orange-100 text-[#18181f] lg:text-3xl sm:text-xl md:text-2xl text-base">
                            <div className="xl:col-span-4 order-1 xl:order-1 col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src={darkMode?"aboutme/1_2.png":"aboutme/1.png"}>
                                    {darkMode ?
                                        <Image alt="Kép a játékból" onClick={() => { setIndex(0); setVisible(true) }} src={pic1_2} className="cursor-pointer object-cover z-0 h-full" />
                                        :
                                        <Image alt="Kép a játékból" onClick={() => { setIndex(0); setVisible(true) }} src={pic1} className="cursor-pointer object-cover z-0 h-full" />
                                    }
                                </PhotoView>

                            </div>
                            <div className="xl:col-span-4 sm:p-10 order-2 xl:order-2 col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>I was born in Eger, Hungary in 1999. In medias res, I love this city, it holds a lot of opportunities and I was fortunate enough to attend great schools where I met wonderful teachers and friends.<br />I was a student in the IT and Mathematics specialized program and I did well on my high school graduation exams, including the advanced level IT exam.<br />My next stop was at the Faculty of Informatics at Eötvös Loránd University where I studied as a software engineer and specialized in software development.</p> : <p>Egerben születtem, 1999-ben. In medias res, imádom ezt a várost, rengeteg lehetőség rejlik benne, szuper iskolákba járhattam, ahol csodás tanárokat és barátokat ismerhettem meg. <br />Infó-matek tagozatos voltam és remekül sikerült az érettségi (köztük az emelt infó is hehe). <br />Kövi megállóm az ELTE infó kara volt, ahol programtervező informatikusnak tanultam és szoftverfejlesztő szakirányos voltam.</p>}
                            </div>

                            <div className="xl:col-span-4 order-3 xl:order-4 col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/2.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(1); setVisible(true) }} src={pic2} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>
                            <div className="xl:col-span-4 sm:p-10 order-4 xl:order-3 col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>I fell in love with Budapest, especially when I moved to KCSSK dormitory. I spent 4 and a half years of my university life here.<br />During my studies, I developed a strong passion for web programming courses. I went through the trio of client-side, server-side, and full-stack web development. One of my projects, &quot;Ticket To Ride&quot;, was thanks to the client-side web programming course, where I got introduced to React. I loved it so much that I even wrote my thesis using React.</p> : <p>Már régóta vágytam Budára, de igazán akkor szerettem bele, amikor ideköltöztem, a KCSSK koliba. Itt éltem le az egyetemi életem 4 és fél évét.<br />Az egyetemen nagyon megszerettem a webprogramozás tárgyakat. A kliens-, szerveroldali-, és fullstack webfejlesztés triót is végigjártam. Az egyik projektem, a &quot;Ticket To Ride&quot; pont a kliensoldali webprogramozás tárgynak köszönhető. Itt ismerkedtem meg a React-tel. Nagy lett a szerelem, később a szakdolgozatomat is ebben írtam.</p>}
                            </div>

                            <div className="order-5 xl:order-5 xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/3.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(2); setVisible(true) }} src={pic3} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>
                            <div className="order-6 xl:order-6 xl:col-span-4 sm:p-10  col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>I developed a board game called &quot;Cartographers&quot; for my thesis, which is a full-stack web application that I also showcase in my portfolio.<br />During my university studies and personal projects, I learned a lot. I believe that in this field, a high-quality appearance is essential. I am a perfectionist, and I like to finish what I start as precisely as possible, but the downside is that I can spend a lot of time perfecting things.<br />When I tackle a significant challenge, I tend to hesitate to ask for help and prefer to find the solution on my own. My friends say that I am a highly creative and unique personality, which I like to incorporate into my work as well.</p> : <p>Ha már szakdoga, egy társasájátékot fejlesztettem le, a &quot;Kartográfusokat&quot;. Ez egy full-stack webalkalmazás, a portfoliomban ezt is bemutatom.<br />Az egyetem és saját projektjeim alatt rengeteg dolgot megtanultam. Azt gondolom, ebben a szakmában fontos az igényes megjelenés. Maximalista vagyok, amit elkezdek, azt be is fejezem minél precízebben, viszont ennek hátulütője, hogy rengeteget el tudok időzni a dolgok tökéletesítésén.<br />Amikor túl nagy fába vágom a fejszém, akkor viszonylag nehezen kérek segítséget, inkább egyedül szeretek rájönni a megoldásra. A barátaim szerint roppantul kreatív és egyedi személyiség vagyok, ezt szeretem belevinni a munkáimba is.</p>}
                            </div>

                            <div className="order-7 xl:order-7 xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/4.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(3); setVisible(true) }} src={pic4} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-8 xl:order-8 xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/4_2.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(4); setVisible(true) }} src={pic4_2} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-10 xl:order-10 xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/5.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(5); setVisible(true) }} src={pic5} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>
                            <div className="order-9 xl:order-9 xl:col-span-4 sm:p-10  col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>Disconnecting from the virtual reality of my profession means my passion for nature. Whenever I have a spare minute, I go out to the nearby mountains and forests. This is why I love Budapest so much, as there are plenty of opportunities for hiking, trekking, and cycling. I know the hills around Buda like the back of my hand.<br />I consider the appreciation for nature as an important value, where people do not live their lives solely in the online space. This is why I cannot stand confinement, the monotony of the rat race.</p> : <p>A szakmám virtuális valóságából való elszakadást a természet iránti szenvedélyem jelenti. Amint egy percem akad, kimegyek a közeli hegyekbe, erdőkbe. Ezért is szeretem nagyon Budát, rengeteget lehet kirándulni, túrázni, biciklizni. Úgy ismerem a Buda környéki hegyeket, mint a tenyeremet. <br />Fontosnak tartom a természetkedvelő értékrendet, amikor az emberek nem az online térben élik az életüket. Emiatt nem bírom a bezártságot, a mókuskerék monoton életet.</p>}
                            </div>

                            <div className="order-11 xl:order-11 xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/6.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(6); setVisible(true) }} src={pic6} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>
                            <div className="order-12 xl:order-12 xl:col-span-4 sm:p-10  col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>I love being part of communities, belonging somewhere, being among good people. I appreciate honest, strong, and genuine personalities, and I try to surround myself with such people. I consider myself an initiator type, but I am also introverted, and I easily get tired in longer, prolonged social interactions.<br />Speaking of communities, I love helping others, especially if I can do it within a community. That&apos;s why whenever I have time and the opportunity, I go to a homeless support community or an animal shelter. I highly recommend Budapest Bike Maffia and Noé Animal Shelter, great places to meet amazing people. My dream is to open my own animal shelter someday.</p> : <p>Szeretem a közösségeket, tartozni valahova, jó emberek között lenni. Őszinte, erős és eredeti személyiségekkel próbálom körülvenni magam. Kezdeményező típusnak gondolom magamat, azonban introvertált is vagyok, a hosszabb, sokáig tartó szociális interakciókban könnyen elfáradok.<br />Ha már szó volt közösségekről, imádok segítséget nyújtani másoknak, pláne úgy, ha ezt egy közösségben tehetem meg. Ezért amikor csak időm engedi és van rá lehetőség, hajléktalan segítő közösségbe illetve állatmenhelyre járok. Mindenkinek nagyon ajánlom a Budapest Bike Maffiát és a Noé állatotthont is, szuper emberek vannak mindkettőben. Az álmom, hogy egyszer saját menhelyt nyithatok.</p>}
                            </div>

                            <div className="order-[13] xl:order-[13] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/7.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(7); setVisible(true) }} src={pic7} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[14] xl:order-[14] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/8.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(8); setVisible(true) }} src={pic8} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[14] xl:order-[14] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/9.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(9); setVisible(true) }} src={pic9} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[15] xl:order-[15] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/10.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(10); setVisible(true) }} src={pic10} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[16] xl:order-[16] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/11.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(11); setVisible(true) }} src={pic11} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[17] xl:order-[17] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/12.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(12); setVisible(true) }} src={pic12} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[19] xl:order-[18] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/13.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(13); setVisible(true) }} src={pic13} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>
                            <div className="order-[18] xl:order-[19] xl:col-span-4 sm:p-10  col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>Returning to the filthy professional topics, I have one year of work experience in backend programming at Novin, where I worked with PHP using the Symfony framework for REST APIs, designed and operated databases. I had to maintain the backend code of a real estate agency. I also studied Angular, NestJS, and Express at university, and I&apos;m open to new things and not afraid to learn new languages. I&apos;m familiar with version control systems like GitHub, and I also know SQL.</p> : <p>Egy kicsit még visszatérve a mocskos szakmaiakra, backend programozás terén 1 év munkatapasztalatom van a Novin cégnél, PHP-nak a Symfony keretrendszerével írtam REST-API-t, terveztem és üzemeltettem adatbázist. Egy ingatlanközvetítő iroda backend kódját kellett karbantartanom. Egyetemen tanultam Angular, NestJS, Express keretrendszereket is, nem ijedek meg ha új nyelveket kell tanulnom, nyitott vagyok az új dolgokra. Ismerem a GitHubhoz hasonló verziókezelőrendszereket, továbbá SQL-hez is konyítok.</p>}
                            </div>

                            <div className="order-[20] xl:order-[21] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/14.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(14); setVisible(true) }} src={pic14} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>
                            <div className="order-[21] xl:order-[20] xl:col-span-4 sm:p-10  col-span-8 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-2 overflow-hidden text-center flex flex-col align-middle justify-center">
                                {lang == "ENG" ? <p>As a closing, I would like to share a few photos close to my heart, which I believe represent me the best. The white angel in the previous photo is Szofi, my amazing dog, and the girl in the photos is my wonderful girlfriend!</p> : <p>Zárásként néhány szívemhez közeli fotót szeretnék megosztani, azt gondolom ezek mutatnak be a legjobban. Az iménti fotón szereplő fehér angyal Szofi, a szuper kutyám, a lány a fotókon pedig a csodás barátnőm!</p>}
                            </div>

                            <div className="order-[22] xl:order-[22] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/15.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(15); setVisible(true) }} src={pic15} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[23] xl:order-[23] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/16.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(16); setVisible(true) }} src={pic16} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>


                            <div className="order-[24] xl:order-[24] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/17.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(17); setVisible(true) }} src={pic17} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>


                            <div className="order-[25] xl:order-[25] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/18.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(18); setVisible(true) }} src={pic18} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[26] xl:order-[26] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/19.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(19); setVisible(true) }} src={pic19} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                            <div className="order-[27] xl:order-[27] xl:col-span-4  col-span-8 sm:col-start-2 sm:col-span-6 rounded-xl overflow-hidden shadow-card shadow-black flex flex-col align-middle justify-center">
                                <PhotoView src="aboutme/20.png">
                                    <Image alt="Kép a játékból" onClick={() => { setIndex(20); setVisible(true) }} src={pic20} className="cursor-pointer object-cover z-0 h-full" />
                                </PhotoView>
                            </div>

                        </div>
                    </PhotoProvider>
                </section>

            </main>
        </div >
    )
}