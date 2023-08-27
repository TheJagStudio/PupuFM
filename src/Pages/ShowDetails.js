import React, { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
// Compoments
import Navbar from "../Components/Navbar";

import { NavLink, useParams } from "react-router-dom";

import { useAtom } from "jotai";
import { LanguageAtom, PlayerDetailsAtom, PlayerStatusAtom, showPlayerAtom, PlayerRefAtom, currValueAtom } from "../Variables";

const ShowDetails = () => {
    const [playerStatus, setPlayerStatus] = useAtom(PlayerStatusAtom);
    const [playerRefState, setPlayerRefState] = useAtom(PlayerRefAtom);
    const [currValue, setcurrValue] = useAtom(currValueAtom);
    const [showPlayer, setShowPlayer] = useAtom(showPlayerAtom);
    const [showDetails, setShowDetails] = useState({});
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [language, setLanguage] = useAtom(LanguageAtom);
    const [playerDetails, setPlayerDetails] = useAtom(PlayerDetailsAtom);
    const [page, setPage] = useState(1);
    const name = useParams("name");

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(process.env.REACT_APP_SERVER + "/api/showDetails/show/" + name["name"], requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setShowDetails(result["show"]);
                setEpisodes(result["episodes"]);
                setHasMore(result["hasMore"]);
                setLoading(false);
            })
            .catch((error) => console.log("error", error));
    }, []);

    function timeConvert(n) {
        const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const d = new Date(n);
        let month = monthArr[d.getMonth()];
        let day = d.getDay();
        let year = d.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    return (
        <>
            <Navbar />
            {/* Main */}
            {loading && (
                <div className="fixed w-full h-full top-0 left-0 z-50 bg-white flex items-center justify-center">
                    <Player className="w-1/3 h-auto hue-rotate-[-60deg] saturate-[5]" autoplay loop background="#ffffff00" src="/images/loader.json">
                        <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
                    </Player>
                </div>
            )}
            <section className="sm:px-10 px-6 w-full h-full flex items-center justify-center py-6 font-Inter  mb-24 ">
                <div className="w-full h-full md:w-3/4 xl:w-3/6">
                    {/* Show Details */}
                    <div>
                        {/* Show Image */}
                        <div className="relative">
                            <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 bg-white rounded-full p-0.5">
                                    <path fill="currentColor" d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                            <img role="presentation" className="m-auto rounded-lg loaded" src={showDetails?.originalImage} alt="Shrimad Bhagwad Geeta: Samasyaon Ka Samadhan in hindi | undefined हिन्दी मे |  Audio book and podcasts" style={{ height: 150, width: 150 }} />
                        </div>
                        {/* Show Details */}
                        <div className="relative mt-5">
                            <div className="flex items-start gap-2 sm:items-center justify-between">
                                <p className="font-semibold">{showDetails?.title}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="flex items-center justify-center bg-green-500 text-white text-xs gap-1 p-1.5 py-1 rounded">
                                        {parseFloat(showDetails?.overallRating)}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16" className="w-2 h-2">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </p>
                                    <button className="sm:block hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4" viewBox="0 0 22 20">
                                            <path d="M8.01717 8.06675L13.9828 5.74667M7.88792 10.8507L14.1121 13.9627M1.375 9.3125C1.375 10.2242 1.73716 11.0985 2.38182 11.7432C3.02648 12.3878 3.90082 12.75 4.8125 12.75C5.72418 12.75 6.59852 12.3878 7.24318 11.7432C7.88784 11.0985 8.25 10.2242 8.25 9.3125C8.25 8.40082 7.88784 7.52648 7.24318 6.88182C6.59852 6.23716 5.72418 5.875 4.8125 5.875C3.90082 5.875 3.02648 6.23716 2.38182 6.88182C1.73716 7.52648 1.375 8.40082 1.375 9.3125ZM13.75 4.5C13.75 5.41168 14.1122 6.28602 14.7568 6.93068C15.4015 7.57534 16.2758 7.9375 17.1875 7.9375C18.0992 7.9375 18.9735 7.57534 19.6182 6.93068C20.2628 6.28602 20.625 5.41168 20.625 4.5C20.625 3.58832 20.2628 2.71398 19.6182 2.06932C18.9735 1.42466 18.0992 1.0625 17.1875 1.0625C16.2758 1.0625 15.4015 1.42466 14.7568 2.06932C14.1122 2.71398 13.75 3.58832 13.75 4.5ZM13.75 15.5C13.75 16.4117 14.1122 17.286 14.7568 17.9307C15.4015 18.5753 16.2758 18.9375 17.1875 18.9375C18.0992 18.9375 18.9735 18.5753 19.6182 17.9307C20.2628 17.286 20.625 16.4117 20.625 15.5C20.625 14.5883 20.2628 13.714 19.6182 13.0693C18.9735 12.4247 18.0992 12.0625 17.1875 12.0625C16.2758 12.0625 15.4015 12.4247 14.7568 13.0693C14.1122 13.714 13.75 14.5883 13.75 15.5Z" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="text-sm flex items-center justify-start gap-1.5 mb-1 mt-0.5">
                                <p className="bg-gray-100 rounded-sm text-xs font-medium text-gray-400 p-0.5">{showDetails?.metaData?.ageRating}</p>
                                <p className="font-bold">{showDetails?.nListens}</p>
                                <p className="text-slate-500">Listens</p>
                            </div>
                            <div className="flex items-center justify-between text-xs text-slate-400  uppercase">
                                <div className="flex items-center justify-center gap-3 ">
                                    <p>
                                        {showDetails?.contentType?.title}&nbsp;&nbsp;|&nbsp;&nbsp;{showDetails?.lang?.title}&nbsp;&nbsp;|&nbsp;&nbsp;{showDetails?.genre?.title}
                                    </p>
                                </div>
                                <p>{parseInt(showDetails?.durationS * 0.0166667)}min</p>
                            </div>
                        </div>
                        {/* Play Pause Button */}
                        {!playerStatus ? (
                            <button
                                onClick={() => {
                                    document.getElementsByClassName("episodes")[0].click();
                                }}
                                className="flex items-center justify-center gap-2 w-full bg-primary-500 rounded-lg py-2.5 text-white font-semibold my-5"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                                Play
                            </button>
                        ) : (
                            <button className="flex items-center justify-center gap-2 w-full bg-primary-500 rounded-lg py-2.5 text-white font-semibold my-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                Pause
                            </button>
                        )}

                        {/* Description */}
                        <div>
                            <div className="flex items-center justify-start gap-2">
                                <img src={showDetails?.author?.avatarCdn} className="w-6 h-6 rounded-full" alt="" />
                                <p className="text-xs font-semibold text-gray-600">{showDetails?.author?.name}</p>
                            </div>
                            <p className="text-sm mt-2 leading-loose text-slate-500 h-14 overflow-hidden" id="showDesc">
                                {showDetails?.description}
                            </p>
                            <button
                                className="text-primary-500 underline text-sm mt-2 cursor-pointer"
                                onClick={() => {
                                    let div = document.getElementById("showDesc");
                                    div.classList.toggle("h-full");
                                    div.classList.toggle("h-14");
                                }}
                            >
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Episodes */}
                    <div className="flex flex-col items-center justify-center w-full mt-6">
                        <h2 className="text-primary-500 font-medium text-lg border-b-2 border-primary-500 w-full text-center pb-2">{showDetails?.nEpisodes} Episodes</h2>
                        {/* Episodes List */}
                        <div className="w-full">
                            {episodes.map((episode, index) => (
                                <div
                                    className="flex items-start w-full gap-3 py-3 border-b cursor-pointer episodes"
                                    key={index}
                                    onClick={() => {
                                        playerRefState?.current?.pause();
                                        try {
                                            clearInterval(window.playerInterval);
                                        } catch (e) {}
                                        var requestOptions = {
                                            method: "GET",
                                            redirect: "follow",
                                        };
                                        fetch(process.env.REACT_APP_SERVER + "/api/episodeDetail/" + episode.slug, requestOptions)
                                            .then((response) => response.json())
                                            .then((result) => {
                                                let data = result["pageProps"]["episode"];
                                                let temp = {};
                                                temp["name"] = data.title;
                                                temp["image"] = data.image;
                                                temp["audio"] = data.content.hlsUrl;
                                                temp["published"] = data.publishedOn;
                                                temp["duration"] = data.durationS;
                                                setPlayerDetails(temp);
                                                setShowPlayer(true);
                                            })
                                            .catch((error) => console.log("error", error));
                                    }}
                                >
                                    <img className="w-14 h-14 rounded-lg loaded" src={episode.image} alt="Shrimad Bhagwad Geeta: Samasyaon Ka Samadhan in hindi | undefined हिन्दी मे |  Audio book and podcasts" />
                                    <div className="w-full h-14 flex items-center justify-between pr-3 group/playShow">
                                        <div className="h-full flex flex-col items-start justify-center ">
                                            <p className="font-medium group-hover/playShow:text-primary-500 transition-all">{episode.title}</p>
                                            <p className="text-gray-400 text-xs font-light">
                                                {episode.duration_s !== undefined ? parseInt(episode.duration_s * 0.0166667) : parseInt(episode.durationS * 0.0166667)}min • {episode.published_on !== undefined ? timeConvert(episode.published_on) : timeConvert(episode.publishedOn)}
                                            </p>
                                        </div>
                                        <button className="h-full flex items-center justify-center group-hover/playShow:text-primary-500 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7" viewBox="0 0 16 16">
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {hasMore && (
                        <div className="flex items-center justify-center mt-3">
                            <button
                                onClick={() => {
                                    var requestOptions = {
                                        method: "GET",
                                        redirect: "follow",
                                    };
                                    fetch(process.env.REACT_APP_SERVER + "/api/episodes/" + name["name"] + "?lang=" + language + "&page=" + (page + 1), requestOptions)
                                        .then((response) => response.json())
                                        .then((result) => {
                                            let temp = [...episodes];
                                            setEpisodes(temp.concat(result["episodes"]));
                                            setHasMore(result["has_more"]);
                                            setPage(page + 1);
                                        })
                                        .catch((error) => console.log("error", error));
                                }}
                                className="bg-primary-500 py-2 px-6 rounded-lg text-white hover:scale-110 transition-all duration-300"
                            >
                                + Load More +
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ShowDetails;
