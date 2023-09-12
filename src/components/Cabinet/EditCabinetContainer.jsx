import React from "react";
import {connect} from "react-redux";
import EditCabinet from "./EditCabinet";
import {cityChangeAC, emailChangeAC, nameChangeAC, phonenumberChangeAC,} from "../../redux/cabinetReducer";
import axios from "axios";

class EditCabinetContainer extends React.Component {
    render() {
        return (
            <div>
                <EditCabinet {...this.props}/>
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
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        NameChange: (text) => {
            dispatch(nameChangeAC(text));
        },
        CityChange: (text) => {
            dispatch(cityChangeAC(text));
        },
        EmailChange: (text) => {
            dispatch(emailChangeAC(text));
        },
        PhonenumberChange: (text) => {
            dispatch(phonenumberChangeAC(text));
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCabinetContainer);



