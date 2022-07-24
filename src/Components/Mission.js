import React from "react";
import clothes from "../clothes.jpg"
import "./Mission.css";


function Mission() {
    return (
        <div   id="mission" className="mission-section">
        <h1 className="mission-heading">Our <span className="col-word">Mission</span> </h1>
            <div className="mission-container">
                <div className="mission-data">
                    <p className="content-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum</p>
                </div>
                <div className="mission-pic">
                <img src={clothes} alt="picture"></img>                 
                </div>
            </div>
        </div>
    )
}
export default Mission
