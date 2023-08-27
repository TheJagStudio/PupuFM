import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { showPlayerAtom, PlayerRefAtom } from "../Variables";
const LandingPage = () => {
    const [showPlayer, setShowPlayer] = useAtom(showPlayerAtom);
    const [playerRefState, setPlayerRefState] = useAtom(PlayerRefAtom);
    useEffect(() => {
        if (playerRefState?.current?.paused) {
            setShowPlayer(false);
        }
    }, [setShowPlayer]);
    return (
        <div className="bg-[#191B1F]">
            <div className="z-[99] top-0 flex h-20 transition-all duration-500 md:sticky md:h-28 bg-black/10 backdrop-blur-xl">
                <nav className="relative z-20 flex w-full items-center justify-between px-5 md:hidden ">
                    <div className="flex items-center">
                        <button className="mr-5 flex text-white md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <img alt="Kukufm" loading="lazy" width={88} height={22} decoding="async" data-nimg={1} className="h-8 w-auto object-contain scale-125 rounded-md" style={{ color: "transparent" }} src="/images/logo.png" />
                    </div>
                    <a className="bg-primary-500 inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-bold text-white" href="/home">
                        <div className="text-xs font-bold md:text-lg">Explore</div>
                        <img src="https://d1l07mcd18xic4.cloudfront.net/static/arrow-right-white.svg" className="ml-2 h-4 w-4" alt="pupufm Explore" />
                    </a>
                </nav>
                <nav className="relative z-50 hidden w-full items-center justify-between px-16 py-8 text-white md:flex">
                    <div className="flex-1 flex-shrink-0">
                        <img alt="Kukufm" loading="lazy" width={88} height={22} decoding="async" data-nimg={1} className="h-8 w-auto object-contain scale-125 rounded-md" style={{ color: "transparent" }} src="/images/logo.png" />
                    </div>
                    <div className="flex items-center space-x-12">
                        <div className="">
                            <div className="group relative cursor-pointer rounded-2xl transition ease-in-out hover:scale-110 hover:bg-[#3E434C]">
                                <div className="flex items-center px-3 py-2">
                                    <div className="menu-hover text-lg font-normal text-white">Genres</div>
                                    <span className="ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 group-hover:rotate-180">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="invisible absolute flex w-full rounded-sm pt-4 shadow-xl group-hover:visible">
                                    <div className="w-auto rounded-sm bg-zinc-800 text-gray-800">
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/self-help">
                                            <div className="text-lg font-normal capitalize text-white">Self Help</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/personal-finance">
                                            <div className="text-lg font-normal capitalize text-white">Personal Finance</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/historical">
                                            <div className="text-lg font-normal capitalize text-white">Historical</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/information">
                                            <div className="text-lg font-normal capitalize text-white">Information</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/religion">
                                            <div className="text-lg font-normal capitalize text-white">Religion</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/career">
                                            <div className="text-lg font-normal capitalize text-white">Career</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/hindi/genres/love">
                                            <div className="text-lg font-normal capitalize text-white">Love</div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="group relative cursor-pointer rounded-2xl transition ease-in-out hover:scale-110 hover:bg-[#3E434C]">
                                <div className="flex items-center px-3 py-2">
                                    <div className="menu-hover text-lg font-normal text-white">Language</div>
                                    <span className="ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 group-hover:rotate-180">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="invisible absolute flex w-full rounded-sm pt-4 shadow-xl group-hover:visible">
                                    <div className="w-auto rounded-sm bg-zinc-800 text-gray-800">
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/hindi">
                                            <div className="text-lg font-normal capitalize text-white">hindi</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/tamil">
                                            <div className="text-lg font-normal capitalize text-white">tamil</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/telugu">
                                            <div className="text-lg font-normal capitalize text-white">telugu</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/malayalam">
                                            <div className="text-lg font-normal capitalize text-white">malayalam</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/bengali">
                                            <div className="text-lg font-normal capitalize text-white">bengali</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/marathi">
                                            <div className="text-lg font-normal capitalize text-white">marathi</div>
                                        </NavLink>
                                        <NavLink className="block w-full whitespace-nowrap px-5 py-4 hover:bg-[#3E434C]" to="/home/english">
                                            <div className="text-lg font-normal capitalize text-white">english</div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/business">
                            <div className="rounded-xl px-3 py-2 text-lg font-normal text-white transition ease-in-out hover:scale-110 hover:bg-[#3E434C]">Business</div>
                        </NavLink>
                    </div>
                </nav>
            </div>
            <div>
                <div className="absolute top-0 h-5/6 w-full">
                    <img
                        alt="pupufm Top Audio Books"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover opacity-10"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            color: "transparent",
                        }}
                        sizes="100vw"
                        srcSet="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 480w, https://images.cdn.kukufm.com/w:640/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 640w, https://images.cdn.kukufm.com/w:750/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 750w, https://images.cdn.kukufm.com/w:828/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 828w, https://images.cdn.kukufm.com/w:1080/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 1080w, https://images.cdn.kukufm.com/w:1200/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 1200w, https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg 1920w"
                        src="https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/collarge_topL.jpg"
                    />
                </div>
                <div className="relative flex flex-col items-center justify-between px-5 md:px-0">
                    <div className="relative space-y-8 py-20 lg:py-20">
                        <h1 className="text-4xl lg:text-5xl">
                            <div className="my-12 space-x-2 text-center lg:space-x-4">
                                <span className="font-bold text-white">India’s</span>
                                <span className="text-primary-500 font-bold">largest</span>
                                <div className="my lg:my-5" />
                                <span className="text-primary-500 font-bold">audiobook</span>
                                <span className="font-bold text-white">platform</span>
                            </div>
                        </h1>
                        <h1 className="text-lg lg:text-2xl">
                            <div className="text-center font-normal text-[#FFFFFF]">
                                Expand Your World Through
                                <br />
                                10,000+ Audiobooks And Originals
                            </div>
                        </h1>
                        <div className="hidden text-center md:block">
                            <NavLink className="bg-primary-500 inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-bold text-white" to="/home">
                                <div className="text-xs font-bold md:text-lg">Explore</div>
                                <img src="https://d1l07mcd18xic4.cloudfront.net/static/arrow-right-white.svg" className="ml-2 h-4 w-4" alt="pupufm Explore" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full lg:px-24">
                        <div className="w-full rounded-xl bg-[#272A30] py-5 lg:p-12">
                            <h1 className="text-base md:text-3xl">
                                <div className="mb-5 text-center text-white lg:mb-12">
                                    <div className="font-normal">Listen to audiobooks in</div>
                                    <div className="mt-2 font-bold">7 Regional Languages</div>
                                </div>
                            </h1>
                            <div className="flex flex-wrap justify-center gap-6">
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-[#22C55E] md:w-[120px] lg:p-5" to="/home/hindi">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">ह</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">Hindi</div>
                                    </div>
                                </NavLink>
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-[#F59E0B] md:w-[120px] lg:p-5" to="/home/tamil">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">த</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">Tamil</div>
                                    </div>
                                </NavLink>
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-[#752D22] md:w-[120px] lg:p-5" to="/home/telugu">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">త</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">Telugu</div>
                                    </div>
                                </NavLink>
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-[#DC2626] md:w-[120px] lg:p-5" to="/home/malayalam">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">ള</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">Malayalam</div>
                                    </div>
                                </NavLink>
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-[#5188F6] md:w-[120px] lg:p-5" to="/home/bengali">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">বা</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">Bangla</div>
                                    </div>
                                </NavLink>
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-[#0942B3] md:w-[120px] lg:p-5" to="/home/marathi">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">म</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">Marathi</div>
                                    </div>
                                </NavLink>
                                <NavLink className="group flex w-[130px] items-center justify-center rounded-xl bg-[#3e434c] p-2 text-center hover:bg-primary-500 md:w-[120px] lg:p-5" to="/home/english">
                                    <div>
                                        <div className="text-xl font-normal text-white transition duration-300 ease-in-out group-hover:scale-125 md:text-5xl">Aa</div>
                                        <div className="mt-2 text-base font-normal text-gray-200 md:mt-4 md:text-xl">English</div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NavLink className="z-51 fixed bottom-0 left-0 h-16 w-full md:hidden" target="_blank" rel="noreferrer" to="https://kukufm.sng.link/Apksi/676a/zqqq?pcrn=download_app_strip&pcrid=100">
                            <img
                                alt="pupufm App Download"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                sizes="100vw"
                                srcSet="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 480w, https://images.cdn.kukufm.com/w:640/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 640w, https://images.cdn.kukufm.com/w:750/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 750w, https://images.cdn.kukufm.com/w:828/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 828w, https://images.cdn.kukufm.com/w:1080/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 1080w, https://images.cdn.kukufm.com/w:1200/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 1200w, https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png 1920w"
                                src="https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/download_app_black.png"
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: 0,
                                    color: "transparent",
                                }}
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="py-8 lg:py-20">
                <div className="mb-6 text-center lg:mb-8">
                    <h1 className="text-base md:text-3xl">
                        <span className="font-normal leading-normal text-white">
                            Whatever your goal, we’ve got you
                            <br />
                        </span>
                        <span className="font-bold leading-normal text-white">covered across 20+ Genres</span>
                    </h1>
                </div>
                <div className="relative mx-5 lg:mx-24">
                    <div className="flex space-x-6 overflow-x-scroll pb-6">
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl bg-[#272A30] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Self Help</div>
                            <img loading="lazy" height={48} width={48} alt="Self Help" src="https://kukufm.s3.ap-south-1.amazonaws.com/category_icons/icon_self_help.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl border border-[#3E434C] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Personal Finance</div>
                            <img loading="lazy" height={48} width={48} alt="Personal Finance" src="https://s3.ap-south-1.amazonaws.com/kukufm/category_icons/personal-finance.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl border border-[#3E434C] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Historical</div>
                            <img loading="lazy" height={48} width={48} alt="Historical" src="https://kukufm.s3.ap-south-1.amazonaws.com/category_icons/icon_history.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl border border-[#3E434C] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Information</div>
                            <img loading="lazy" height={48} width={48} alt="Information" src="https://s3.ap-south-1.amazonaws.com/kukufm/category_icons/information.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl border border-[#3E434C] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Religion</div>
                            <img loading="lazy" height={48} width={48} alt="Religion" src="https://kukufm.s3.ap-south-1.amazonaws.com/category_icons/icon_religion.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl border border-[#3E434C] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Career</div>
                            <img loading="lazy" height={48} width={48} alt="Career" src="https://s3.ap-south-1.amazonaws.com/kukufm/category_icons/career.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                        <button className="relative flex flex-shrink-0 items-center justify-between rounded-xl border border-[#3E434C] p-2 px-2 pl-3">
                            <div className="font-bold text-white md:text-lg">Love</div>
                            <img loading="lazy" height={48} width={48} alt="Love" src="https://kukufm.s3.ap-south-1.amazonaws.com/category_icons/love_v3.svg" className="ml-5 h-8 w-8 rounded-xl md:h-12 md:w-12" />
                        </button>
                    </div>
                    <div className="absolute bottom-0 h-px w-full transform rounded bg-zinc-800 ease-in-out" />
                </div>
                <h1 className="text-lg lg:text-2xl">
                    <div className="my-12 flex flex-col text-center font-normal text-[#9DA3AF] md:block">Get motivated &amp; Improve Personality, Knowledge, and Living</div>
                </h1>
                <div className="grid grid-cols-3 gap-6 px-5 lg:grid-cols-4 lg:px-24 xl:grid-cols-5">
                    <img alt="Chanakya Niti" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png" />
                    <img alt="Zindagi apne liye Jiye, Dusro ke liye Nahi" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fc78ad106ab4edcbb381fdf2d7032d2.jpeg 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fc78ad106ab4edcbb381fdf2d7032d2.jpeg 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1fc78ad106ab4edcbb381fdf2d7032d2.jpeg" />
                    <img alt="Slice Of Life" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/7d1680d113ac45f0aed51235fdae9ab4.jpg 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/7d1680d113ac45f0aed51235fdae9ab4.jpg 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/7d1680d113ac45f0aed51235fdae9ab4.jpg" />
                    <img alt="Meditation Tricks For Self Analysis" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1cdde4de276b433aac0ed1d278953f20.png 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1cdde4de276b433aac0ed1d278953f20.png 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/1cdde4de276b433aac0ed1d278953f20.png" />
                    <img alt="Solve Your Modern Problem With Vedas" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/c496c3b2e1be47b091fa16013ff07044.png 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/c496c3b2e1be47b091fa16013ff07044.png 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/c496c3b2e1be47b091fa16013ff07044.png" />
                    <img alt="Apna Routine Kaise Set Karein" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3765dcba46cb4842b886bc7643132f4d.png 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3765dcba46cb4842b886bc7643132f4d.png 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/3765dcba46cb4842b886bc7643132f4d.png" />
                    <img alt="A Guide To Find Inner Peace" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/41f37c3c8e2449bdb942e058f8703025.png 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/41f37c3c8e2449bdb942e058f8703025.png 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/41f37c3c8e2449bdb942e058f8703025.png" />
                    <img alt="Success Habits" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/cfd25b0ca7ac4a4ba33c9f24aa2d8780.jpg 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/cfd25b0ca7ac4a4ba33c9f24aa2d8780.jpg 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/cfd25b0ca7ac4a4ba33c9f24aa2d8780.jpg" />
                    <img alt="Read People Like a Book" loading="lazy" width={208} height={208} decoding="async" data-nimg={1} className="h-24 w-24 rounded-2xl md:h-52 md:w-52" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:256/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/055e2f23d33c4ff4b9605b1d31c8217f.png 1x, https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/055e2f23d33c4ff4b9605b1d31c8217f.png 2x" src="https://images.cdn.kukufm.com/w:480/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/055e2f23d33c4ff4b9605b1d31c8217f.png" />
                    <NavLink className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#3E434C] hover:bg-opacity-50 md:h-52 md:w-52" to="/hindi/genres/self-help">
                        <div>
                            <img loading="lazy" src="https://d1l07mcd18xic4.cloudfront.net/static/arrow-right-white.svg" alt="pupufm Explore Shows" className="m-auto mb-2" />
                            <div className="text-center text-sm font-bold text-white transition duration-300 ease-in-out hover:scale-125 md:text-2xl">
                                Explore
                                <br />
                                all shows
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="relative overflow-hidden bg-[#272A30]">
                <div className="relative flex flex-col-reverse justify-between px-5 md:flex-row lg:px-24">
                    <div className="grid grid-cols-3 gap-6 w-full md:py-20">
                        <div className="flex flex-col justify-between rounded-xl border border-[#3E434C] p-5 lg:w-full">
                            <img alt="Listen In Background | Kukufm" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="h-8 w-8 object-contain lg:h-16 lg:w-16" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:64/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_0.png 1x, https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_0.png 2x" src="https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_0.png" />
                            <div className="mt-3 text-sm font-normal text-white lg:mt-5 lg:text-lg">Listen In Background</div>
                        </div>
                        <div className="flex flex-col justify-between rounded-xl border border-[#3E434C] p-5 lg:w-full">
                            <img alt="Download and listen to audio offline | Kukufm" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="h-8 w-8 object-contain lg:h-16 lg:w-16" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:64/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_1.png 1x, https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_1.png 2x" src="https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_1.png" />
                            <div className="mt-3 text-sm font-normal text-white lg:mt-5 lg:text-lg">Download and listen to audio offline</div>
                        </div>
                        <div className="flex flex-col justify-between rounded-xl border border-[#3E434C] p-5 lg:w-full">
                            <img alt="Subscribe Premium at best offers | Kukufm" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="h-8 w-8 object-contain lg:h-16 lg:w-16" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:64/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_2.png 1x, https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_2.png 2x" src="https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_2.png" />
                            <div className="mt-3 text-sm font-normal text-white lg:mt-5 lg:text-lg">Subscribe Premium at best offers</div>
                        </div>
                        <div className="flex flex-col justify-between rounded-xl border border-[#3E434C] p-5 lg:w-full">
                            <img alt="Get AI show  recommendations | Kukufm" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="h-8 w-8 object-contain lg:h-16 lg:w-16" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:64/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_3.png 1x, https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_3.png 2x" src="https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_3.png" />
                            <div className="mt-3 text-sm font-normal text-white lg:mt-5 lg:text-lg">Get AI show recommendations</div>
                        </div>
                        <div className="flex flex-col justify-between rounded-xl border border-[#3E434C] p-5 lg:w-full">
                            <img alt="Playback speed. Listen in 1.5X and 2X | Kukufm" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="h-8 w-8 object-contain lg:h-16 lg:w-16" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:64/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_4.png 1x, https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_4.png 2x" src="https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_4.png" />
                            <div className="mt-3 text-sm font-normal text-white lg:mt-5 lg:text-lg">Playback speed. Listen in 1.5X and 2X</div>
                        </div>
                        <div className="flex flex-col justify-between rounded-xl border border-[#3E434C] p-5 lg:w-full">
                            <img alt="Notes and other premium features | Kukufm" loading="lazy" width={64} height={64} decoding="async" data-nimg={1} className="h-8 w-8 object-contain lg:h-16 lg:w-16" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:64/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_5.png 1x, https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_5.png 2x" src="https://images.cdn.kukufm.com/w:128/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/landing_feature_5.png" />
                            <div className="mt-3 text-sm font-normal text-white lg:mt-5 lg:text-lg">Notes and other premium features</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 lg:py-20">
                <div className="grid grid-cols-1 space-y-6 p-5 md:grid-cols-3 md:space-y-0 lg:p-24">
                    <div className="space-y-6 pr-12">
                        <img alt="Kukufm" loading="lazy" width={88} height={22} decoding="async" data-nimg={1} className="h-8 w-auto object-contain" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:96/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/kukufm_new_landing.png 1x, /images/logo.png 2x" src="/images/logo.png" />
                        <div className="text-base font-normal text-red-500">FOLLOW US ON</div>
                        <div className="flex space-x-8">
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <img alt="pupufm Facebook" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} className="h-6 w-6" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:32/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/fb_new_landing.png 1x, https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/fb_new_landing.png 2x" src="https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/fb_new_landing.png" />
                            </NavLink>
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <img alt="pupufm Youtube" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} className="h-6 w-6" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:32/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/youtube_new_landing.png 1x, https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/youtube_new_landing.png 2x" src="https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/youtube_new_landing.png" />
                            </NavLink>
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <img alt="pupufm Twitter" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} className="h-6 w-6" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:32/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/twitter_new_landing.png 1x, https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/twitter_new_landing.png 2x" src="https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/twitter_new_landing.png" />
                            </NavLink>
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <img alt="pupufm Linkedin" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} className="h-6 w-6" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:32/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/linkedin_new_landing.png 1x, https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/linkedin_new_landing.png 2x" src="https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/linkedin_new_landing.png" />
                            </NavLink>
                            <NavLink target="_blank" rel="noreferrer" to="/">
                                <img alt="pupufm Instagram" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} className="h-6 w-6" style={{ color: "transparent" }} srcSet="https://images.cdn.kukufm.com/w:32/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/instagram_new_landing.png 1x, https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/instagram_new_landing.png 2x" src="https://images.cdn.kukufm.com/w:48/f:webp/q:75/https://d1l07mcd18xic4.cloudfront.net/static/instagram_new_landing.png" />
                            </NavLink>
                        </div>
                        <div className="hidden font-normal leading-loose text-gray-500 md:block">
                            © 2023 Pupu FM (Dreamers)
                            <br />
                            No Rights Reserved
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-6 md:grid-cols-4 md:justify-items-end">
                        <div className="flex flex-col space-y-6">
                            <div to="/" className="text-base font-normal text-red-500">
                                COMPANY
                            </div>
                            <NavLink className="text-base font-normal text-white" to="/about-us">
                                About Us
                            </NavLink>
                            <NavLink target="_blank" rel="noreferrer" to="/" className="text-base font-normal text-white">
                                Career
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Our Team
                            </NavLink>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="text-base font-normal text-red-500">GENERAL</div>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Help &amp; Support
                            </NavLink>
                            <NavLink to="/" className="text-base font-normal text-white">
                                Blog
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Partner Program
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Pupu FM for Business
                            </NavLink>
                            <NavLink to="/" target="_blank" rel="noreferrer" className="text-base font-normal text-white">
                                Creator Login
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" target="_blank" rel="noreferrer" to="/">
                                Pupu FM Pustak
                            </NavLink>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="text-base font-normal text-red-500">LEGAL</div>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Contact Us
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Payments Policy
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Privacy Policy
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Piracy Policy
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Terms and Condition
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/">
                                Report abuse (DMCA)
                            </NavLink>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="text-base font-normal text-red-500">GENRES</div>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/self-help">
                                Self Help
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/personal-finance">
                                Personal Finance
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/historical">
                                Historical
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/information">
                                Information
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/religion">
                                Religion
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/career">
                                Career
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/genres/love">
                                Love
                            </NavLink>
                            <NavLink className="text-base font-normal text-white" to="/hindi/audio-book">
                                All Genres
                            </NavLink>
                        </div>
                    </div>
                    <div className="block pb-8 text-center font-normal leading-loose text-gray-500 md:hidden">
                        © 2023 Pupu FM (Dreamers)
                        <br />
                        All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
