import * as React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from "../../../styles/Homepage/Homepage.module.css";

function CarbonCalculatorSection() {
    const [factorOfElectricityQty, setFactorOfElectricityQty] = React.useState("1")
    const [electricityQty, setEectricityQty] = React.useState("")
    const [naturalGasQty, setNaturalGasQty] = React.useState("")
    const [heatingOilQty, setHeatingOilQty] = React.useState("")
    const [coalQty, setCoalQty] = React.useState("")
    const [LPGQty, setLPGQty] = React.useState("")
    const [propaneQty, setPropaneQty] = React.useState("")
    const [woodQty, setWoodQty] = React.useState("")

    const [electricityTonnesQty, setEectricityTonnesQty] = React.useState("")
    const [naturalGasTonnesQty, setNaturalGasTonnesQty] = React.useState("")
    const [heatingOilTonnesQty, setHeatingOilTonnesQty] = React.useState("")
    const [coalTonnesQty, setCoalTonnesQty] = React.useState("")
    const [LPGTonnesQty, setLPGTonnesQty] = React.useState("")
    const [propaneTonnesQty, setPropaneTonnesQty] = React.useState("")
    const [woodTonnesQty, setWoodTonnesQty] = React.useState("")
    const [total, setTotal] = React.useState("")


    function submitCalculateForm(e) {
        e.preventDefault()
        setEectricityTonnesQty((electricityQty * 0.001))
        setNaturalGasTonnesQty((naturalGasQty * 0.0002))
        setHeatingOilTonnesQty((heatingOilQty * 0.0002))
        setCoalTonnesQty((coalQty * 2.88))
        setLPGTonnesQty((LPGQty * 0.0002))
        setPropaneTonnesQty((propaneQty * 0.006))
        setWoodTonnesQty((woodQty * 0.051))
        setTotal((
            (factorOfElectricityQty / 100) +
            (electricityQty * 0.001) +
            (naturalGasQty * 0.0002) +
            (heatingOilQty * 0.0002) +
            (coalQty * 2.88) +
            (LPGQty * 0.0002) +
            (propaneQty * 0.006) +
            (woodQty * 0.051)
        ).toFixed(2))
    }

    return (
        <>
            <div className="container mt-3">
                <div className="login-screen">
                    <div>
                        <div>
                            <h1 className="fw-semibold mb-5 text-center mt-2">
                                <u className={`${styles.mainHeading}`}>Carbon Calculator</u>
                            </h1>
                            <form onSubmit={(e) => submitCalculateForm(e)}>
                                <label for="electricity" className="form-label">Electricity <b>at a factor of <input type="number" required value={factorOfElectricityQty} onChange={(e) => setFactorOfElectricityQty(e.target.value)} style={{ width: "70px" }} /> kgCO<sub>2e</sub>/kWh</b></label>
                                <InputGroup className="mb-3">
                                    <input type='number' className="form-control" style={{ fontSize: "18px" }} value={electricityQty} onChange={(e) => setEectricityQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>kWh</InputGroup.Text>
                                </InputGroup>
                                <label for="natural_gas" className="form-label">Natural Gas</label>
                                <InputGroup className="mb-3">
                                    <input type="number" className="form-control" id="natural_gas" style={{ fontSize: "18px" }} value={naturalGasQty} onChange={(e) => setNaturalGasQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>kWh</InputGroup.Text>
                                </InputGroup>
                                <label for="heating_oil" className="form-label">Heatinng Oil</label>
                                <InputGroup className="mb-3">
                                    <input type="number" className="form-control" id="heating_oil" style={{ fontSize: "18px" }} value={heatingOilQty} onChange={(e) => setHeatingOilQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>kWh</InputGroup.Text>
                                </InputGroup>
                                <label for="coal" className="form-label">Coal</label>
                                <InputGroup className="mb-3">
                                    <input type="number" className="form-control" id="coal" style={{ fontSize: "18px" }} value={coalQty} onChange={(e) => setCoalQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>tonnes</InputGroup.Text>
                                </InputGroup>
                                <label for="lpg" className="form-label">LPG</label>
                                <InputGroup className="mb-3">
                                    <input type="number" className="form-control" id="lpg" style={{ fontSize: "18px" }} value={LPGQty} onChange={(e) => setLPGQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>kWh</InputGroup.Text>
                                </InputGroup>
                                <label for="propane" className="form-label">Propane</label>
                                <InputGroup className="mb-3">
                                    <input type="number" className="form-control" id="propane" style={{ fontSize: "18px" }} value={propaneQty} onChange={(e) => setPropaneQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>US gallons</InputGroup.Text>
                                </InputGroup>
                                <label for="wood" className="form-label">Wood</label>
                                <InputGroup className="mb-3">
                                    <input type="number" className="form-control" id="wood" style={{ fontSize: "18px" }} value={woodQty} onChange={(e) => setWoodQty(e.target.value)} required autoComplete='off' />
                                    <InputGroup.Text style={{ height: '41px' }}>tonnes</InputGroup.Text>
                                </InputGroup>

                                <button type="submit" class="btn btn-primary w-100 mt-3">Calculate Household Footprint</button>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    total != "" ?
                        <>
                            <p className="mt-4">
                                {electricityTonnesQty} tonnes:	10 kWh of electricity at 10 kgCO2e/kWh <br />
                                {naturalGasTonnesQty} tonnes:	49 kWh of natural gas <br />
                                {heatingOilTonnesQty} tonnes:	100 kWh of heating oil <br />
                                {coalTonnesQty} tonnes:	1 tonnes of coal <br />
                                {LPGTonnesQty} tonnes:	50 kWh of LPG <br />
                                {propaneTonnesQty} tonnes:	10 US gallons of propane <br />
                                {woodTonnesQty} tonnes:	10 tonnes of wood <br />
                            </p>
                            <ListGroup className="text-center my-4">
                                <ListGroup.Item>
                                    <h3>Total House Footprint = {total} tonnes of CO2e</h3>
                                </ListGroup.Item>
                            </ListGroup>
                        </>
                        :
                        ""
                }
            </div>
        </>
    );
}

export default CarbonCalculatorSection;


