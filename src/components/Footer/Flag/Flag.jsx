import React from "react";
import s from "./Flag.module.css";
import {Link} from 'react-scroll'

const Flag = (props) => {
    return (
        <div className={s.flag}>
            <div className={s.blue}>
                <div className={s.b_text}>#StandWithUkraine</div>
            </div>
            <div className={s.yellow}>
                <div className={s.y_text}>
                    <div>
                        © All rights reserved. Made by Vicodesky
                    </div>
                    {/* <NavLink to="https://savelife.in.ua/donate/"> */}
                    <div className={s.help}>
                        <a className={s.link} target={'_blank'} href="https://savelife.in.ua/donate/"> Help Ukrainian armed forces </a>
                    </div>
                    {/* </NavLink> */}

                    <div className={s.goToTop}>
                        <Link className={s.topLink} to={'top'} spy={true} smooth={true} offset={0}
                              duration={500}>
                            GO TO TOP
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Flag;
