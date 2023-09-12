import React, {useEffect, useState} from "react";
import s from './AdvertisementPage.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios"
import {useParams} from 'react-router-dom';

const AdvertisementPage = () => {
    const [data, setData] = useState([]);
    const {id} = useParams()
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "GetOneInProfile/" + id, {
            withCredentials: true,
        })
        .then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <>
        <div className={'_container'}>
            <h1 className={`${s.h1} `}>
                {data.nameAnimal}
            </h1>
            <div className={s.content}>
                <div className={s.images}>
                    <div className={s.big_img}><img src={data.img1} /></div>
                    <div className={`${s.small_img} ${s.img2}`}><img src={data.img2} /></div>
                    <div className={`${s.small_img} ${s.img3}`}><img src={data.img3} /></div>
                </div>
                <div className={s.data}>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Ім’я тварини</div>
                        <div className={s.data_info}>{data.nameAnimal}</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Тип тварини</div>
                        <div className={s.data_info}>{data.type}</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Стать</div>
                        <div className={s.data_info}>{data.sex}</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Вік</div>
                        <div className={s.data_info}>{data.age}</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Стерилізація</div>
                        <div className={s.data_info}>{data.ster}</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Вакцинація</div>
                        <div className={s.data_info}>{data.vac}</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Назва притулку</div>
                        <div className={s.data_info}>dnipro</div>
                    </div>
                    <div className={s.data_item}>
                        <div className={s.data_name}>Місто</div>
                        <div className={s.data_info}>{data.city}</div>
                    </div>
                    <div className={s.buttons}>
                        <NavLink to={'/PetPage/' + data.ShelterId}>
                            <button className={s.button}>
                                <p>Зв'язатися з притулком</p>
                            </button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default AdvertisementPage