import React from "react"

function Dropdown (props) {
    return (
        <div className={props.classes}>
            <div className="form-group">
                <label htmlFor="salutaion">Geschlecht</label>
                <select className="form-control" id="gender">
                    <option value="m">männlich</option>
                    <option value="f">weiblich</option>
                </select>
            </div>
        </div>
    )
}

export default Dropdown