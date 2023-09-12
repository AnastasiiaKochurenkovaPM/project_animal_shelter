import React, {useEffect, useState} from "react";
import Ad from "./Ad";
import s from "./Ads.module.css";
import axios from "axios";

const Ads = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "AllAdvert", {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        debugger
      })
      .catch((err) => console.log(err));
 }, []);

  return (
    <>
    <div className={s.main}>
      {data.map((item, index) => { 
        return (
          <Ad img={item.img1} name={item.nameAnimal} city={item.city} id={item.id} key={index} />
        );
      })}
    </div>
    </>
  );
};

export default Ads;
