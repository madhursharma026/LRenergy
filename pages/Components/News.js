import Link from 'next/link';
// import news1 from "../media/news1.jpeg";
// import news2 from "../media/news2.jpg";
// import news3 from "../media/news3.jpg";
// import news4 from "../media/news4.png";
// import news5 from "../media/news5.jpg";
// import news6 from "../media/news6.jpg";
import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/Homepage/Homepage.module.css";

export default function News() {
    return (
        <>
            <div className="container">
                <div className="text-center mt-5">
                    <div className={`${styles.mainHeading}`} style={{ fontSize: 'calc(6vw + 1.5rem)' }}>
                        NEWS
                    </div>
                    <Link href="/" className={`${styles.btnStyle}`} style={{ textDecoration: 'none' }}>ALL</Link>
                </div>
                <div className="row">

                </div>
                <Carousel variant="light">
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-4 mt-3">
                                <div style={{ overflow: "hidden", border:'5px solid black', border:'5px solid black' }}>
                                    {/* <img src={news1.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" /> */}
                                    <img src="/news1.jpeg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div style={{ overflow: "hidden", border:'5px solid black' }}>
                                    {/* <img src={news2.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" /> */}
                                    <img src="/news2.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div style={{ overflow: "hidden", border:'5px solid black' }}>
                                    {/* <img src={news3.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" /> */}
                                    <img src="/news3.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-4 mt-3">
                                <div style={{ overflow: "hidden", border:'5px solid black' }}>
                                    {/* <img src={news4.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" /> */}
                                    <img src="/news4.png" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div style={{ overflow: "hidden", border:'5px solid black' }}>
                                    {/* <img src={news5.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" /> */}
                                    <img src="/news5.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div style={{ overflow: "hidden", border:'5px solid black' }}>
                                    {/* <img src={news6.src} className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" /> */}
                                    <img src="/news6.jpg" className={`card-img-top ${styles.imgStyle}`} alt="ImgNotFound" height="300px" />
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
