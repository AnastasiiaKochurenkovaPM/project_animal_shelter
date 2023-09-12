import React, {useEffect} from "react";
import s from './Main.module.css'
import FirstSlide from "./FirstSlide/FirstSlide";
import SecondSlide from "./SecondSlide/SecondSlide";
import ThirdSlide from "./ThirdSlide/ThirdSlide";

const Main = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className={s.main}>

            <FirstSlide/>
            <SecondSlide/>
            <ThirdSlide/>
        </main>
    )
}

export default Main
