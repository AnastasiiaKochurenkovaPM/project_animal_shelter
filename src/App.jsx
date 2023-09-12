import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Reg from "./components/Registration/Create";
import LogIn from "./components/LogIn/LogIn";
import Animals from "./components/Animals/Animals";
import PetAdvertisement from "./components/PetAdvertisement/PetAdvertisement";
import EditCabinetContainer from "./components/Cabinet/EditCabinetContainer";
import Edit_Adv from "./components/Edit_Advertisement/Edit_Advert";
import Shelters from "./components/Shelters/Shelters";
import PetPage from "./components/PetPage/PetPage"
import AdvertisementPage from "./components/AdvertisementPage/AdvertisementPage";
import MyAdvertisementPage from "./components/Cabinet/MyAdvertisementPage/MyAdvertisementPage"
import {ShelterVolyn} from "./components/Shelters/Shelters-city/Volyn/SheltersVolyn";
import {ShelterCherkasy} from "./components/Shelters/Shelters-city/Cherkasy/SheltersCherkasy";
import {ShelterChernigiv} from "./components/Shelters/Shelters-city/Chernigiv/SheltersChernigiv";
import {ShelterChernivec} from "./components/Shelters/Shelters-city/Chernivec/SheltersChernivec";
import {ShelterCherson} from "./components/Shelters/Shelters-city/Cherson/SheltersCherson";
import {ShelterDnipro} from "./components/Shelters/Shelters-city/Dnipro/SheltersDnipro";
import {ShelterDonetsk} from "./components/Shelters/Shelters-city/Donetsk/SheltersDonetsk";
import {ShelterFrank} from "./components/Shelters/Shelters-city/Frank/SheltersFrank";
import {ShelterHmelni} from "./components/Shelters/Shelters-city/Hmelni/SheltersHmelni";
import {ShelterKharkiv} from "./components/Shelters/Shelters-city/Kharkiv/SheltersKharkiv";
import {ShelterKirovo} from "./components/Shelters/Shelters-city/Kirovo/SheltersKirovo";
import {ShelterKyiv} from "./components/Shelters/Shelters-city/Kyiv/SheltersKyiv";
import {ShelterLviv} from "./components/Shelters/Shelters-city/Lviv/SheltersLviv";
import {ShelterLugansk} from "./components/Shelters/Shelters-city/Lugansk/SheltersLugansk";
import {ShelterMykolaiv} from "./components/Shelters/Shelters-city/Mykolaiv/SheltersMykolaiv";
import {ShelterOdessa} from "./components/Shelters/Shelters-city/Odessa/SheltersOdessa";
import {ShelterPoltava} from "./components/Shelters/Shelters-city/Poltava/SheltersPoltava";
import {ShelterRivne} from "./components/Shelters/Shelters-city/Rivne/SheltersRivne";
import {ShelterSumy} from "./components/Shelters/Shelters-city/Sumy/SheltersSumy";
import {ShelterTernopil} from "./components/Shelters/Shelters-city/Ternopil/SheltersTernopil";
import {ShelterVin} from "./components/Shelters/Shelters-city/Vin/SheltersVin";
import {ShelterZakar} from "./components/Shelters/Shelters-city/Zakar/SheltersZakar";
import {ShelterZapori} from "./components/Shelters/Shelters-city/Zapori/SheltersZapori";
import {ShelterZhytomyr} from "./components/Shelters/Shelters-city/Zhytomyr/SheltersZhytomyr";
import CabinetContainer from "./components/Cabinet/CabinetContainer";
import ScrollToTop from "./ScrollToTop";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <ScrollToTop/>
        <Header />
        <div className="wrapper__content">
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Registration" element={<Reg />} />
            <Route path="/LogIn" element={<LogIn />} />

            <Route path="/Cabinet" element={<CabinetContainer />} />
            <Route path="/PetAdvertisement" element={<PetAdvertisement />} />
            <Route path="/Animals" element={<Animals />} />

            <Route path={'/AdvertisementPage/:id'} element={<AdvertisementPage/>}/>
            <Route path={'/MyAdvertisementPage/:id'} element={<MyAdvertisementPage/>}/>

            <Route path="/editCabinet" element={<EditCabinetContainer />} />
            <Route path="/EditAdvertisement/:id" element={<Edit_Adv />} />

            <Route path='/Shelters' element={<Shelters/>}/>
            <Route path='/PetPage/:id' element={<PetPage/>}/>

            <Route path='/Volyn' element={<ShelterVolyn />}/>
            <Route path='/Cherkasy' element={<ShelterCherkasy />}/>
            <Route path='/Chernigiv' element={<ShelterChernigiv />}/>
            <Route path='/Chernivec' element={<ShelterChernivec />}/>
            <Route path='/Cherson' element={<ShelterCherson />}/>
            <Route path='/Dnipro' element={<ShelterDnipro />}/>
            <Route path='/Donetsk' element={<ShelterDonetsk />}/>
            <Route path='/Frank' element={<ShelterFrank />}/>
            <Route path='/Hmelni' element={<ShelterHmelni />}/>
            <Route path='/Kharkiv' element={<ShelterKharkiv />}/>
            <Route path='/Kirovo' element={<ShelterKirovo />}/>
            <Route path='/Kyiv' element={<ShelterKyiv />}/>
            <Route path='/Lviv' element={<ShelterLviv />}/>
            <Route path='/Lugansk' element={<ShelterLugansk />}/>
            <Route path='/Mykolaiv' element={<ShelterMykolaiv />}/>
            <Route path='/Odessa' element={<ShelterOdessa />}/>
            <Route path='/Poltava' element={<ShelterPoltava />}/>
            <Route path='/Rivne' element={<ShelterRivne />}/>
            <Route path='/Sumy' element={<ShelterSumy />}/>
            <Route path='/Ternopil' element={<ShelterTernopil />}/>
            <Route path='/Vin' element={<ShelterVin />}/>
            <Route path='/Zakar' element={<ShelterZakar />}/>
            <Route path='/Zapori' element={<ShelterZapori />}/>
            <Route path='/Zhytomyr' element={<ShelterZhytomyr />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
