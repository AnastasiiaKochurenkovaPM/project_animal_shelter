import React, {useEffect, useState} from "react";
import s from './MyAdvertisementPage/MyAdvertisementPage.module.css'
import axios from "axios"
import {useParams, useNavigate} from 'react-router-dom';

const Delete = () => {
    const [info, setInfo] = useState([]);
    const {id} = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "Delete/" + id, {
            withCredentials: true,
        })
        .then((res) => {
            setInfo(res.info);
        })
        .catch((err) => console.log(err));
    }, []);

    if(info){
        navigate('/Cabinet')
        alert('Ваше оголошення успішно видалено!')
    }else{
        alert('Упс... Щось пішло не так!')
    }
}

export default Delete