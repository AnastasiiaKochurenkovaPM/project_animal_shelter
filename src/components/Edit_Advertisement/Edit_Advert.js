import FormInput from "./FormInput";
import React, {useState, useEffect} from "react";
import "./Edit_Advert.css";
import s from "../Main/FirstSlide/FirstSlide";
import './Photo.css';
import axios from "axios";
import {NavLink, useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
import Delete from "../Cabinet/DeleteAd";

const Edit_Adv = () => {
    const setActive = ({isActive}) => isActive ? s.active : s.item
    const [data, setData] = useState([]);
    const {id} = useParams()

  useEffect(() => {
     axios.get(process.env.REACT_APP_API_URL + "OneAdvert/" + id, {
         withCredentials: true,
       })
       .then((res) => {
         setData(res.data);
       })
       .catch((err) => console.log(err));
  }, []);

    const [values, setValues] = useState({
        name: "",
        typeAnimal: "",
        gender: "",
        year: "",
        sterelization: "",
        vaccination: "",
        username: "",
        city:"",
        phonenumber: "",
        require:true,
    });

    const [state1, setState1] = useState({
        // file       : null,
        preview: data.img1,
        profileImg: 'https://i.pinimg.com/236x/b7/fb/fb/b7fbfb42d40791d1a260fd0328c645bc.jpg',
    })

    const [state2, setState2] = useState({
        file: null,
        preview: data.img2,
        profileImg2: 'https://i.pinimg.com/564x/35/04/aa/3504aac21731b68dc957aaa9486a3a84.jpg',
    })

    const [state3, setState3] = useState({
        file: null,
        preview: data.img3,
        profileImg3: 'https://i.pinimg.com/564x/35/04/aa/3504aac21731b68dc957aaa9486a3a84.jpg'
    })

    const inputs=[
        {
            id:1,
            name:'name',
            type:'text',
            placeholder: data.nameAnimal,
            errorMessage:"Ім'я тварини не може містити спеціальні символи та цифри!",
            label:"Ім'я тварини",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:2,
            name:'typeAnimal',
            type:'text',
            placeholder: data.type,
            errorMessage:"Вид тварини не може містити спеціальні символи та цифри!",
            label:"Вид тварини",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },

        {
            id:3,
            name:'gender',
            type:'text',
            placeholder: data.sex,
            errorMessage:"Стать не може містити спеціальні символи та цифри!",
            label:"Стать",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{5,20}$",
            require:true,
        },
        {
            id:4,
            name:'year',
            type:'number',
            placeholder: data.age,
            errorMessage:"Вік тварини не може містити спеціальні символи та букви!",
            label:"Вік тварини",
            require:true,
        },
        {
            id:5,
            name:'sterelization',
            type:'text',
            placeholder: data.ster,
            errorMessage:"Поле не може містити спеціальні символи та цифри!",
            label:"Стерилізація",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:6,
            name:'vaccination',
            type:'text',
            placeholder: data.vac,
            errorMessage:"Поле не може містити спеціальні символи та цифри!",
            label:"Вакцинація",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{2,20}$",
            require:true,
        },
        {
            id:7,
            name:'username',
            type:'text',
            placeholder: data.nameperson,
            errorMessage:"Ім'я контактної особи не може містити спеціальні символи та цифри!",
            label:"Контактна особа",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{3,20}$",
            require:true,
        },
        {
            id:8,
            name:'city',
            type:'text',
            placeholder: data.city,
            errorMessage:"Місто не може містити спеціальні символи та цифри!",
            label:"Місто",
            pattern:"^[A-Za-zА-Яа-яґҐІіЇїЄє'’ʼ\\s-]{3,20}$",
            require:true,
        },
        {
            id:9,
            name:'phonenumber',
            type:'tel',
            placeholder: data.phone,
            errorMessage:"Некоректно введений номер телефону!",
            label:"Номер телефону",
            pattern:"^\\+?3?8?(0[\\s\\.-]\\d{2}[\\s\\.-]\\d{3}[\\s\\.-]\\d{2}[\\s\\.-]\\d{2}",
            minlength:"13",
            maxlength:"13",
            require:true,
        }
    ]
    const onChange=(e)=>{
        setValues({...values,[e.target.name]: e.target.value})
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

    const editAd = async (e) => {
        e.preventDefault()
        const result = await axios.post(process.env.REACT_APP_API_URL + "UploadAdvert/" + id, {
            img1: state1.preview,
            img2: state2.preview,
            img3: state3.preview,
            nameAnimal: values.name,
            nameperson: values.username,
            city: values.city,
            phone: values.phonenumber,
            type: values.typeAnimal,
            sex: values.gender,
            age: values.year,
            ster: values.confirmster,
            vac: values.confirmvac,
        }, {
            withCredentials: true
        })
          console.log(result.data)
    }

    return (
        <>
            <div>
                <h1 className="h2edit">Редагування оголошення</h1>
                <div className="edit_info">
                <div>
                <form>
                    <div className="block_edit">
                        {inputs.map((input)=>(
                            <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange}/>
                        ))}
                    </div>
                    <div className="buttonEdit">
                    <NavLink className={setActive} to='/Cabinet'>
                    <button type='submit' className="button_sub_del"  onClick={editAd}>Зберегти зміни</button>
                    </NavLink>
                    <NavLink to={'/Cabinet'}>
                    <button className="button_sub_del" onClick={Delete}>Деактивувати оголошення</button>
                    </NavLink>
                    </div>
                </form>
                </div>
                <div>
                <div>
                        <div className="container">
                            <div className="img-holder">
                                <img src={data.img1} alt="" id="img" className="img" />
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
                                    <img src={data.img2} alt="" id="img2" className="img2" />
                                </div>
                                <input type="file" accept="image2/*" name="image3" id="input2" onChange={imageHandler2} />
                                <div className="label2">
                                    <label className="image-upload2" htmlFor="input2">
                                    </label>
                                </div>
                            </div>
                            <div className="container2">
                                <div className="img-holder2">
                                    <img src={data.img3} alt="" id="img3" className="img2" />
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
            </>
    );
};

export default Edit_Adv;
