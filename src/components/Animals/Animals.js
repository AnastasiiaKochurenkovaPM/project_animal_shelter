import React, {useEffect} from "react";
import s from "./Animals.module.css";
import Filter from "./Filter/Filter";
import Ads from "./Ads/Ads";

const Animals = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={`${s.main} _container`}>
            <Filter/>
            <Ads/>
        </div>
    );
};

export default Animals;
