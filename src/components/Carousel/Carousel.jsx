import React, {useEffect, useState} from "react";
import Carousel from 'react-elastic-carousel'
import Card from "./Card";
import axios from "axios";
import s from './Carousel.module.css'

const Carousels = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "GetSomeAdvert", {
            withCredentials: true,
        })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]
    return (
        <div className={`_container `}>
            <Carousel  className={s.Carousel} breakPoints={breakPoints} >
                {data.map((item, index) => {
                    return (
                        <Card img={item.img1} name={item.nameAnimal} id={item.id} city={item.city} key={index} />
                    );
                })}
            </Carousel>
        </div>
    )
}


export default Carousels