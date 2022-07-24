import React from "react";
import "./Home.css"
import Button from "./Button";

function Home(){
    return(
        <div id="home" className="home-page">
            <div className="heading-content">
                <p className="home-para">lets bring smile </p>
                <h1 className="heading">Help the <span className="col-word">Poor</span> in Need</h1>
                <div className="home-btn">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Home