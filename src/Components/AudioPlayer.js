import React, { useRef, useState, useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";

import { useAtom } from "jotai";
import { PlayerStatusAtom, showPlayerAtom, PlayerDetailsAtom, PlayerRefAtom, currValueAtom } from "../Variables";

const AudioPlayer = () => {
    const playerRef = useRef(null);
    const [playerRefState, setPlayerRefState] = useAtom(PlayerRefAtom);
    const [playerStatus, setPlayerStatus] = useAtom(PlayerStatusAtom);
    const [playerDetails, setPlayerDetails] = useAtom(PlayerDetailsAtom);
    const [showPlayer, setShowPlayer] = useAtom(showPlayerAtom);
    const [currValue, setcurrValue] = useAtom(currValueAtom);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        setPlayerRefState(playerRef);
    }, []);
    const handleProgressChange = (event) => {
        let currTimeDur = event.target.value;
        setcurrValue(event.target.value);
        playerRef.current.currentTime = (currTimeDur / 100) * playerRef.current.duration;
    };

    const handleVolumeChange = (event) => {
        let currVolume = event.target.value;
        playerRef.current.volume = currVolume;
        setVolume(currVolume);
    };
    function dateConvert(n) {
        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const d = new Date(n);
        let month = monthArr[d.getMonth()];
        let day = d.getDay();
        let year = d.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    return (
        <>
            <div className={"w-full min-h-24 h-fit bg-gray-100 fixed bottom-0 z-50 left-0 shadow-lg  transition-all duration-500 origin-bottom " + (showPlayer ? "" : "translate-y-[110%]")}>
                {/* Audio */}
                <ReactHlsPlayer id="HLSPlayer" playerRef={playerRef} src={process.env.REACT_APP_SERVER + "/api/file/host?url=" + playerDetails.audio} autoPlay={false} controls={true} volume={volume} className="absolute top-0 left-0 opacity-0 h-0 w-0 overflow-hidden" />

                {/* Input Range */}
                <input type="range" id="playerInput" className="absolute top-0 left-0 w-full accent-primary-500 z-10 bg-transparent h-1 appearance-none !outline-none border-none cursor-pointer" min={0} max={100} value={currValue} step={0.0001} onChange={handleProgressChange} />
                <div id="playerInputRange" className="absolute top-0 left-0 h-1 z-0 bg-primary-500 max-w-full transition-none duration-0" style={{ width: currValue + "%" }} />

                {/* Player Info */}
                <div className="grid md:grid-cols-9 grid-cols-3 md:px-10 px-5 py-5">
                    {/* Episode Desc */}
                    <div className="flex items-center justify-center gap-3 mx-auto col-span-2">
                        <img className="w-14 h-14 rounded-lg loaded" src={playerDetails.image} alt="Shrimad Bhagwad Geeta: Samasyaon Ka Samadhan in hindi | undefined हिन्दी मे |  Audio book and podcasts" />
                        <div className="h-14 w-full flex flex-col items-start justify-center">
                            <p className="font-medium text-sm group-hover/playShow:text-primary-500 transition-all w-40 line-clamp-2">{playerDetails.name}</p>
                            <p className="text-gray-600 text-xs">
                                {parseInt(playerDetails.duration * 0.0166667)} mins • {dateConvert(playerDetails.published)}
                            </p>
                        </div>
                    </div>
                    {/* Speed Control */}
                    <div className="flex flex-col items-center justify-center col-span-1">
                        <div class="text-sm text-black text-opacity-60 px-2 relative z-100">
                            <div class="z-20 absolute bottom-12 md:bottom-16 mb-2 flex flex-col left-1/2 -translate-x-1/2 translate-y-28 scale-0 transform bg-primary-500 shadow-lg rounded-t-md transition-all duration-300" id="audioSpeed">
                                <button type="button" class="p-2 px-4 focus:outline-none text-xs font-semibold text-white text-opacity-80">
                                    2 x
                                </button>
                                <button type="button" class="p-2 px-4 focus:outline-none text-xs font-semibold text-white text-opacity-80">
                                    1.75 x
                                </button>
                                <button type="button" class="p-2 px-4 focus:outline-none text-xs font-semibold text-white text-opacity-80">
                                    1.5 x
                                </button>
                                <button type="button" class="p-2 px-4 focus:outline-none text-xs font-semibold text-white text-opacity-80">
                                    1.25 x
                                </button>
                                <button type="button" class="p-2 px-4 focus:outline-none text-xs font-semibold text-white text-opacity-80">
                                    Normal
                                </button>
                                <button type="button" class="p-2 px-4 focus:outline-none text-xs font-semibold text-white text-opacity-80">
                                    0.75 x
                                </button>
                            </div>
                            <button
                                type="button"
                                class="text-center focus:outline-none"
                                onClick={() => {
                                    let audioSpeed = document.getElementById("audioSpeed");
                                    audioSpeed.classList.toggle("translate-y-28");
                                    audioSpeed.classList.toggle("scale-0");
                                }}
                            >
                                <div class="text-lg text-primary-500">1&nbsp;x</div>
                                <div class="text-sm font-semibold">speed</div>
                            </button>
                        </div>
                    </div>
                    {/* Controls */}
                    <div class="col-span-3 my-auto ">
                        <div class="flex justify-around items-center">
                            <button type="button" class="focus:outline-none opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24px" fill="none" color="black">
                                    <path stroke="#595959" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.25" d="M19.375 2.024v13.952a.625.625 0 0 1-.98.515L8.25 9.515a.624.624 0 0 1 0-1.03l10.146-6.976a.625.625 0 0 1 .979.515ZM.625.875h3.75v16.25H.625V.875Z"></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                class="focus:outline-none"
                                onClick={() => {
                                    playerRef.current.currentTime -= 10;
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24px" fill="none" color="rgb(255, 255, 255)">
                                    <path stroke="#595959" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" d="M13.5 21.75A9.75 9.75 0 1 0 3.75 12v1.5m0 0-3-3m3 3 3-3"></path>
                                    <path fill="#595959" d="M9.75 10.155V9.113h1.966V15h-1.175v-4.845H9.75ZM12.845 11.98c0-.931.168-1.661.505-2.189.343-.527.909-.791 1.697-.791.789 0 1.352.264 1.689.791.343.528.514 1.258.514 2.189 0 .937-.171 1.671-.514 2.204-.337.533-.9.8-1.689.8-.788 0-1.354-.267-1.697-.8-.337-.533-.505-1.267-.505-2.204Zm3.28 0c0-.399-.028-.732-.082-1.002a1.307 1.307 0 0 0-.31-.67c-.153-.172-.381-.258-.686-.258-.304 0-.536.086-.693.258a1.4 1.4 0 0 0-.31.67 5.72 5.72 0 0 0-.074 1.002c0 .409.025.753.074 1.034.049.274.152.497.31.67.158.167.389.25.693.25.305 0 .536-.083.694-.25.157-.173.26-.396.31-.67a6.13 6.13 0 0 0 .073-1.034Z"></path>
                                </svg>
                            </button>
                            {playerStatus ? (
                                <button
                                    type="button"
                                    id="HLSPlayerBtn"
                                    class="flex items-center justify-center h-14 w-14 bg-primary-500 text-white rounded-full focus:outline-none"
                                    onClick={() => {
                                        // pause
                                        setPlayerStatus(false);
                                        playerRef.current.pause();
                                        clearInterval(window.playerInterval);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 pl-0.5" viewBox="0 0 16 16">
                                        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    id="HLSPlayerBtn"
                                    class="flex items-center justify-center h-14 w-14 bg-primary-500 text-white rounded-full focus:outline-none"
                                    onClick={() => {
                                        //  play
                                        setPlayerStatus(true);
                                        playerRef.current.play();
                                        window.playerInterval = setInterval(() => {
                                            let audioCurrTime = playerRef.current.currentTime;
                                            let audioDuration = playerRef.current.duration;
                                            let percentage = (audioCurrTime / audioDuration) * 100;
                                            setcurrValue(percentage);
                                        }, 100);
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 pl-0.5" viewBox="0 0 16 16">
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                    </svg>
                                </button>
                            )}

                            <button
                                type="button"
                                class="focus:outline-none"
                                onClick={() => {
                                    playerRef.current.currentTime += 10;
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24px" fill="none" color="rgb(255, 255, 255)">
                                    <path stroke="#595959" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" d="M10.75 20.5a9.75 9.75 0 1 1 9.75-9.75v1.5m3-2.25-3 3-3-3"></path>
                                    <path fill="#595959" d="M7 9.155V8.113h1.966V14H7.791V9.155H7ZM10.095 10.98c0-.931.168-1.661.505-2.189.343-.527.909-.791 1.697-.791.789 0 1.352.264 1.689.791.343.528.514 1.258.514 2.189 0 .937-.171 1.671-.514 2.204-.337.533-.9.8-1.689.8-.788 0-1.354-.267-1.697-.8-.337-.533-.505-1.267-.505-2.204Zm3.28 0c0-.399-.028-.732-.082-1.002a1.307 1.307 0 0 0-.31-.67c-.153-.172-.381-.258-.686-.258-.304 0-.536.086-.693.258a1.4 1.4 0 0 0-.31.67c-.05.27-.074.603-.074 1.002 0 .409.025.753.074 1.034.049.274.152.497.31.67.158.167.389.25.693.25.305 0 .536-.083.694-.25.157-.173.26-.396.31-.67a6.13 6.13 0 0 0 .073-1.034Z"></path>
                                </svg>
                            </button>
                            <button type="button" class="focus:outline-none ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24px" fill="none" color="black">
                                    <path stroke="#595959" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.25" d="M.625 2.024v13.952a.625.625 0 0 0 .98.515L11.75 9.515a.624.624 0 0 0 0-1.03L1.604 1.509a.625.625 0 0 0-.979.515ZM15.625.875h3.75v16.25h-3.75V.875Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Volume */}
                    <div class="flex items-center mx-auto col-span-3 mt-1">
                        <div class="text-muted text-sm text-opacity-70 whitespace-nowrap">
                            {parseInt(playerRef?.current?.currentTime)}&nbsp;sec&nbsp;/&nbsp;{parseInt(playerDetails.duration)}&nbsp;sec
                        </div>
                        <div class="flex item-center ml-5">
                            <button
                                type="button"
                                class="focus:outline-none"
                                onClick={() => {
                                    setVolume(0);
                                }}
                            >
                                <img src="https://d1l07mcd18xic4.cloudfront.net/static/sound.svg" loading="lazy" alt="Sound Level" />
                            </button>
                            <div class="transform w-24 ml-2 relative top-1.5 ">
                                {/* <div class="relative">
                                    <input class="progress-bar rounded h-2" min="0" step="1" max="100" type="range" id="progressBar" value="100" />
                                    <div class="rounded absolute h-1 bg-muted bg-opacity-10 w-full"></div>
                                    <div class="absolute h-1 bg-primary-500"></div>
                                </div> */}
                                <input type="range" id="volumeInput" className="absolute top-0.5 left-0 w-full accent-primary-500 z-10 bg-transparent h-1 appearance-none !outline-none border-none cursor-pointer customInputThumb" min={0} max={1} value={volume} step={0.01} onChange={handleVolumeChange} />
                                <div id="volumeInputRange" className="absolute top-0.5 left-0 h-1 z-0 bg-primary-500 max-w-full transition-none duration-0 rounded" style={{ width: volume * 100 + "%" }} />
                            </div>
                            <div class="ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 cursor-pointer" viewBox="0 0 22 20">
                                    <path d="M8.01717 8.06675L13.9828 5.74667M7.88792 10.8507L14.1121 13.9627M1.375 9.3125C1.375 10.2242 1.73716 11.0985 2.38182 11.7432C3.02648 12.3878 3.90082 12.75 4.8125 12.75C5.72418 12.75 6.59852 12.3878 7.24318 11.7432C7.88784 11.0985 8.25 10.2242 8.25 9.3125C8.25 8.40082 7.88784 7.52648 7.24318 6.88182C6.59852 6.23716 5.72418 5.875 4.8125 5.875C3.90082 5.875 3.02648 6.23716 2.38182 6.88182C1.73716 7.52648 1.375 8.40082 1.375 9.3125ZM13.75 4.5C13.75 5.41168 14.1122 6.28602 14.7568 6.93068C15.4015 7.57534 16.2758 7.9375 17.1875 7.9375C18.0992 7.9375 18.9735 7.57534 19.6182 6.93068C20.2628 6.28602 20.625 5.41168 20.625 4.5C20.625 3.58832 20.2628 2.71398 19.6182 2.06932C18.9735 1.42466 18.0992 1.0625 17.1875 1.0625C16.2758 1.0625 15.4015 1.42466 14.7568 2.06932C14.1122 2.71398 13.75 3.58832 13.75 4.5ZM13.75 15.5C13.75 16.4117 14.1122 17.286 14.7568 17.9307C15.4015 18.5753 16.2758 18.9375 17.1875 18.9375C18.0992 18.9375 18.9735 18.5753 19.6182 17.9307C20.2628 17.286 20.625 16.4117 20.625 15.5C20.625 14.5883 20.2628 13.714 19.6182 13.0693C18.9735 12.4247 18.0992 12.0625 17.1875 12.0625C16.2758 12.0625 15.4015 12.4247 14.7568 13.0693C14.1122 13.714 13.75 14.5883 13.75 15.5Z" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AudioPlayer;
