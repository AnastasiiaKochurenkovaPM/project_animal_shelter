import React from "react";
import s from './Carousel.module.css';
import {useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate('/AdvertisementPage/' + props.id)
  }
    return (
        <div className={s.card}>
                <button className={s.home} onClick={goto}><img src={props.img} /></button>
            <div className={s.block}>
                <div className={s.name}>{props.name}</div>
                <div className={s.city}>{props.city}</div>
            </div>
        </div>
    )
}

export default Card