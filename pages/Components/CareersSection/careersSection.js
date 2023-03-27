import styles from "../../../styles/Homepage/Homepage.module.css";

export default function CareersSection() {
  return (
    <>
      <div className="container mt-5">
        <div>
          <div className={`${styles.mainHeading} text-center`}>
            OPENINGS AT LR ENERGY
          </div>
          <h3 className="mt-5 text-center">
            AGM/DGM Project Finance: (8/10+ Years)
          </h3>
          <h4 className="mt-3">Eligibility :</h4>
          <p className={`${styles.paragraph}`}>
            <ul>
              <li>CFA(Level 3)/CA / MBA-Finance (From a reputed university) or equivalent in finance/economics</li>
              <li>Prior experience in NBFC/ Corporate Banking/ Relevant</li>
            </ul>
          </p>
          <h4 className="mt-3">Skills Required :</h4>
          <p className={`${styles.paragraph}`}>
            <ul>
              <li>10 Years of experience in Project Finance, Debt Syndication, Credit Appraisal, Financial Modelling, Valuation, Competitive Bidding, Mezzanine Funding, Financial & Business Analysis for Proposals</li>
              <li>In-depth understanding of Project Finance concepts, Power Purchase Agreements, OPEX and CAPEX model and associated risks</li>
              <li>Preparation of Credit Appraisal Notes/ Memos - SWOT Analysis, Risk Mitigation, Scenario Analysis etc</li>
              <li>Strong relationship with key stakeholders in a Project Finance Transaction – Developers, Lenders, Legal/Technical etc. Financial Structuring</li>
              <li>Building detailed financial models – Projections, Financial statements, Sensitivity Analysis etc.</li>
            </ul>
          </p>
          <h4 className="mt-3">Experience: Middle/Senior Level</h4>
          <h4 className="mt-3">Salary: As per industry standards</h4>
          <h4 className="mt-3">Joining Date: Immediately</h4>
          <h4 className="mt-3">Send CV/Resume to : <span style={{ color: '#18d26e' }}>info@lrenergy.in</span></h4>
        </div>
      </div>
    </>
  )
}
