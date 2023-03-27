import * as React from "react";
// import team1 from "../media/team1.jpg";
// import team2 from "../media/team2.jpg";
// import team3 from "../media/team3.jpg";
// import team4 from "../media/team4.jpg";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/Homepage/Homepage.module.css";

function OurTeam() {

    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <div className={`${styles.mainHeading}`}>
                        OUR TEAM
                    </div>
                    <p>
                        Management Team
                    </p>
                    <Carousel variant="light">
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team1.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team2.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team2.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team1.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team2.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team2.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team1.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team2.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team2.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                    <p className="mt-5">
                        Leadership Team
                    </p>
                    <Carousel variant="light">
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team3.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team2.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team4.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team3.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team2.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team4.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row">
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team1.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team3.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                                <div className="col-md-6" style={{ overflow: 'hidden' }}>
                                    {/* <img src={team2.src} alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} /> */}
                                    <img src="/team4.jpg" alt="#ImgNotFound" className={`${styles.imgStyle} w-100`} style={{ height: '300px' }} />
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default OurTeam;


