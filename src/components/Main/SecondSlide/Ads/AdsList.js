import React, {useEffect, useState} from "react";
import AdItem from "./AdItem";
import s from "./Ads.module.css";
import axios from "axios";

const AdsList = (props) => {
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

  return (
    <>
    <div className={s.main}>
      {data.map((item, index) => { 
        return (
          <AdItem img={item.img1} name={item.nameAnimal} city={item.city} key={index} />
        ); 
      })}
    </div>
    </>
  );
};

export default AdsList;