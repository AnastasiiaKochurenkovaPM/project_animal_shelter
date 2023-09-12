import React from "react";
import s from "./Information.module.css";
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? s.active : s.item);

const Information = (props) => {
  return (
    <div className={s.information}>
      <div className={s.social}>
        <div className={s.social_title}>Vicodesky</div>
        <div className={s.icons}>
          <a target='_blank' className="_icon-Facebook icon" href="https://www.facebook.com/"></a>
          <a target='_blank' className="_icon-Twitter icon" href="https://twitter.com/"></a>
          <a target='_blank' className="_icon-YouTube icon" href="https://www.youtube.com/"></a>
          <a target='_blank' className="_icon-Telegram icon" href="#"></a>
          <a target='_blank' className="_icon-Instagram icon" href="https://www.instagram.com/"></a>
          <a target='_blank' className="_icon-Linked-In icon" href="https://www.linkedin.com/"></a>
        </div>
      </div>
      <div className={`${s.sign} ${s.joint}`}>
        <div>SIGN UP TO OUR NEWSLETTER</div>
        <div className={s.input}>
          <input type="text" placeholder="  Email address" maxLength="30" />
          <div className={s.long}></div>
        </div>
      </div>
      <div className={`${s.contact} ${s.joint}`}>
        <div>CONTACT US</div>
        <div className="_icon-Phone">050-938-07-97 </div>
        <div className="_icon-Mail">vicodesky@gmail.com</div>
      </div>
      <div className={`${s.map} ${s.joint}`}>
        <div className={s.map_title}>SITE MAP</div>
        <div className={s.map_list}>
            <NavLink className={`${setActive} ${s.link}`} to={"/Animals"}>
                <div>Тварини</div>
            </NavLink>
            <NavLink className={`${setActive} ${s.link}`} to={"/Shelters"}>
                <div>Притулки</div>
            </NavLink>
            <NavLink className={`${setActive} ${s.link}`} to={"/AboutUs"}>
                <div>Про нас</div>
            </NavLink>
            <NavLink className={`${setActive} ${s.link}`} to={"/Cabinet"}>
                <div>Вхід в особистий кабінет</div>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Information;
