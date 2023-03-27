import Link from "next/link";
import * as React from "react";
// import sirsaProject from "../media/sirsaProject.jpg";
// import toshamProject from "../media/toshamProject.jpg";
// import mangaliProject from "../media/mangaliProject.jpg";
import styles from "../../styles/Homepage/Homepage.module.css";

function OurProjects() {

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <div className={`${styles.mainHeading}`}>
                        OUR PROJECTS
                    </div>
                    <Link href="/" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>ALL</Link>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ overflow: "hidden" }}>
                            {/* <img src={sirsaProject.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" /> */}
                            <img src="/sirsaProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" />
                            <div class="card-body text-center">
                                <h4>
                                    <b>12 MW Solar Project</b>
                                </h4>
                                <p class="card-text">SIRSA, HARYANA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ overflow: "hidden" }}>
                            {/* <img src={mangaliProject.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" /> */}
                            <img src="/mangaliProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" />
                            <div class="card-body text-center">
                                <h4>
                                    <b>12MW Solar Project</b>
                                </h4>
                                <p class="card-text">MANGALI, HARYANA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ overflow: "hidden" }}>
                            {/* <img src={toshamProject.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" /> */}
                            <img src="/toshamProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" />
                            <div class="card-body text-center">
                                <h4>
                                    <b>24 MW Solar Project</b>
                                </h4>
                                <p class="card-text">TOSHAM, HARYANA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurProjects;


