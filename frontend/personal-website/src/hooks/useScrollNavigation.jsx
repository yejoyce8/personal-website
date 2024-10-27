import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function useScrollNavigation(nextPage, prevPage) {
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
                navigate(nextPage);
            } else if (window.scrollY === 0) {
                navigate(prevPage);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, [navigate, nextPage, prevPage]);
}