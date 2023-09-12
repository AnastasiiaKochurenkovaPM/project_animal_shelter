import React from 'react'
import s from './SheltersKharkiv.module.css'
import { NavLink } from "react-router-dom";








export const ShelterKharkiv = () => {
  return (
    <div className={s.firstSlide}>
      <div className={s.buttons}>
      <button className={s.btn}><p ><svg width="20" height="19" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.60248 7.19702C7.16347 7.19702 7.61823 7.5362 7.61823 7.9546L7.61823 16.4773C7.61823 16.8957 7.16347 17.2349 6.60248 17.2349C6.0415 17.2349 5.58674 16.8957 5.58674 16.4773L5.58674 7.9546C5.58674 7.5362 6.0415 7.19702 6.60248 7.19702Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.60248 0.947021C7.16347 0.947021 7.61823 1.2862 7.61823 1.7046V3.97732C7.61823 4.39572 7.16347 4.7349 6.60248 4.7349C6.0415 4.7349 5.58674 4.39572 5.58674 3.97732V1.7046C5.58674 1.2862 6.0415 0.947021 6.60248 0.947021Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.01587 5.49248C1.01587 4.23728 2.38017 3.21975 4.06311 3.21975H9.14185C10.8248 3.21975 12.1891 4.23728 12.1891 5.49248V6.43945C12.1891 7.69464 10.8248 8.71217 9.14185 8.71217H4.06311C2.38017 8.71217 1.01587 7.69464 1.01587 6.43945V5.49248ZM4.06311 4.7349C3.50213 4.7349 3.04737 5.07408 3.04737 5.49248V6.43945C3.04737 6.85784 3.50213 7.19702 4.06311 7.19702H9.14185C9.70284 7.19702 10.1576 6.85784 10.1576 6.43945V5.49248C10.1576 5.07408 9.70284 4.7349 9.14185 4.7349H4.06311Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7757 13.447C18.3367 13.447 18.7915 13.7862 18.7915 14.2046V16.4773C18.7915 16.8957 18.3367 17.2349 17.7757 17.2349C17.2147 17.2349 16.76 16.8957 16.76 16.4773V14.2046C16.76 13.7862 17.2147 13.447 17.7757 13.447Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7757 0.947021C18.3367 0.947021 18.7915 1.2862 18.7915 1.7046V10.2273C18.7915 10.6457 18.3367 10.9849 17.7757 10.9849C17.2147 10.9849 16.76 10.6457 16.76 10.2273V1.7046C16.76 1.2862 17.2147 0.947021 17.7757 0.947021Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1891 11.7425C12.1891 10.4873 13.5534 9.46975 15.2363 9.46975H20.3151C21.998 9.46975 23.3623 10.4873 23.3623 11.7425V12.6894C23.3623 13.9446 21.998 14.9622 20.3151 14.9622H15.2363C13.5534 14.9622 12.1891 13.9446 12.1891 12.6894V11.7425ZM15.2363 10.9849C14.6754 10.9849 14.2206 11.3241 14.2206 11.7425V12.6894C14.2206 13.1078 14.6754 13.447 15.2363 13.447H20.3151C20.8761 13.447 21.3308 13.1078 21.3308 12.6894V11.7425C21.3308 11.3241 20.8761 10.9849 20.3151 10.9849H15.2363Z" fill="white"/>
</svg>


&nbsp; Фільтр</p></button>   
      </div>

      <div className={s.stick}>
      <svg width="330" height="1" viewBox="0 0 330 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="330" y2="0.5" stroke="url(#paint0_linear_950_355)"/>
<defs>
<linearGradient id="paint0_linear_950_355" x1="330" y1="2" x2="0.326011" y2="-8.87918" gradientUnits="userSpaceOnUse">
<stop stop-color="#FD7D00"/>
<stop offset="0.123257" stop-color="#FEB336"/>
<stop offset="0.519097" stop-color="#D6D899"/>
<stop offset="0.878479" stop-color="#FEB336"/>
<stop offset="1" stop-color="#FD7D00"/>
</linearGradient>
</defs>
</svg>
      </div>
    
    <div className={s.text}> Обласний центр</div>
    <div className={s.list}> 
    <NavLink className={s.setActive} to="/Volyn">
            Волинська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Vin">
            Вінницька
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Dnipro">
            Дніпропетровська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Donetsk">
            Донецька
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Zhytomyr">
            Житомирська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Zakar">
            Закарпатська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Zapori">
            Запорізька
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Kyiv">
            Київська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Kirovo">
            Кіровоградська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Lugansk">
            Луганська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Lviv">
            Львівська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Mykolaiv">
            Миколаївська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Odessa">
            Одеська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Poltava">
            Полтавська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Rivne">
           Рівненська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Sumy">
            Сумська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Ternopil">
            Тернопільська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Kharkiv">
            Харківська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Cherson">
            Херсонська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Hmelni">
            Хмельницька
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Cherkasy">
            Черкаська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Chernivec">
            Чернівецька
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Chernigiv">
            Чернігівська
          </NavLink>
          <p></p><NavLink className={s.setActive} to="/Frank">
            Івано-Франківська
          </NavLink>
    </div>
        
        
       {/* ///////////посилання/////////////            */}




       <div className={s.not}>На жаль на даний момент <p></p>немає притулків у даній області </div>
       
   





   



    </div>
    
    

  )
}

