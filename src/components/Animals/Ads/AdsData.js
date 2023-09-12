import img1 from "./img/image1.png";
import img2 from "./img/image2.png";
import img3 from "./img/image3.png";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";
import img6 from "./img/image6.png";
import img7 from "./img/image10.png";
import img8 from "./img/image8.png";
import img9 from "./img/image9.png";
import React, {useEffect, useState} from "react";
import axios from "axios";
import s from "./Ads.module.css";
import { NavLink } from "react-router-dom";
 
 
//  const info = { ads: [
//     {
//       id: "",
//       name: "",
//       city: "",
//       type: "",
//       sex: "",
//       age: "",
//       img: "",
//     },
//   ]}

// export default info;

 
//  const info = { ads: [
//     {
//       id: data.id,
//       name: data.nameAnimal,
//       city: data.city,
//       type: data.type,
//       sex: data.sex,
//       age: data.age,
//       img: data.img1,
//     },
//     {
//       id: 2,
//       name: "Муся",
//       city: "Київ",
//       type: "cat",
//       sex: "w",
//       age: 0.7,
//       img: img2,
//     },
//     {
//       id: 3,
//       name: "Лаккі",
//       city: "Харків",
//       type: "cat",
//       sex: "m",
//       age: 2,
//       img: img3,
//     },
//     {
//       id: 4,
//       name: "Білка",
//       city: "Львів",
//       type: "cat",
//       sex: "w",
//       age: 3,
//       img: img4,
//     },
//     {
//       id: 5,
//       name: "Мура",
//       city: "Київ",
//       type: "cat",
//       sex: "w",
//       age: 0.4,
//       img: img5,
//     },
//     {
//       id: 6,
//       name: "Мишка",
//       city: "Херсон",
//       type: "cat",
//       sex: "w",
//       age: 0.6,
//       img: img6,
//     },
//   // {
    //   id: 7,
    //   name: "Афіна",
    //   city: "Одеса",
    //   type: "cat",
    //   sex: "w",
    //   age: 3.5,
    //   img: img7,
    // },
    // {
    //   id: 8,
    //   name: "Соня",
    //   city: "Дніпро",
    //   type: "cat",
    //   sex: "w",
    //   age: 5,
    //   img: img8,
    // },
    // {
    //   id: 9,
    //   name: "Нічка",
    //   city: "Ужгород",
    //   type: "cat",
    //   sex: "m",
    //   age: 0.3,
    //   img: img9,
    // },
  //]
  
// }
// export default info
