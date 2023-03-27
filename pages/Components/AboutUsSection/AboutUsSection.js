import styles from "../../../styles/Homepage/Homepage.module.css";

export default function AboutUsSection() {
    return (
        <>
            <div className="container mt-5">
                <div className="text-center">
                    <div className={`${styles.mainHeading}`}>
                        About Us
                    </div>
                    <p className={`${styles.paragraph}`}>
                        LR Energy is India’s leading generator of renewable energy with a proven track record in delivering high performance cost competitive solar photovoltaic plants and economic biogas production to the market. The company is dedicated to promoting environmental, economic, and social sustainability with clean energy offerings for today and our future generations. In today’s world of climbing fossil fuel prices, approaching the peak oil supply limit, and discussions of global warming, our aim is to improve the quality of life and promote sustainable development throughout the nation by looking for new opportunities across multiple regulatory regimes.
                    </p>
                    <h3 className="mt-5">
                        Investigating in clean Energy Generation Nationwide
                    </h3>
                    <p className={`${styles.paragraph}`}>
                        From delivering great value to our customers, to being good stewards of our environment, the company believes that undertaking responsibility for the environment and the communities we operate in is strongly linked to the Company’s growth and success.
                    </p>
                    <h3 className="mt-5">
                        Goals and Objectives
                    </h3>
                    <ul>
                        <li className={`${styles.paragraph}`}>
                            To promote the commercialization of renewable energy sources, including reduction of fossil fuels dependency and air toxics; and improvement of the nation’s economic development.
                        </li>
                        <li className={`${styles.paragraph}`}>
                            To promote large scale PV (photovoltaic) systems that provides cost effective power supply in locations where is expensive or impossible to send electricity through conventional power lines. The PV systems are also reliable and pollution free producer of electricity.
                        </li>
                        <li className={`${styles.paragraph}`}>
                            To promote the development and expansion of compressed biogas manufacturing through the embodiment of biobased products such as agricultural crops, urban waste residues, industrial waste, forestry residues, press mud other poultry manure.
                        </li>
                        <li className={`${styles.paragraph}`}>
                            Production of solar energy and biogas production at a utility scale to be harnessed efficiently and utilized intelligently in a technologically advanced society.
                        </li>
                        <li className={`${styles.paragraph}`}>
                            Generating energy that mitigates the greenhouse gas emissions from fossil fuels and reduces air pollution.
                        </li>
                    </ul>
                    <p className={`${styles.paragraph} mt-5`}>
                        We are constantly looking for new opportunities across multiple regulatory regimes that are at different phases of integration in the rapidly expanding Indian solar market. Our approach is based on the principle of diversification, intended to spread our portfolio’s risk across projects, countries, and currencies.
                    </p>
                    <p className={`${styles.paragraph} mt-5`}>
                        Our flexible footprint and team allow us to benefit from the diverse set of opportunities as they arise. Our preference is transacting in jurisdictions with stable regulatory frameworks and we remain devoted to our core belief that no single technology will prevail in the solar market during the near term, which requires us to remain technologically unconstrained.
                    </p>
                    <p className={`${styles.paragraph} mt-5 text-center`}>
                        LR Energy is owned by its investors Lancer Group of Companies.
                    </p>
                    <p className={`${styles.paragraph} mt-5 text-center`}>
                        For Group Profile Visit :  <span style={{ color: '#18d26e' }}>Click here to Download brochure</span>
                    </p>
                </div>
            </div>
        </>
    )
}
