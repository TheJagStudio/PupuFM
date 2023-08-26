import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAtom } from "jotai";
import { LanguageAtom, preferredLangAtom } from "../Variables";

const Navbar = () => {
    const [language, setLanguage] = useAtom(LanguageAtom);
    const [preferredLang, setPreferredLang] = useAtom(preferredLangAtom);
    const languages = [
        ["English", "english", "अंग्रेज़ी", "/home/english"],
        ["हिंदी", "hindi", "Hindi", "/home/hindi"],
        ["ગુજરાતી", "gujarati", "Gujarati", "/home/gujarati"],
        ["मराठी", "marathi", "Marathi", "/home/marathi"],
        ["বাংলা", "bengali", "Bangla", "/home/bengali"],
        ["తెలుగు", "telugu", "Telugu", "/home/telugu"],
        ["ਪੰਜਾਬੀ", "punjabi", "Punjabi", "/home/punjabi"],
        ["தமிழ்", "tamil", "Tamil", "/home/tamil"],
        ["മലയാളം", "malayalam", "Malayalam", "/home/malayalam"],
        ["ಕನ್ನಡ", "kannada", "Kannada", "/home/kannada"],
        ["ଓଡିଆ", "oriya", "Oriya", "/home/oriya"],
        ["سنڌي", "sindhi", "Sindhi", "/home/sindhi"],
        ["English (US)", "english-us", "अंग्रेज़ी", "/home/english-us"],
        ["اردو", "urdu", "Urdu", "/home/urdu"],
        ["অসমীয়া", "assamese", "Assamese", "/home/assamese"],
        ["भोजपुरी", "bhojpuri", "Bhojpuri", "/home/bhojpuri"],
    ];
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(process.env.REACT_APP_SERVER + "/api/menu/?preferred_lang=" + preferredLang + "&lang=" + language, requestOptions)
            .then((response) => response.json())
            .then((result) => setMenu(result["items"]))
            .catch((error) => console.log("error", error));
    }, [language, preferredLang]);
    return (
        <>
            {/*Header  */}
            <header className="w-full md:h-32 h-20 flex flex-col items-center justify-center font-Inter select-none">
                {/* Kuku Main Header */}
                <div className="w-full md:h-20 h-12 bg-primary-500 flex items-center justify-between xl:px-16 lg:px-12 md:px-10 px-8">
                    <div className="flex items-center justify-center gap-4">
                        {/* Menu Btn */}
                        <button className="md:w-8 w-6 md:h-8 h-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                        {/* Logo */}
                        <NavLink className="cursor-pointer h-6 sm:h-7 text-white" to="/">
                            <img src="/images/logo.png" alt="Kuku FM Logo" className="h-full scale-125" />
                        </NavLink>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <div className="hidden md:flex items-center justify-center gap-6">
                            {/* Search Div */}
                            <div className="h-10 px-3 border border-slate-300 rounded-lg flex items-center justify-center gap-2.5">
                                <input type="text" name="searchBar" id="searchBar" placeholder="Search..." className="outline-none bg-transparent w-full h-full text-sm text-white placeholder:text-slate-300 placeholder:text-sm " />
                                <button className="text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </button>
                            </div>
                            {/* Languages Div */}
                            <div className="group/language h-14 hover:bg-white flex items-center justify-center rounded-t-lg relative">
                                {/* Lang Display */}
                                <div className="group-hover/language:bg-white cursor-pointer px-3">
                                    <p className="flex items-center text-white gap-2 font-bold group-hover/language:text-black">
                                        Content Languages
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="text-white group-hover/language:text-black" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </p>
                                    <p className="text-sm text-white group-hover/language:text-slate-500 capitalize">{preferredLang}</p>
                                </div>
                                {/* Languages List */}
                                <div className="absolute z-50 top-[3.2rem] right-0 w-[250px] group-hover/language:h-fit h-0 overflow-hidden bg-white shadow-xl flex flex-col rounded-b-lg rounded-tl-lg">
                                    <div className="p-4 px-6">
                                        <p className="">Audio Language</p>
                                        <p className="text-sm text-slate-500">You can select one language at a time to listen to</p>
                                    </div>
                                    <hr className="" />
                                    {/* Languages */}
                                    <div className="w-full max-h-80 overflow-y-scroll h-full p-3 px-6 flex flex-col">
                                        {languages.map((item, index) => (
                                            <NavLink to={"/home/" + item[1]} key={index} className="w-full flex items-center justify-between py-2.5">
                                                <label htmlFor="hindi-lang" className="w-full cursor-pointer">
                                                    {item[0]}
                                                </label>

                                                <svg
                                                    onClick={() => {
                                                        setPreferredLang(item[1]);
                                                    }}
                                                    className={preferredLang === item[1] ? "text-primary-500" : "text-slate-500"}
                                                    viewBox="0 0 16 16"
                                                    width={20}
                                                    height={20}
                                                >
                                                    <path fill="currentColor" d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm4.1 5.788-5.142 5.165a.7.7 0 0 1-.446.212.673.673 0 0 1-.45-.219L3.9 8.792a.153.153 0 0 1 0-.219l.685-.685a.149.149 0 0 1 .215 0l1.708 1.708L11.2 4.869a.152.152 0 0 1 .108-.046.14.14 0 0 1 .108.046l.673.7a.152.152 0 0 1 .007.219Z" />
                                                </svg>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="group/language h-14 hover:bg-white flex items-center justify-center rounded-t-lg relative">
                                {/* Lang Display */}
                                <div className="group-hover/language:bg-white cursor-pointer px-3">
                                    <p className="flex items-center text-white gap-2 font-bold group-hover/language:text-black">
                                        Languages
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="text-white group-hover/language:text-black" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </p>
                                    <p className="text-sm text-white group-hover/language:text-slate-500 capitalize">{language}</p>
                                </div>
                                {/* Languages List */}
                                <div className="absolute z-50 top-[3.2rem] right-0 w-[250px] group-hover/language:h-fit h-0 overflow-hidden bg-white shadow-xl flex flex-col rounded-b-lg rounded-tl-lg">
                                    <div className="p-4 px-6">
                                        <p className="">Audio Language</p>
                                        <p className="text-sm text-slate-500">You can select one language at a time to see website</p>
                                    </div>
                                    <hr className="" />
                                    {/* Languages */}
                                    <div className="w-full max-h-80 overflow-y-scroll h-full p-3 px-6 flex flex-col">
                                        {languages.map((item, index) => (
                                            <div key={index} className="w-full flex items-center justify-between py-2.5">
                                                <label htmlFor="hindi-lang" className="w-full cursor-pointer">
                                                    {item[0]}
                                                </label>

                                                <svg
                                                    onClick={() => {
                                                        setLanguage(item[1]);
                                                    }}
                                                    className={language === item[1] ? "text-primary-500" : "text-slate-500"}
                                                    viewBox="0 0 16 16"
                                                    width={20}
                                                    height={20}
                                                >
                                                    <path fill="currentColor" d="M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm4.1 5.788-5.142 5.165a.7.7 0 0 1-.446.212.673.673 0 0 1-.45-.219L3.9 8.792a.153.153 0 0 1 0-.219l.685-.685a.149.149 0 0 1 .215 0l1.708 1.708L11.2 4.869a.152.152 0 0 1 .108-.046.14.14 0 0 1 .108.046l.673.7a.152.152 0 0 1 .007.219Z" />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:hidden items-center justify-center gap-5">
                            <button className="text-white w-5 h-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <button className="text-white w-6 h-6 p-1.5 rounded bg-white/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:h-12 h-8 bg-[#FD7D69] xl:px-16 lg:px-12 md:px-10 flex flex-nowrap items-center justify-around  sm:justify-start">
                    {menu.map((item, index) => {
                        return (
                            <div key={index} className="h-full sm:w-auto w-full flex-nowrap flex items-center justify-center hover:bg-white group/hdr-grp-1 relative">
                                <p className="w-full sm:px-6 px-2 whitespace-nowrap text-center text-white font-medium text-xs md:text-sm group-hover/hdr-grp-1:text-primary-500">{item.title}</p>
                                <div className="bg-white absolute top-full left-0 overflow-hidden group-hover/hdr-grp-1:scale-100 customScrollBar h-60 overflow-y-scroll lg:h-auto shadow-lg scale-0 w-44 z-10 flex flex-col md:p-5 p-2 px-6">
                                    {item.genres.map((item2, index2) => {
                                        return (
                                            <NavLink key={index2} to={item2.web_uri} className="hover:text-primary-500 hover:underline cursor-pointer text-sm py-2">
                                                {item2.title}
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </header>
        </>
    );
};

export default Navbar;
