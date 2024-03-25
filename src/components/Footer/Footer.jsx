import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Volupatama accusantium laudantium, totam erem
                    aperiam, enque ab illo inventore veritatis et 
                    quasi architecto  beatae vitae dicta sunt 
                    explicabo ab Nemo.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        Mali Galli , Dargah Chowk, Near
                        Miraj, 416410
                    </div>
                </div>

                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                        Phone: 9876543210
                    </div>
                </div>

                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        Email: ecomstore@gmail.com
                    </div>
                </div>
                </div>
            <div className="col">
                <div className="title">Categeries</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watch</span>
                <span className="text">Bluetooth Speaker</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
                </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    E-COMM.STORE 2024 BY AMAN. PREMIMUM E-COMMERCE 
                    SOLUTION.
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
