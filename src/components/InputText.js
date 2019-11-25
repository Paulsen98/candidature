import React from "react";

function InputText (props) {
    return (
        <div className={props.classes}>
            <div className="form-group">
                <label htmlFor={props.name}>{props.labelText}</label>
                <input type="text" name={props.name} id={props.name} className="form-control"/>
            </div>
        </div>
    );
}

export default InputText;