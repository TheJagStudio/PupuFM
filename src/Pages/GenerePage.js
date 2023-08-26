import React, { useEffect, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

import { useAtom } from "jotai";
import { LanguageAtom, preferredLangAtom } from "../Variables";

const GenerePage = () => {
    const data = useParams("data");
    const { category, genere, lang } = data;
    const [language, setLanguage] = useAtom(LanguageAtom);
    const [preferredLang, setPreferredLang] = useAtom(preferredLangAtom);
    const [page, setPage] = useState(1);
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        if (lang !== "content-types") {
            setLanguage(lang);
            setPreferredLang("english");
        }
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(process.env.REACT_APP_SERVER + "/api/genereDetails/" + genere + "?lang=" + language + "&preferredLang=" + preferredLang + "&page=" + page, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setShows(result["shows"]);
                setHasMore(result["has_more"]);
                setLoading(false);
            })
            .catch((error) => console.log("error", error));
    }, [genere, category]);
    return (
        <div>
            {loading && (
                <div className="fixed w-full h-full top-0 left-0 z-50 bg-white flex items-center justify-center">
                    <Player className="w-1/3 h-auto hue-rotate-[-60deg] saturate-[5]" autoplay loop background="#ffffff00" src="/images/loader.json">
                        <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
                    </Player>
                </div>
            )}
            <Navbar />
            <div className="m-5">
                <div className="flex flex-wrap justify-center">
                    {shows.map((show, index) => {
                        return (
                            <div key={index} className="hover:scale-90 transition-all">
                                <div className="mr-5 ml-2 relative">
                                    <a href={show.web_uri}>
                                        <div className="h-36 w-36 md:h-48 md:w-48 inline-block relative flex-shrink-0">
                                            <picture>
                                                {Object.keys(show.image_sizes).map((image, index) => {
                                                    return <source key={index} media={"(max-width: " + image + "px)"} srcSet={show.image_sizes[image]} />;
                                                })}

                                                <img className="rounded-lg contain" loading="lazy" src={show.original_image} alt={show.title} />
                                            </picture>
                                        </div>
                                    </a>
                                </div>
                                <a href="/show/nps-500-rs-mein-safest-investment">
                                    <h3 style={{ width: 140 }} className="my-2 mr-2 px-2 text-sm truncate-2-lines font-medium text-left">
                                        {show.title}
                                    </h3>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
            {hasMore && (
                <div className="flex items-center justify-center mt-3 mb-24">
                    <button
                        onClick={() => {
                            var requestOptions = {
                                method: "GET",
                                redirect: "follow",
                            };
                            fetch(process.env.REACT_APP_SERVER + "/api/genereDetails/" + genere + "?lang=" + language + "&preferredLang=" + preferredLang + "&page=" + (page + 1), requestOptions)
                                .then((response) => response.json())
                                .then((result) => {
                                    let temp = [...shows];
                                    setShows(temp.concat(result["shows"]));
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
    );
};

export default GenerePage;
