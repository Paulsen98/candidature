import React from "react";
import InputText from "../components/InputText"
import Dropdown from "../components/Dropdown"

function Candidature() {
    return (
        <div>
            <p>
                {"\n"}
            </p>
            <h3>
                Persönliche Daten
            </h3>
            <form action="">
                <div className="row">
                    <InputText
                        classes="col-md-5"
                        name="lastName"
                        labelText="Nachname"
                    />
                    <InputText
                        classes="col-md-5"
                        name="firstName"
                        labelText="Vorname"
                    />
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="salutaion">Geschlecht</label>
                            <select className="form-control" id="gender">
                                <option value="m">männlich</option>
                                <option value="f">weiblich</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <InputText
                        classes="col-md-10"
                        name="city"
                        labelText="Stadt"
                    />
                    <InputText
                        classes="col-md-2"
                        name="postCode"
                        labelText="Postleitzahl"
                    />
                </div>
                <div className="row">
                    <InputText
                        classes="col-md-10"
                        name="street"
                        labelText="Straße"
                    />
                    <InputText
                        classes="col-md-2"
                        name="houseNumber"
                        labelText="Hausnummer"
                    />
                </div>
                <div className="file-upload-wrapper">
                    <input type="file" id="input-file-max-fs" className="file-upload form-control"
                           data-max-file-size="2M"/>
                </div>
                <p>
                    {"\n"}
                </p>
                <h3>
                    Kontaktperson/Unternehmen
                </h3>
                <div className="form-group">
                    <label htmlFor="companyName">Name des Unternehmens</label>
                    <input type="text" name="companyName" id="companyName" className="form-control"/>
                </div>
                <div className="row">
                    <InputText
                        classes="col-md-5"
                        name="contactLastName"
                        labelText="Nachname"
                    />
                    <InputText
                        classes="col-md-5"
                        name="contactFirstName"
                        labelText="Vorname"
                    />
                    <Dropdown
                        options={{ val1: "männlich", val2: "weiblich" }}
                        selected="männlich"
                        labelText="Geschlecht"
                        classes="col-md-2"
                        name="gender"
                    />
                    <div className="col-md-2">
                        <div className="form-group">
                            <label htmlFor="salutaion">Anrede</label>
                            <select className="form-control" id="salutaion">
                                <option value="m">Herr</option>
                                <option value="f">Frau</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <InputText
                        classes="col-md-10"
                        name="contactCity"
                        labelText="Stadt"
                    />
                    <InputText
                        classes="col-md-2"
                        name="contactPostCode"
                        labelText="Postleitzahl"
                    />
                </div>
                <div className="row">
                    <InputText
                        classes="col-md-10"
                        name="contactStreet"
                        labelText="Straße"
                    />
                    <InputText
                        classes="col-md-2"
                        name="contactHouseNumber"
                        labelText="Hausnummer"
                    />
                </div>
                <p>
                    {"\n"}
                </p>
                <h3>
                    Bewerbungsschreiben
                </h3>
                <div className="form-group coverLetterDiv" id="coverLetterDiv">
                    <input type="button" value="Text hinterlegen" id="openModal"
                           className="form-control btn btn-primary"/>
                </div>
            </form>
            <div id="coverLetterModal" className="coverLetterModal">
                <div id="modalContent" className="modalContent">
                    <span className="close">&times;</span>
                    <form className="form-group" id="coverLetterForm" action="" method="post">
            <textarea name="coverLetterTextarea" id="coverLetterTextarea" className="form-control coverLetterTextarea">
            </textarea>
                        <button className="form-control btn btn-success">speichern</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Candidature