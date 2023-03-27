import News from "../News";
import Link from "next/link";
import Footer from "../Footer";
import * as React from "react";
import OurTeam from "../OurTeam";
import OurProjects from "../OurProject";
import Contact from "../Contact/Contact";
// import agriImg from "../../media/agriImg.png";
// import solarImg from "../../media/solarImg.png";
// import bioGasImg from "../../media/bioGasImg.png";
// import ourVisionImg from "../../media/ourVisionImg.jpg";
// import ourValuesImg from "../../media/ourValuesImg.jpg";
// import ourMissionImg from "../../media/ourMissionImg.jpg";
import styles from "../../../styles/Homepage/Homepage.module.css";
import SolarCalculatorSection from "../SolarCalculatorSection/SolarCalculatorSection";
import CarbonCalculatorSection from "../CarbonCalculatorSection/CarbonCalculatorSection";

function Homepage() {

    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <div className={`${styles.mainHeading}`}>
                        About Us
                    </div>
                    <p className={`${styles.paragraph}`}>
                        LR Energy is India’s leading generator of renewable energy with a proven track record in delivering high performance cost competitive solar photovoltaic plants and economic biogas production to the market. The company is dedicated to promoting environmental, economic, and social sustainability with clean energy offerings for today and our future generations. In today’s world of climbing fossil fuel prices, approaching the peak oil supply limit, and discussions of global warming, Paris Agreement- our aim is to improve the quality of life and promote sustainable development throughout the nation by looking for new opportunities across multiple regulatory regimes.
                    </p>
                    <button type="button" class={`btn ${styles.btnStyle} mt-4`}>More About Us</button>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ overflow: "hidden" }}>
                            {/* <img src={ourMissionImg.src} class={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" /> */}
                            <img src='../../../ourMissionImg.jpg' class={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" />
                            <div class="card-body">
                                <h4 className="text-center">
                                    <b>Our Mission</b>
                                </h4>
                                <p class="card-text">Powering change by ensuring that we become a leader in the low carbon industry. Through LR Energy, we will build a culture that allows our people to integrate sustainability into every part of our day-to-day operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ overflow: "hidden" }}>
                            {/* <img src={ourValuesImg.src} class={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" /> */}
                            <img src='../../../ourValuesImg.jpg' class={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" />
                            <div class="card-body">
                                <h4 className="text-center">
                                    <b>Our Values</b>
                                </h4>
                                <p class="card-text">Help each other become effective, Integrity in our day-to-day working, Driving excellence and Be ethical.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div class="card h-100" style={{ overflow: "hidden" }}>
                            {/* <img src={ourVisionImg.src} class={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" /> */}
                            <img src='../../../ourVisionImg.jpg' class={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" />
                            <div class="card-body">
                                <h4 className="text-center">
                                    <b>Our Vision</b>
                                </h4>
                                <p class="card-text">To build the best renewable energy company by providing clean, green and secure energy for the benefit of the environment and our communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 pt-md-5">
                    <div className={`${styles.mainHeading}`}>
                        SERVICES
                    </div>
                    <p className={`${styles.paragraph}`}>
                        We combine a balanced portfolio of technologically advanced large-scale assets with outstanding technical and commercial expertise.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <h4>
                            {/* <img src={solarImg.src} alt="#ImgNotFound" width="40px" /> */}
                            <img src='../../../solarImg.png' alt="ImgNotFound" width="40px" />
                            &ensp;
                            <Link href="/solarPowerSolution" style={{ textDecoration: 'none', color: "black" }}>
                                <b>Solar Power Solutions</b>
                            </Link>
                        </h4>
                        <p class="card-text">With rising power prices and reducing amounts of power available for the increasing population, it would make sense to go solar. Our objective is to generate clean solar electricity, focusing on the most secure portion of the solar PV value chain: power plant development, financing, construction and asset management.</p>
                        <Link href="/solarPowerSolution" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>Know More</Link>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h4>
                            {/* <img src={bioGasImg.src} alt="#ImgNotFound" width="40px" /> */}
                            <img src='../../../bioGasImg.png' alt="ImgNotFound" width="40px" />
                            &ensp;
                            <Link href="/bioGasSolution" style={{ textDecoration: 'none', color: "black" }}>
                                <b>Bio-Gas Solutions</b>
                            </Link>
                        </h4>
                        <p class="card-text">The company’s strategy is based on generating and delivering clean energy and building renewable sources that are abundant, affordable and accessible. So, we focus on a high biogas production, low operational costs, low maintenance costs and a high flexibility in the biomasses that can be used in the biogas plant.</p>
                        <Link href="/bioGasSolution" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>Know More</Link>
                    </div>
                    <div className="col-md-4 mt-3">
                        <h4>
                            {/* <img src={agriImg.src} alt="#ImgNotFound" width="40px" /> */}
                            <img src='../../../agriImg.png' alt="ImgNotFound" width="40px" />
                            &ensp;
                            <Link href="/agriSolution" style={{ textDecoration: 'none', color: "black" }}>
                                <b>Agri Solutions</b>
                            </Link>
                        </h4>
                        <p class="card-text">As a premier recycler of organic residuals throughout Northern part of INDIA , LR Agri proudly manufactures Bio-enriched Compost & PROM.  Our company and products are known for quality, consistency, and value throughout the landscape, construction, and agricultural industries.</p>
                        <Link href="/agriSolution" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>Know More</Link>
                    </div>
                </div>
            </div>

            <div class={`${styles.section} mt-5`}></div>
            <div class={`container ${styles.content1} text-center`}>
                <div className={`${styles.mainHeading} pt-4`}>
                    FACTS
                </div>
                <div className="row">
                    <div className="col-lg-3 col-6 mt-4">
                        <h1 style={{ color: '#18d26e' }}>
                            <b>2</b>
                        </h1>
                        <p class="card-text"><b>PROJECTS</b></p>
                    </div>
                    <div className="col-lg-3 col-6 mt-4">
                        <h1 style={{ color: '#18d26e' }}>
                            <b>36</b>
                        </h1>
                        <p class="card-text"><b>CAPACITY (MW)</b></p>
                    </div>
                    <div className="col-lg-3 col-6 mt-4">
                        <h1 style={{ color: '#18d26e' }}>
                            <b>62370</b>
                        </h1>
                        <p class="card-text"><b>MWh PRODUCED</b></p>
                    </div>
                    <div className="col-lg-3 col-6 mt-4">
                        <h1 style={{ color: '#18d26e' }}>
                            <b>68040</b>
                        </h1>
                        <p class="card-text"><b>CO2 Saved (Tons)</b></p>
                    </div>
                </div>
            </div>

            <OurProjects />

            <div className="mt-5">
                <SolarCalculatorSection />
            </div>

            <div class={`${styles.bgSection} mt-5`}></div>
            <div class={`container ${styles.bgSectionContent} text-center`}>
                <div className="row p-sm-5 p-3">
                    <div className="col-xl-6">
                        <p className={`${styles.paragraph} text-white`}>
                            L R Energy is the upcoming name in the renewable energy market in India. Building on
                            the increased solar energy awareness and adoption for residential and business
                            purposes, L R Energy looks forward to transform the solar energy coverage across the
                            country with highly advanced and professional solar energy distribution, and aims to be
                            a leader in solar energy.
                            L R Energy is a team of people passionate for solar energy, with EPC experience of
                            over 200 MW in India and overseas, competent to provide end-to-end solar solutions
                            under one roof. We are in the process of setting up a 25 MW Solar Grid Connect Power
                            Plant.
                        </p>
                    </div>
                    <div className="col-xl-6">
                        <iframe width="100%" height="100%" style={{ minHeight: '400px' }} src="https://www.youtube.com/embed/LonBK2hrW8k" title="LR Energy 12 MW Solar Power Plant Sirsa, Haryana, India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <CarbonCalculatorSection />
            </div>

            <OurTeam />

            <Contact />

            <News />

            <Footer />
        </>
    );
}

export default Homepage;


