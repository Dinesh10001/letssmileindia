import React from "react";
import {FaFacebook,FaInstagram,FaLinkedinIn} from "react-icons/fa"
import "./Footer.css"



function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="company-detail">
                    <h1>Lets's Smile India</h1>
                    <p>address sdnfh jsdfhb jsbf </p>
                    <p>73456 23756 27356</p>
                    <p>contact us</p>
                    <p>32648754365723</p>
                    <div>
                        <h1>Follow us</h1>
                        <div className="social-links">
                        <FaFacebook className="link"/>
                        <FaInstagram className="link" />
                        <FaLinkedinIn  className="link"/>
                        </div>
                       
                    </div>
                </div>
                <div class="form">
                    <div class="title">Become a volunteer</div>
                    {/* <div class="subtitle">Let's create your account!</div> */}
                    <div class="input-container ic1">
                        <input id="firstname" class="input" type="text" placeholder=" " />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">Full name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="lastname" class="input" type="text" placeholder=" " />
                        <div class="cut"></div>
                        <label for="lastname" class="placeholder">Contact number</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder=" " />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Email</label>
                    </div>
                    <button type="text" class="submit">submit</button>
                </div>
            </div>
            <div className="copyright">
                <p>@2022 Copyright reserved to lets's smile india</p>
            </div>
        </div>
    )
}
export default Footer