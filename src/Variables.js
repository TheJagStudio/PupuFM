import { atom } from "jotai";

export const PlayerStatusAtom = atom(false);
export const LanguageAtom = atom("english");
export const preferredLangAtom = atom("hindi");
export const showPlayerAtom = atom(false);
export const PlayerDetailsAtom = atom({
    name: "1. Murkh Ko Salah Dena Nasamjhi Hain",
    image: "https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/5ae0cd1447954fba9f563de8adbb1a4e.png",
    audio: "",
    published: "1. Murkh Ko Salah Dena Nasamjhi Hain",
    duration: "284",
});
export const PlayerRefAtom = atom(null);
export const currValueAtom = atom(0);
