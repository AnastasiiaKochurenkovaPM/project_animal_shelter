import React from "react";
import s from "./Ads.module.css";
import {useNavigate} from "react-router-dom";

const Ad = (props) => {
    const navigate = useNavigate();
    const goto = () => {
        navigate('/AdvertisementPage/' + props.id)
    }
    return (
        <div>
            <div className={s.ads}>
                <button className={s.home} onClick={goto}><img src={props.img}/></button>
                <div className={s.title}>
                    {props.name}
                    <div className={s.cites}>{props.city}</div>
                </div>
                <div className={s.edit}>
                    <button className={s.home} onClick={goto}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20.0495" cy="20.3948" rx="19.1803" ry="19.4327" fill="white"/>
                            <path
                                d="M19.9844 10.9277L23.4885 14.4579V12.7891H26.8629L27.1224 17.9238L29.3936 20.2345V21.8391H26.8629L27.1224 29.8621H22.2556L22.0868 27.106V25.1631H20.1196V25.0249V24.8867H22.0868V22.9518H20.1196H17.8714V25.1453V27.098H18.7847H19.8386V25.1631H17.8714V24.8867H19.8386V22.9518H20.1196V24.8867V27.098L22.0868 27.106L22.2556 29.8621H12.9114V21.8391H10.7051V20.2345L19.9844 10.9277Z"
                                fill="#FD7D00"/>
                        </svg>


                    </button>
                </div>
            </div>
        </div>
    )
}
export default Ad;
