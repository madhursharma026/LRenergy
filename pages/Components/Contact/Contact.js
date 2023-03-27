import * as React from "react";
import styles from "../../../styles/Homepage/Homepage.module.css";

function Contact() {

    return (
        <>
            <div style={{ background: '#F7F7F7' }}>
                <div className="container">
                    <div className="row p-sm-5 p-3 text-center">
                        <h1>
                            GO GREEN FOR ALL YOUR ENERGY NEEDS!
                        </h1>
                        <p style={{ fontSize: '18px' }}>
                            Electricity that is 100% Renewable makes sense for everyone. We believe that, together, we can bring a cleaner, 100% carbon neutral. Tell us a little bit about your business and one of our concerned energy specialists will be in touch to find a solution and quote for you.
                        </p>
                        <div className="col-lg-6">
                            <div style={{ maxWidth: '400px', margin: 'auto' }}>
                                <h2 className="mt-3">
                                    <i class="fa fa-map-marker" style={{ fontSize: "30px", color: "#18d26e" }}></i>
                                    <br />
                                    ADDRESS</h2>
                                <p className={`text-center`} style={{ fontSize: "18px" }}>
                                    The Oberoi Corporate Tower
                                    Level 3, Building No. 11, DLF Cyber City,
                                    Gurgaon, Haryana-122002
                                </p>
                                <h2 className="mt-3">
                                    <i class="fa fa-phone" style={{ fontSize: "30px", color: "#18d26e" }}></i>
                                    <br />
                                    PHONE NUMBER</h2>
                                <p className={`text-center`} style={{ fontSize: "18px" }}>
                                    +91 (0) 124-4816888
                                </p>
                                <h2 className="mt-3">
                                    <i class="fa fa-envelope" style={{ fontSize: "30px", color: "#18d26e" }}></i>
                                    <br />
                                    EMAIL</h2>
                                <p className={`text-center`} style={{ fontSize: "18px" }}>
                                    info@lrenergy.in
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5">
                            <div className="row mb-3">
                                <div className="col-6">
                                    <input type="text" class="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-6">
                                    <input type="text" class="form-control" placeholder="Your Email" />
                                </div>
                            </div>
                            <input type="text" class="form-control mb-3" placeholder="Subject" />
                            <textarea rows="10" class="form-control mb-3" placeholder="Message" />
                            <button type="button" class={`btn ${styles.btnStyle}`}>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;


