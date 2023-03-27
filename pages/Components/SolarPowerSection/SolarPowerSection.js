// import solarGraph from "../../media/solarGraph.jpg";
import styles from "../../../styles/Homepage/Homepage.module.css";

export default function SolarPowerSection() {
    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <div className={`${styles.mainHeading}`}>
                        SOLAR POWER SOLUTIONS
                    </div>
                    <h3 className="mt-4" style={{ textAlign: "justify" }}>
                        We leverage our strong relationships with partners in utility, equipment, EPC, O&M and financing, as well as experienced and reputable consultants and advisors.
                    </h3>
                    <h5 style={{ textAlign: "justify" }}>
                        Our objective is to generate clean solar electricity, focussing on the most secure portion of the solar PV value chain: power plant development, financing, construction and asset management.
                    </h5>
                    <h5 style={{ textAlign: "justify" }}>
                        Building a sustainable business with a long-term focus is a critical component of our strategy. We believe that assuming responsibility for the environment and the communities we operate in is strongly linked to the Company’s success.
                    </h5>
                    <h5 style={{ textAlign: "justify" }}>
                        At our plants we aim to create employment opportunities for the local communities during the construction period and beyond. In addition to our core business activity of producing clean, emission free electricity, we are giving back to our communities through community investment programmes and the direct efforts of our employees.
                    </h5>
                    <div className={`${styles.mainHeading}`}>
                        OUR SERVICES
                    </div>
                    <h3 className="mt-4" style={{ textAlign: "justify" }}>
                        EPC Solar Projects :
                    </h3>
                    <h5 style={{ textAlign: "justify" }}>
                        LR Energy’s engineering, procurement, and construction (EPC) team provides innovative, sustainable and reliable solar energy solutions to clients. Our team is adept at conducting Viability Studies, Financing, Permitting, Project Development, Engineering and Construction. We have the wherewithal to deliver projects on-budget and on-time due to our vast experience in the field. Our experts ensure the best quality with one-point contact and minimum effort from the client.
                    </h5>
                    <h3 className="mt-4" style={{ textAlign: "justify" }}>
                        Solar Consultancy :
                    </h3>
                    <h5 style={{ textAlign: "justify" }}>
                        Our team is skilled to provide end-to-end solutions right from design to final execution and commissioning. We offer turnkey working systems and provide a whole range of services for projects from viability studies to commissioning. LR acts as a single point of contact for all solar energy needs, reducing the hassle to have to commission various organizations to design, install and fulfill other functions of a project. We are capable of managing a project through financing, engineering, procurement, construction and beyond.
                    </h5>
                    <h3 className="mt-4" style={{ textAlign: "justify" }}>
                        Purchase & Sale of Solar Projects :
                    </h3>
                    <h5 style={{ textAlign: "justify" }}>
                        We provide assistance with all aspects of purchase and sale of solar projects to our clients. Whether it’s locating the right project, based on specific needs and preferences of our customers, negotiating a fair price or making additions to the existing model, LR Energy provides complete support in every sphere of the transaction. Our deep expertise and associations in the field ensure reliability and a smooth shift from one client to the other. We also provide post-commissioning services in order to ensure the switch over is viable and in sync with the needs of the new buyer.
                    </h5>
                    <h3 className="mt-4" style={{ textAlign: "justify" }}>
                        PPA Signing :
                    </h3>
                    <h5 style={{ textAlign: "justify" }}>
                        Understanding and reducing the risks associated with renewable energy projects is critical for developers, lenders and investors. Therefore, we not only help our clients with planning and installation of solar projects, but our team also handles PPA Signing. For large industrial projects, we also bring onboard investors for PPA. We deeply understand this field and are therefore, able to bring together all the right components to make solar a viable and sustainable option for our clients.
                    </h5>
                    <h3 className="mt-4" style={{ textAlign: "justify" }}>
                        Power Trading :
                    </h3>
                    <h5 style={{ textAlign: "justify" }}>
                        Electricity is now treated as a commodity and with the rise of solar storage systems, our clients can partake inpeer-to-peer energy trading. This system allows consumers to take advantage of other users who produce more energy than they need and those consumers can sells their excess power for profit. LR Energy is a one-stop solution for all your solar energy needs, including power trading, by helping our clients find customers and negotiating the right price. We also help develop innovative products and services with intelligent monitoring, control and communication technologies.
                    </h5>

                    <img src="../solarGraph.jpg" alt="#ImgNotFound" className="mt-5" style={{ maxWidth: "1200px", margin: "auto" }} />
                </div>
            </div>
        </>
    )
}
