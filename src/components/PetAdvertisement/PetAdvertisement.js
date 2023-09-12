import './PetAdvertisement.css';
import React from "react";
import { useState } from 'react';
import FormInput1 from "./FormInput1";
import FormInput from "../Registration/FormInput";
import Photo from "./photoAdd";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './Photo.css';


const PetAdvertisement = () => {
    const [valuesOne, setValuesOne] = useState({
        name: "",
        typeAnimal: "",
        gender: "",
        year: "",
        configvac: "",
        configster: "",
        require:true,
    });
    const [valuesTwo, setValuesTwo] = useState({
        username: "",
        city:"",
        phonenumber: "",
        require:true,
    });

    const [valuesThree, setValuesThree] = useState({
        confirmvac: "",
        confirmster:"",
        require:true,
    });

    const [state1, setState1] = useState({
        // file       : null,
        preview: 'https://i.pinimg.com/236x/b7/fb/fb/b7fbfb42d40791d1a260fd0328c645bc.jpg',
        profileImg: 'https://i.pinimg.com/236x/b7/fb/fb/b7fbfb42d40791d1a260fd0328c645bc.jpg',
    })

    const [state2, setState2] = useState({
        file: null,
        preview: 'https://i.pinimg.com/236x/b7/fb/fb/b7fbfb42d40791d1a260fd0328c645bc.jpg',
        profileImg2: 'https://i.pinimg.com/564x/35/04/aa/3504aac21731b68dc957aaa9486a3a84.jpg',
    })

    const [state3, setState3] = useState({
        file: null,
        preview: 'https://i.pinimg.com/236x/b7/fb/fb/b7fbfb42d40791d1a260fd0328c645bc.jpg',
        profileImg3: 'https://i.pinimg.com/564x/35/04/aa/3504aac21731b68dc957aaa9486a3a84.jpg'
    })


    const inputs=[
        {
            id:1,
            name:'name',
            type:'text',
            placeholder:"Введіть ім'я тварини",
            errorMessage:"Ім'я тварини не може містити спеціальні символи та цифри!",
            label:"Ім'я тварини",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:2,
            name:'typeAnimal',
            type:'text',
            placeholder:"Введіть вид тварини",
            errorMessage:"Вид тварини не може містити спеціальні символи та цифри!",
            label:"Вид",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:3,
            name:'gender',
            type:'text',
            placeholder:"Введіть стать тварини",
            errorMessage:"Стать тварини не може містити спеціальні символи та цифри!",
            label:"Стать",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:4,
            name:'year',
            type:'number',
            placeholder:"Введіть вік тварини",
            errorMessage:"Введіть вік тварини!",
            label:"Вік",
            require:true,
        
        }
    ]

    const inputs2=[
        {
            id:1,
            name:'username',
            type:'text',
            placeholder:"Введіть Ваше ім'я",
            errorMessage:"Ім'я контактної особи не може містити спеціальні символи та цифри!",
            label:"Ім'я контактної особи",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:2,
            name:'city',
            type:'text',
            placeholder:"Введіть назву міста",
            errorMessage:"Місто не може містити спеціальні символи та цифри!",
            label:"Місто",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:3,
            name:'phonenumber',
            type:'tel',
            placeholder:"+380123456789",
            errorMessage:"Некоректно введений номер телефону!",
            label:"Номер телефону",
            pattern:"^\\+?3?8?(0[\\s\\.-]\\d{2}[\\s\\.-]\\d{3}[\\s\\.-]\\d{2}[\\s\\.-]\\d{2}",
            minlength:"13",
            maxlength:"13",
            require:true,
        }
    ]

    const onChange=(e)=>{
        setValuesOne({...valuesOne,[e.target.name]: e.target.value})
    }
    const onChange2=(e)=>{
        setValuesTwo({...valuesTwo,[e.target.name]: e.target.value})
    }

    const onChange3=(e)=>{
        setValuesThree({...valuesThree,[e.target.name]: e.target.value})
    }

    const imageHandler = async (e) => {
        const formData = new FormData();

        formData.append('file', e.target.files[0]);
        const response = await axios.post(process.env.REACT_APP_API_URL + 'files', formData, {
            'content-type': 'multipart/form-data'
        })

        setState1({
            preview : response.data.url,
        })
    };

    const imageHandler2 = async (e) => {
        const formData = new FormData();

        formData.append('file', e.target.files[0]);
        const response = await axios.post(process.env.REACT_APP_API_URL + 'files', formData, {
            'content-type': 'multipart/form-data'
        })

        setState2({
            preview : response.data.url,
        })
    };

    const imageHandler3 = async (e) => {
        const formData = new FormData();

        formData.append('file', e.target.files[0]);
        const response = await axios.post(process.env.REACT_APP_API_URL + 'files', formData, {
            'content-type': 'multipart/form-data'
        })

        setState3({
            preview : response.data.url,
        })
    };

    const navigate = useNavigate()

    const createAd = async (e) => {
        e.preventDefault()
        const result = await axios.post(process.env.REACT_APP_API_URL + "Advert", {
            img1: state1.preview,
            img2: state2.preview,
            img3: state3.preview,
            nameAnimal: valuesOne.name,
            nameperson: valuesTwo.username,
            city: valuesTwo.city,
            phone: valuesTwo.phonenumber,
            type: valuesOne.typeAnimal,
            sex: valuesOne.gender,
            age: valuesOne.year,
            ster: valuesThree.confirmster,
            vac: valuesThree.confirmvac,
        }, {
            withCredentials: true
        })

        if (result.status === 200) navigate('/Cabinet')
        else {
            console.log(result.data)
        }
    }

    return (
        <div>
            <h2 className="h2Pet">Додавання оголошення</h2>
        <div className="AddForm">

            <div className="inputData">
                <form>
                    <div className="input-add">
                        {inputs.map((input)=>(
                            <FormInput1 className="input2-form" key={input.id}{...input} value={valuesOne[input.name]} onChange={onChange}/>
                        ))}
                    </div>
            </form>
                <div className="check-boxes">
                    <div>
                        <p className="label-select">Стерилізація</p>
                        <div className="choice">
                            <input className="input-choice" type="radio" value="так" name="confirmster" onChange={onChange3}/>Так
                            <input className="input-choice" type="radio" value="ні" name="confirmster" onChange={onChange3}/>Ні
                        </div>
                    </div>

                    <div>
                        <p className="label-select">Вакцинація</p>
                        <div className="choice">
                            <input className="input-choice" type="radio" value="так" name="confirmvac" onChange={onChange3}/>Так
                            <input className="input-choice" type="radio" value="ні" name="confirmvac" onChange={onChange3}/>Ні
                        </div>
                    </div>
                </div>

            </div>
                <div className="inputData2">
                    <form>
                        <div className="input-add">
                            {inputs2.map((input)=>(
                                <FormInput1 className="input2-form" key={input.id}{...input} value={valuesTwo[input.name]} onChange={onChange2}/>
                            ))}
                        </div>
                    </form>

                    <button type="submit" value="Submit" className="button-add" onClick={createAd}>Опублікувати</button>
                    
                </div>
                <div className="AddPhoto">
                <div>
                        <div className="container">
                            <div className="img-holder">
                                <img src={state1.preview} alt="" id="img" className="img" />
                            </div>
                            <input type="file" accept="image/*" name="image1" id="input" onChange={imageHandler} />
                            <div className="label">
                                <label className="image-upload" htmlFor="input">
                                </label>
                            </div>
                        </div>
                        <div className="smaller-download">
                            <div className="container2">
                                <div className="img-holder2">
                                    <img src={state2.preview} alt="" id="img2" className="img2" />
                                </div>
                                <input type="file" accept="image2/*" name="image3" id="input2" onChange={imageHandler2} />
                                <div className="label2">
                                    <label className="image-upload2" htmlFor="input2">
                                    </label>
                                </div>
                            </div>
                            <div className="container2">
                                <div className="img-holder2">
                                    <img src={state3.preview} alt="" id="img3" className="img2" />
                                </div>
                                <input type="file" accept="image{/*" name="image2" id="input3" onChange={imageHandler3} />
                                <div className="label2">
                                    <label className="image-upload2" htmlFor="input3">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
}

export default PetAdvertisement;