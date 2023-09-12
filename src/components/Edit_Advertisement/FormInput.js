import React, {useState} from 'react';
import './FormInput.css'


function FormInput(props) {
    const [focused,setFocused]=useState(false)
    const {label,errorMessage,onChange,id, ...inputProps}=props;
    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className="formInput3">
            <label className="labelEdit">{label}</label>
            <input className="input3" {...inputProps} onChange={onChange} required onBlur={handleFocus} onFocus={()=>inputProps.name==="confirmPassword"&&setFocused(true)} focused={focused.toString()}/>
            <span className="spanEdit">{errorMessage}</span>
        </div>
    );
}

export default FormInput;