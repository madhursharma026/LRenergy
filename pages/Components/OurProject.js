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
                    <div className={`${styles.mainHeading}`} style={{ fontSize: 'calc(6vw + 1.5rem)' }}>
                        OUR PROJECTS
                    </div>
                    <Link href="/" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>ALL</Link>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card mt-3" style={{ overflow: "hidden", border:'5px solid black' }}>
                            <img src="/sirsaProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" style={{maxHeight:'400px'}} />
                            <div class="card-body text-center">
                                <h4>
                                    <b>12 MW Solar Project</b>
                                </h4>
                                <p class="card-text"><b>SIRSA, HARYANA</b></p>
                            </div>
                        </div>
                        <div class="card mt-3" style={{ overflow: "hidden", border:'5px solid black' }}>
                            <img src="/mangaliProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" style={{maxHeight:'400px'}} />
                            <div class="card-body text-center">
                                <h4>
                                    <b>12MW Solar Project</b>
                                </h4>
                                <p class="card-text"><b>MANGALI, HARYANA</b></p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 ${styles.marginTop}`}>
                        <div class="card mt-3" style={{ overflow: "hidden", border:'5px solid black' }}>
                            <img src="/toshamProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" style={{maxHeight:'400px'}} />
                            <div class="card-body text-center">
                                <h4>
                                    <b>24 MW Solar Project</b>
                                </h4>
                                <p class="card-text"><b>TOSHAM, HARYANA</b></p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4 mt-4">
                        <div class="card" style={{ overflow: "hidden", border:'5px solid black' }}>
                            <img src="/sirsaProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" style={{maxHeight:'400px'}} />
                            <div class="card-body text-center">
                                <h4>
                                    <b>12 MW Solar Project</b>
                                </h4>
                                <p class="card-text">SIRSA, HARYANA</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 ${styles.colStyle2}`}>
                        <div class="card" style={{ overflow: "hidden", border:'5px solid black' }}>
                            <img src="/mangaliProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" style={{maxHeight:'400px'}} />
                            <div class="card-body text-center">
                                <h4>
                                    <b>12MW Solar Project</b>
                                </h4>
                                <p class="card-text">MANGALI, HARYANA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div class="card" style={{ overflow: "hidden", border:'5px solid black' }}>
                            <img src="/toshamProject.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" style={{maxHeight:'400px'}} />
                            <div class="card-body text-center">
                                <h4>
                                    <b>24 MW Solar Project</b>
                                </h4>
                                <p class="card-text">TOSHAM, HARYANA</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default OurProjects;


