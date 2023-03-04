import React, { useEffect } from 'react'
import Navbar from './components/navber'
import profileIcon from './assets/img/profile_icon.jpg'
import arrow from './assets/img/arrow.svg'
import hashTripMock from './assets/img/mockup/HASH-TRIP.png'
import hashTechMock from './assets/img/mockup/HASH-TECH.png'
import riwaMock from './assets/img/mockup/Riwa.png'
import instaIcon from './assets/img/icon/instagram.svg'
import twitterIcon from './assets/img/icon/twitter.svg'
import ellipse1 from './assets/img/ellipse-1.svg'
import ellipse2 from './assets/img/ellipse-2.svg'
import ellipse3 from './assets/img/ellipse-3.svg'
import ellipse4 from './assets/img/ellipse-4.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        setAnimation()
    }, [])

    const setAnimation = () => {
        gsap.fromTo(
            '.s',
            { background: 'white', color: 'transparent' }, //fromの設定
            { //toの設定
                duration: 3,
                ease: 'bounce.in',
                background: 'transparent',
                color: '#004146',
                scrollTrigger: {
                    trigger: '#title',
                    start: 'top center', //要素のトップが、画面の中央まできたら開始
                },
                stagger: {
                    from: 'random', //左からアニメーション start、center、edges、random、endが指定できる
                    amount: 2, //1秒ズラしてアニメーション
                },
            },
        )
        gsap.utils.toArray('.fade-up').forEach((wrap: any, index: number) => {
            gsap.fromTo('#section-content-' + (index + 1), { color: 'transparent' }, {
                color: '#004146',
                duration: 1,
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top center',
                    end: 'bottom center',
                },
            })
            gsap.to('#ellipce-' + (index + 1), {
                y: 200,
                scrollTrigger: {
                    trigger: wrap,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.2,
                },
            })
        })
    }
    return (
        <div className="bg-background text-primary overflow-x-hidden">
            <Navbar />
            <header className="header h-screen w-screen flex justify-center items-center">
                <h1 id='title' className="text-5xl leading-normal text-center font-oswald">
                    <span className='s'>SYSTEM</span> <span className='s'>ENGINEER</span> <span className='s'>/</span> <span className='s'>DIRECTOR</span>
                    <br />
                    <span className='s'>WEB</span> <span className='s'>CREATOR</span>
                    <br />
                    <span className='s'>YODA</span> <span className='s'>TATSUYA</span>
                </h1>
            </header>
            <div className="flex flex-col gap-20 py-20 mx-auto max-w-2xl relative">
                <section id="about" className='fade-up z-10'>
                    <img src={ellipse1} alt="ellipce" id='ellipce-1' className='z-[-1] absolute w-[30vw] min-w-[300px] right-[50vw]' />
                    <div id='section-content-1' className='flex flex-col items-center mx-4 my-8 gap-8'>
                        <h2 className='text-3xl font-oswald'>About.</h2>
                        <div className="text-left flex gap-8 mx-auto">
                            <div className="w-48">
                                <img src={profileIcon} alt="Yoda Tatsuya" className='rounded-xl' />
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <h3 className="font-bold text-xl">依田 達哉</h3>
                                <div>
                                    <h4 className='text-sm'>Occupation</h4>
                                    <p>
                                        開発 / ディレクション / プロジェクトマネジメント
                                        <br />
                                        UI/UXデザイン / 写真撮影 / 動画編集
                                    </p>
                                </div>
                                <div>
                                    <h4 className='text-sm'>Development</h4>
                                    <p>Vue.js / Nuxt.js / React / TypeScript / Python / PHP</p>
                                </div>
                                <div>
                                    <h4 className='text-sm'>Video Editing</h4>
                                    <p>サプライズムービー / 結婚式余興ムービー / ゲームOP・PV</p>
                                </div>
                                <div>
                                    <h4 className='text-sm'>Certification</h4>
                                    <p>応用情報技術者試験 / WEBデザイン検定3級</p>
                                </div>
                            </div>
                        </div>
                        <p className='bg-white/30 p-4'>
                            私は山梨県在住のWEBエンジニア・クリエイターです。
                            <br />
                            WEBシステムもビデオコンテンツも、クライアントの望んだものが実際に見る人の望むものとは限りません。
                            <br />
                            ストーリーを重視して明確かつシンプルに構成することを心がけています。
                        </p>
                        <a href="https://t-hsn.com/portfolio/career.html" className='underline flex gap-2'>
                            More Profile
                            <img src={arrow} alt="arrow" />
                        </a>
                    </div>
                </section>
                <section id="works" className='fade-up z-10'>
                    <img src={ellipse2} alt="ellipce" id='ellipce-2' className='z-[-1] absolute w-[40vw] min-w-[300px] left-[50vw]' />
                    <div id='section-content-2' className='flex flex-col items-center mx-4 my-8 gap-8'>
                        <h2 className='text-3xl font-oswald'>Works.</h2>
                        <div className='flex flex-col items-center'>
                            <div className='w-full flex justify-center items-center gap-8'>
                                <div className="flex shrink-0 justify-center w-30 h-48">
                                    <img src={hashTripMock} alt="HASH TRIP" />
                                </div>
                                <div className='flex-grow'>
                                    <h3 className='text-xl'>HASH TRIP</h3>
                                    <p>Trip information and trivia blog in Japan and 9 countries around the world</p>
                                    <p>日本国内・世界9カ国の旅情報や雑学のブログ</p>
                                    <a href="https://t-hsn.com/" className='underline flex gap-2'>
                                        View<img src={arrow} alt="arrow" />
                                    </a>
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center gap-8 md:-mt-8'>
                                <div className='flex-grow'>
                                    <h3 className='text-xl'>HASH TECH</h3>
                                    <p>Knowledge and technology sharing site for engineers</p>
                                    <p>エンジニアのための知識・技術共有サイト</p>
                                    <a href="https://tech.t-hsn.com/" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                                </div>
                                <div className="flex shrink-0 justify-center w-30 h-48">
                                    <img src={hashTechMock} alt="HASH TRIP" />
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center gap-8 md:-mt-8'>
                                <div className="flex shrink-0 justify-center w-30 h-48">
                                    <img src={riwaMock} alt="HASH TRIP" />
                                </div>
                                <div className='flex-grow'>
                                    <h3 className='text-xl'>Riwa</h3>
                                    <p>Accessories brand Official web site</p>
                                    <p>アクセサリーブランド 『Riwa』 公式サイト</p>
                                    <a href="https://riwa.jp/" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="video" className='fade-up z-10'>
                    <img src={ellipse3} alt="ellipce" id='ellipce-3' className='z-[-1] absolute w-[30vw] min-w-[300px] right-[50vw]' />
                    <div id='section-content-3' className='flex flex-col items-center mx-4 my-8 gap-8'>
                        <h2 className='text-3xl font-oswald'>Video.</h2>
                        <div className='flex flex-col md:flex-row justify-start items-center gap-8 w-full'>
                            <div className="w-64">
                                <iframe width="256" height="144" src="https://www.youtube.com/embed/jQL02mu0AFI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                            <div>
                                <h3>#1 AutumnLeaves</h3>
                                <a href="https://www.youtube.com/watch?v=jQL02mu0AFI&t=1s" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-start items-center gap-8 w-full'>
                            <div className="w-64">
                                <iframe width="256" height="144" src="https://www.youtube.com/embed/zL8imA_s7Kw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            </div>
                            <div>
                                <h3>#2 Mt. Fuji</h3>
                                <a href="https://www.youtube.com/watch?v=zL8imA_s7Kw" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="experiences" className='fade-up z-10'>
                    <img src={ellipse4} alt="ellipce" id='ellipce-4' className='z-[-1] absolute w-[30vw] min-w-[300px] left-[50vw]' />
                    <div id='section-content-4' className='flex flex-col items-center mx-4 my-8 gap-8'>
                        <h2 className='text-3xl font-oswald'>Experiences.</h2>
                        <div className='max-w-xs w-full'>
                            <h3 className='text-sm'>リマールエステート株式会社</h3>
                            <p className='text-xl'>Project manager and ui designer</p>
                            <p className='text-sm'>2022 ー</p>
                        </div>
                        <div className='max-w-xs w-full'>
                            <h3 className='text-sm'>株式会社ノートスペース</h3>
                            <p className='text-xl'>System Engineer</p>
                            <p className='text-sm'>2019 ー 2022</p>
                        </div>
                        <div className='max-w-xs w-full'>
                            <h3 className='text-sm'>株式会社クレスト</h3>
                            <p className='text-xl'>Programmer</p>
                            <p className='text-sm'>2017 ー 2019</p>
                        </div>
                    </div>
                </section>
                <section id="contact" className='flex flex-col items-center my-8 gap-8 fade-up'>
                    <h2 className='text-3xl font-oswald'>Contact.</h2>
                    <div>
                        <a href="https://t-hsn.com/form/" className='underline flex gap-2 mb-8'>Contact form<img src={arrow} alt="arrow" /></a>
                        <div className='flex justify-center items-center gap-2'>
                            <p>Social</p>
                            <a href="https://www.instagram.com/tatsugooon/">
                                <img src={instaIcon} alt="Instagram" />
                            </a>
                            <a href="https://twitter.com/tatsugooon">
                                <img src={twitterIcon} alt="Twitter" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
