import React from 'react'
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

function App() {
    return (
        <div className="bg-background text-primary">
            <Navbar />
            <header className="header h-screen w-screen flex justify-center items-center">
                <h1 className="text-5xl text-center font-oswald">
                    SYSTEM ENGINEER / DIRECTOR
                    <br />
                    WEB CREATOR
                    <br />
                    YODA TATSUYA
                </h1>
            </header>
            <div className="flex flex-col gap-20 py-20 mx-auto max-w-2xl relative">
                <section id="about" className='flex flex-col items-center my-8 gap-8'>
                    <img src={ellipse1} alt="ellipce" className='absolute w-[500px] -left-[550px]' />
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
                    <a href="/" className='underline flex gap-2'>
                        More Profile
                        <img src={arrow} alt="arrow" />
                    </a>
                </section>
                <section id="works" className='flex flex-col items-center my-8 gap-8'>
                    <img src={ellipse2} alt="ellipce" className='absolute w-[400px] -right-[450px]' />
                    <h2 className='text-3xl font-oswald'>Works.</h2>
                    <div className='flex flex-col items-center'>
                        <div className='w-full flex justify-center items-center gap-8'>
                            <a href="https://t-hsn.com/">
                                <div className="flex shrink-0 justify-center w-48 h-48">
                                    <img src={hashTripMock} alt="HASH TRIP" />
                                </div>
                            </a>
                            <div className='flex-grow'>
                                <h3 className='text-xl'>HASH TRIP</h3>
                                <p>Trip information and trivia blog in Japan and 9 countries around the world</p>
                                <p>日本国内・世界9カ国の旅情報や雑学のブログ</p>
                                <a href="https://t-hsn.com/" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center gap-8 -mt-8'>
                            <div className='flex-grow'>
                                <h3 className='text-xl'>HASH TECH</h3>
                                <p>Knowledge and technology sharing site for engineers</p>
                                <p>エンジニアのための知識・技術共有サイト</p>
                                <a href="https://tech.t-hsn.com/" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                            </div>
                            <div className="flex shrink-0 justify-center w-48 h-48">
                                <img src={hashTechMock} alt="HASH TRIP" />
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center gap-8 -mt-8'>
                            <div className="flex shrink-0 justify-center w-48 h-48">
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
                </section>
                <section id="video" className='flex flex-col items-center my-8 gap-8'>
                    <img src={ellipse3} alt="ellipce" className='absolute w-[300px] -left-[350px]' />
                    <h2 className='text-3xl font-oswald'>Video.</h2>
                    <div className='flex justify-start items-center gap-8 w-full'>
                        <div className="w-64">
                            <iframe width="256" height="144" src="https://www.youtube.com/embed/jQL02mu0AFI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                        </div>
                        <div>
                            <h3>#1 AutumnLeaves</h3>
                            <a href="/" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-8 w-full'>
                        <div className="w-64">
                            <iframe width="256" height="144" src="https://www.youtube.com/embed/zL8imA_s7Kw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                        </div>
                        <div>
                            <h3>#2 Mt. Fuji</h3>
                            <a href="/" className='underline flex gap-2'>View<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </section>
                <section id="experiences" className='flex flex-col items-center my-8 gap-8'>
                    <img src={ellipse4} alt="ellipce" className='absolute w-[500px] -right-[550px]' />
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
                </section>
                <section id="contact" className='flex flex-col items-center my-8 gap-8'>
                    <h2 className='text-3xl font-oswald'>Contact.</h2>
                    <div>
                        <a href="/" className='underline flex gap-2 mb-8'>Contact form<img src={arrow} alt="arrow" /></a>
                        <div className='flex justify-center items-center gap-2'>
                            <p>Social</p>
                            <a href="/">
                                <img src={instaIcon} alt="Instagram" />
                            </a>
                            <a href="/">
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
