import React from "react";
import s from "./Cabinet.module.css";
import AdsList from "./Ads/AdsList";

const Animals = () => {
    return (
        <div className={s.myAds}>
            <div className={`_container`}>
                <h2 className={s.h2}>Мої оголошення</h2>
                <div className={`${s.main} _container`}>
                    <AdsList/>
                </div>
            </div>

        </div>
    );
};

export default Animals;
