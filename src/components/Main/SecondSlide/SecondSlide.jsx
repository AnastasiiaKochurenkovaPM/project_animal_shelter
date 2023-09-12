import React from "react";
import s from './SecondSlide.module.css'
import {NavLink} from "react-router-dom";
import Carousel from "../../Carousel/Carousel";

const SecondSlide = (props) => {
    return (
        <div className={s.secondSlide}>
            <div className={s.secondSlide_title}>
                <div className={s.text1}>Вони все ще чекають на люблячого господаря</div>
                <NavLink className={s.link} to="/Animals">
                    <div className={s.text2}>
                        <div>Більше оголошень</div>
                        <i className={s.arrow}></i>
                    </div>
                </NavLink>
            </div>

            <div className={s.animals}>
                <Carousel/>
            </div>
        </div>
    )
}

export default SecondSlide;
