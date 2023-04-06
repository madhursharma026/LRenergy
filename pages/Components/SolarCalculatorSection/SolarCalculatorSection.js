import * as React from "react";
import Modal from 'react-bootstrap/Modal';
import styles from "../../../styles/Homepage/Homepage.module.css";

function SolarCalculatorSection() {
    const [lgShow, setLgShow] = React.useState(false);
    const [electricityCost, setEectricityCost] = React.useState("")
    const [solarPanelCapacity, setSolarPanelCapacity] = React.useState("")
    const [projectCostWithSubsidy, setprojectCostWithSubsidy] = React.useState("")
    const [projectCostWithoutSubsidy, setprojectCostWithoutSubsidy] = React.useState("")
    const [electricityGenerateThroughSolarPlant, setElectricityGenerateThroughSolarPlant] = React.useState("")


    function submitCalculateForm(e) {
        e.preventDefault()
        setprojectCostWithSubsidy(((3 * 40991) - (40991 * 3 * 40 / 100) + (40991 * (solarPanelCapacity - 3) - (40991 * (solarPanelCapacity - 3) * 20 / 100))))
        setprojectCostWithoutSubsidy(solarPanelCapacity * 40991)
        setElectricityGenerateThroughSolarPlant(0.8219178082191 * solarPanelCapacity * 4.6)
        setLgShow(true)
    }

    return (
        <div className="container mt-3">
            <div className="login-screen">
                <div>
                    <div>
                        <h1 className="fw-semibold mb-5 text-center mt-2">
                            <u className={`${styles.mainHeading}`} style={{ fontSize: 'calc(6vw + 1.5rem)' }}>Solar Calculator</u>
                        </h1>
                        <form onSubmit={(e) => submitCalculateForm(e)}>
                            <label for="solarPanelCapacity" className="form-label"> Solar Panel Capacity you want to install</label>
                            <input type='number' className="form-control" id="solarPanelCapacity" style={{ fontSize: "18px" }} value={solarPanelCapacity} onChange={(e) => setSolarPanelCapacity(e.target.value)} required autoComplete='off' />
                            <label for="electricityCost" className="form-label">What is your average Electricity Cost?</label>
                            <input type="number" className="form-control" id="electricityCost" style={{ fontSize: "18px" }} value={electricityCost} onChange={(e) => setEectricityCost(e.target.value)} required autoComplete='off' />
                            <label for="place" className="form-label">Solar For</label>
                            <input type="text" className="form-control" id="place" style={{ fontSize: "18px" }} value="Residential" disabled />

                            <button type="submit" class="btn btn-primary w-100 mt-3">Calculate</button>
                        </form>
                    </div>
                </div>
            </div>
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xl">
                        Solar Rooftop Calculator
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Average solar irradiation in UTTAR PRADESH state is 1156.39 W / sq.m <br />
                    1kWp solar rooftop plant will generate on an average over the year 4.6 kWh of electricity per day (considering 5.5 sunshine hours) <br />

                    <div className="row mt-3">
                        <b>1. Size of Power Plant</b>
                        <div className="col-8">
                            Feasible Plant size as per your Capacity :
                        </div>
                        <div className="col-4">
                            {solarPanelCapacity}
                        </div>
                        <div className="col-8 mt-3">
                            <b>2. Cost of the Plant :</b>
                        </div>
                        <div className="col-4 mt-3">
                            Rs. 40991 Rs. / kW <br />
                        </div>
                        <div className="col-8">
                            MNRE current Benchmark Cost <span className="text-muted" style={{ fontSize: '13px' }}>(without GST)</span> :
                        </div>
                        <div className="col-4">
                            Rs. {Math.ceil(projectCostWithoutSubsidy)}
                        </div>
                        <div className="col-8">
                            With subsidy 40% upto 3kW & 20% above 3kW upto 10kW <span className="text-muted" style={{ fontSize: '13px' }}>(Based on current MNRE benchmark without GST)</span> :
                        </div>
                        <div className="col-4">
                            Rs. {Math.ceil(projectCostWithSubsidy)}
                        </div>
                        <b className="mt-3">3. Total Electricity Generation from Solar Plant :</b>
                        <div className="col-8">
                            Annual  :
                        </div>
                        <div className="col-4">
                            {Math.ceil(electricityGenerateThroughSolarPlant * 365)}kWh
                        </div>
                        <div className="col-8">
                            Life-Time (25 years):
                        </div>
                        <div className="col-4">
                            {Math.ceil(electricityGenerateThroughSolarPlant * 365 * 25)}kWh
                        </div>
                        <b className="mt-3">4) Financial Savings :</b>
                        <b className="mt-3">a) Tariff @ Rs.4.78/ kWh (for top slab of traffic) - No increase assumed over 25 years :</b>
                        <div className="col-8">
                            Monthly   : <br />
                            Annually   : <br />
                            Life-Time (25 years) : <br />
                        </div>
                        <div className="col-4">
                            Rs. {Math.ceil(((electricityGenerateThroughSolarPlant * 365) / 12) * electricityCost)} <br />
                            Rs. {Math.ceil((electricityGenerateThroughSolarPlant * 365) * electricityCost)} <br />
                            Rs. {Math.ceil(((electricityGenerateThroughSolarPlant * 365) * 25) * electricityCost)} <br />
                        </div>
                        <div className="col-8 mt-5">
                            Carbon dioxide emissions mitigated is <br />
                            This installation will be equivalent to planting <br />
                        </div>
                        <div className="col-4 mt-5">
                            {Math.floor(28.28 * solarPanelCapacity)} tonnes. <br />
                            {Math.floor(45.28 * solarPanelCapacity)} Teak trees over the life time. <span className="text-muted" style={{ fontSize: '13px' }}>(Data from IISc)</span>. <br />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SolarCalculatorSection;


