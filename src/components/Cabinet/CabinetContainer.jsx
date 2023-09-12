import React from "react";
import {connect} from "react-redux";
import Cabinet from "./Cabinet";
import {cityChangeAC, emailChangeAC, nameChangeAC, phonenumberChangeAC} from "../../redux/cabinetReducer.js";
import axios from "axios";

class CabinetContainer extends React.Component {
    componentDidMount() {
        if (!this.props.name) {
            axios.get('http://localhost:3001/Cabinet', {
                withCredentials: true
            })
                .then(res => {
                    this.setCity(res.data.city)
                    this.setEmail(res.data.email)
                    this.setName(res.data.nameShelter)
                    this.setPhone(res.data.phone)
                }).catch(err => console.log(err))
        }
    }

    setCity = (text) => {
        this.props.cityChangeAC(text)
    }
    setEmail = (text) => {
        this.props.emailChangeAC(text)
    }
    setName = (text) => {
        this.props.nameChangeAC(text)
    }
    setPhone = (text) => {
        this.props.phonenumberChangeAC(text)
    }

    render() {
        return (
            <div>
                <Cabinet {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        ...state,
        name: state.cabinetPage.name,
        city: state.cabinetPage.city,
        phonenumber: state.cabinetPage.phonenumber,
        email: state.cabinetPage.email,
    }
}

export default connect(mapStateToProps, {
    nameChangeAC,
    cityChangeAC,
    emailChangeAC,
    phonenumberChangeAC,
})(CabinetContainer)