import React, {useState} from "react"

function Dropdown (props) {
    const [select, setSelect] = useState("männlich");

    return (
        <div className={props.classes}>
            <div className="form-group">
                <label htmlFor="salutaion">{props.labelText}</label>
                <select className="form-control" id={props.name} onChange={}>
                    {Object.keys(props.options).map((value, index) => {
                        return (
                            <option key={index} value={value}>
                                {props.options[value]}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
}

export default Dropdown