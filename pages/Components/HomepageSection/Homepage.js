import News from "../News";
import Link from "next/link";
import Footer from "../Footer";
import * as React from "react";
import OurTeam from "../OurTeam";
import OurProjects from "../OurProject";
import Contact from "../Contact/Contact";
import styles from "../../../styles/Homepage/Homepage.module.css";
import SolarCalculatorSection from "../SolarCalculatorSection/SolarCalculatorSection";
import CarbonCalculatorSection from "../CarbonCalculatorSection/CarbonCalculatorSection";

function Homepage() {

    return (
        <>
            <div className="px-3 px-sm-5 mx-md-5 mt-5">
                {/* <div className="container mt-5"> */}
                <div className="row mt-3">
                    <div className={`text-center`} style={{ fontSize: "calc(6vw + 1.5rem)", fontWeight: "500", lineHeight: "1em", }}>
                        About Us
                    </div>
                    <div className={`col-xxl-4 ${styles.content}`}>
                        <p className={`${styles.contentSideParagraph} mt-3`} style={{ fontSize: "24px", fontWeight: "500", lineHeight: "1em" }}>
                            LR Energy is India’s leading generator of renewable energy with a proven track record in delivering high performance cost competitive solar photovoltaic plants and economic biogas production to the market. The company is dedicated to promoting environmental, economic, and social sustainability with clean energy offerings for today and our future generations. In today’s world of climbing fossil fuel prices, approaching the peak oil supply limit, and discussions of global warming, Paris Agreement- our aim is to improve the quality of life and promote sustainable development throughout the nation by looking for new opportunities across multiple regulatory regimes.
                        </p>
                        <Link href="/aboutus" className={`${styles.btnStyle} mt-4`} style={{ textDecoration: 'none' }}>More About Us</Link>
                    </div>
                    <div className={`col-xxl-8 ${styles.colStyle1}`}>
                        <div className="row">
                            <div className={`col-lg-4 ${styles.colStyle1}`}>
                                <div class="card" style={{ overflow: "hidden", border:'5px solid black' }}>
                                    <div className={`${styles.block} ${styles.imgStyle}`} style={{ backgroundImage: "url(https://l-renergy.vercel.app/ourMissionImg.jpg)", minHeight: '400px', width: '100%', }}>
                                        <div class={`${styles.centered} p-3`}>
                                            <h1 className="text-center">Our Mission</h1>
                                            <h5 style={{ textAlign: 'justify' }}>
                                                Powering change by ensuring that we become a leader in the low carbon industry. Through LR Energy, we will build a culture that allows our people to integrate sustainability into every part of our day-to-day operations.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-4 ${styles.colStyle2}`}>
                                <div class="card" style={{ overflow: "hidden", border:'5px solid black' }}>
                                    <div className={`${styles.block} ${styles.imgStyle}`} style={{ backgroundImage: "url(https://l-renergy.vercel.app/ourValuesImg.jpg)", minHeight: '400px', width: '100%', }}>
                                        <div class={`${styles.centered} p-3`}>
                                            <h1 className="text-center">Our Values</h1>
                                            <h5 style={{ textAlign: 'justify' }}>
                                                Help each other become effective, Integrity in our day-to-day working, Driving excellence and Be ethical.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-4 ${styles.colStyle3}`}>
                                <div class="card" style={{ overflow: "hidden", border:'5px solid black' }}>
                                    <div className={`${styles.block} ${styles.imgStyle}`} style={{ backgroundImage: "url(https://l-renergy.vercel.app/ourVisionImg.jpg)", minHeight: '400px', width: '100%', }}>
                                        <div class={`${styles.centered} p-3`}>
                                            <h1 className="text-center">Our Vision</h1>
                                            <h5 style={{ textAlign: 'justify' }}>
                                                To build the best renewable energy company by providing clean, green and secure energy for the benefit of the environment and our communities.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container-lg mt-5"> */}
                    <div className="text-center mt-5 pt-md-5">
                        <div className={`${styles.mainHeading}`} style={{ fontSize: 'calc(6vw + 1.5rem)' }}>
                            SERVICES
                        </div>
                        <p className={`text-center ${styles.paragraph}`}>
                            We combine a balanced portfolio of technologically advanced large-scale assets with outstanding technical and commercial expertise.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mt-3">
                            <div class="card h-100" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: 'none' }}>
                                <div class="card-body">
                                    <h4>
                                        <img src='../../../solarImg.png' alt="ImgNotFound" width="80px" className="mb-3" />
                                        <br />
                                        <Link href="/solarPowerSolution" style={{ textDecoration: 'none', color: "black" }}>
                                            <b>Solar Power Solutions</b>
                                        </Link>
                                    </h4>
                                    <p class="card-text">With rising power prices and reducing amounts of power available for the increasing population, it would make sense to go solar. Our objective is to generate clean solar electricity, focusing on the most secure portion of the solar PV value chain: power plant development, financing, construction and asset management.</p>
                                    <Link href="/solarPowerSolution" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <div class="card h-100" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: 'none' }}>
                                <div class="card-body">
                                    <h4>
                                        <img src='../../../bioGasImg.png' alt="ImgNotFound" width="80px" className="mb-3" />
                                        <br />
                                        <Link href="/bioGasSolution" style={{ textDecoration: 'none', color: "black" }}>
                                            <b>Bio-Gas Solutions</b>
                                        </Link>
                                    </h4>
                                    <p class="card-text">The company’s strategy is based on generating and delivering clean energy and building renewable sources that are abundant, affordable and accessible. So, we focus on a high biogas production, low operational costs, low maintenance costs and a high flexibility in the biomasses that can be used in the biogas plant.</p>
                                    <Link href="/bioGasSolution" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>Know More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <div class="card h-100" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: 'none' }}>
                                <div class="card-body">
                                    <h4>
                                        <img src='../../../agriImg.png' alt="ImgNotFound" width="80px" className="mb-3" />
                                        <br />
                                        <Link href="/agriSolution" style={{ textDecoration: 'none', color: "black" }}>
                                            <b>Agri Solutions</b>
                                        </Link>
                                    </h4>
                                    <p class="card-text">As a premier recycler of organic residuals throughout Northern part of INDIA , LR Agri proudly manufactures Bio-enriched Compost & PROM.  Our company and products are known for quality, consistency, and value throughout the landscape, construction, and agricultural industries.</p>
                                    <Link href="/agriSolution" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>Know More</Link>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div class={`${styles.section} mt-5`}></div>
            <div class={`container ${styles.content1} text-center`}>
                <div className="row">
                    <div className="col-md-4" style={{ margin: 'auto' }}>
                        <div className={`${styles.mainHeading} pt-4`} style={{ fontSize: 'calc(6vw + 1.5rem)' }}>
                            FACTS
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-6 mt-4">
                                <h1 style={{ color: '#18d26e' }}>
                                    <b>2</b>
                                </h1>
                                <p class="card-text"><b>PROJECTS</b></p>
                            </div>
                            <div className="col-6 mt-4">
                                <h1 style={{ color: '#18d26e' }}>
                                    <b>36</b>
                                </h1>
                                <p class="card-text"><b>CAPACITY (MW)</b></p>
                            </div>
                            <div className="col-6 mt-4">
                                <h1 style={{ color: '#18d26e' }}>
                                    <b>62370</b>
                                </h1>
                                <p class="card-text"><b>MWh PRODUCED</b></p>
                            </div>
                            <div className="col-6 mt-4">
                                <h1 style={{ color: '#18d26e' }}>
                                    <b>68040</b>
                                </h1>
                                <p class="card-text"><b>CO2 Saved (Tons)</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurProjects />

            <div className="mt-5">
                <SolarCalculatorSection />
            </div>

            <div className="mt-5" style={{ backgroundImage: 'url(https://amplussolar.com/newAmplus/images/amplus-solar-testimonials-bg.jpg)', border: '20px solid #767676' }}>
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


