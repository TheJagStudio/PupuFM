import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { useAtom } from "jotai";
import { LanguageAtom, preferredLangAtom } from "../Variables";

// Compoments
import Navbar from "../Components/Navbar";

const Home = () => {
    const [newSections, setNewSections] = useState([]);
    const [sections, setSections] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [language, setLanguage] = useAtom(LanguageAtom);
    const [preferredLang, setPreferredLang] = useAtom(preferredLangAtom);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const lang = useParams("lang");

    useEffect(() => {
        let tempLang = language;
        if (lang.lang !== undefined) {
            setLanguage(lang.lang);
            tempLang = lang.lang;
        }
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(process.env.REACT_APP_SERVER + "/api/home/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setNewSections(result);
                setLoading(false);
            })
            .catch((error) => console.log("error", error));

        fetch(process.env.REACT_APP_SERVER + "/api/genres?lang=" + tempLang + "&page=" + page + "&preferredLang=" + preferredLang, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setSections(result["items"]);
                setHasMore(result["has_more"]);
                setLoading(false);
            })
            .catch((error) => console.log("error", error));
    }, [language, preferredLang]);
    return (
        <>
            <Navbar />
            {loading && (
                <div className="fixed w-full h-full top-0 left-0 z-50 bg-white flex items-center justify-center">
                    <Player className="w-1/3 h-auto hue-rotate-[-60deg] saturate-[5]" autoplay loop background="#ffffff00" src="/images/loader.json">
                        <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
                    </Player>
                </div>
            )}
            <section className="w-full h-full xl:px-7 overflow-hidden py-6">
                <div className="w-full h-full overflow-x-scroll noScrollBar flex flex-nowrap items-center justify-start gap-6 pb-4 px-2">
                    {newSections.map((item, index) => {
                        return (
                            <NavLink key={index} to={item.webUrl} className="w-[300px] min-w-[300px] shadow-lg h-full font-Inter rounded-lg overflow-hidden hover:scale-90 transition-all duration-300 group/playBtn">
                                <div className="relative w-full">
                                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
                                    <img className="w-full h-full" src={item.image} alt={item.itemSlug} />
                                </div>
                                <div className="flex items-center justify-between gap-2 w-full mt-2 px-3 pb-3">
                                    <p className="w-full text-sm font-medium line-clamp-2">{item.title}</p>
                                    <button className="border-2 border-primary-500 group-hover/playBtn:bg-primary-500 transition-all duration-300 rounded-full p-1 pl-1.5 pr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-7 h-7 text-primary-500 group-hover/playBtn:text-white transition-all duration-300" viewBox="0 0 16 16">
                                            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                                        </svg>
                                    </button>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
            {sections?.map((item, index) => {
                let tempData = [];
                if (item.mixed_content_items !== undefined) {
                    tempData = item.mixed_content_items;
                } else {
                    tempData = item.shows;
                }
                return (
                    <section key={index} className="w-full h-full xl:my-8 xl:px-7 overflow-hidden font-Inter select-none ">
                        <h2 className="text-3xl font-bold mb-4 py-1">{item.title}</h2>
                        <div className="w-full h-full overflow-x-scroll noScrollBar flex flex-nowrap items-start justify-start gap-4 pb-4 px-2 ">
                            {tempData.map((item2, index2) => {
                                return (
                                    <NavLink key={index2} to={item2.web_uri} className="w-full min-w-[208px] h-full flex flex-col gap-3 hover:scale-90 transition-all">
                                        <img alt="poster1" src={item2.original_image !== undefined ? item2.original_image : item2.share_image_url} className="w-full h-52 object-cover object-center rounded-lg" />
                                        <p className="font-medium w-full line-clamp-2">{item2.title}</p>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
            {hasMore && (
                <div className="flex items-center justify-center mb-5">
                    <button
                        onClick={() => {
                            var requestOptions = {
                                method: "GET",
                                redirect: "follow",
                            };
                            fetch(process.env.REACT_APP_SERVER + "/api/genres?lang=" + language + "&page=" + (page + 1) + "&preferredLang=" + preferredLang, requestOptions)
                                .then((response) => response.json())
                                .then((result) => {
                                    let temp = [...sections];
                                    setSections(temp.concat(result["items"]));
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
        </>
    );
};

export default Home;
