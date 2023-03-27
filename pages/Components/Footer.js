
function Footer() {

    return (
        <>
            <div className="p-sm-5 p-3 mt-5" style={{ background: '#111111' }}>
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-4 mt-3">
                            <h1>LR ENERGY</h1>
                            <p>Renewable Solutions.</p>
                            <i class="fa fa-facebook-square px-2" style={{ fontSize: '24px' }}></i>
                            <i class="fa fa-linkedin px-2" style={{ fontSize: '24px' }}></i>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h6>
                                REGISTERED OFFICE:
                                <hr />
                            </h6>
                            <h6 style={{ maxWidth: '250px' }}>
                                7,Golden Gate Westend
                                Green, Rajokri New Delhi, Delhi
                                110038 India
                                Phone: +91 (0) 124-4816888
                                Email: info@lrenergy.in
                            </h6>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h6>
                                CORPORATE OFFICE:
                                <hr />
                            </h6>
                            <h6 style={{ maxWidth: '250px' }}>
                                The Oberoi Corporate Tower
                                Level 3, Building No. 11, DLF Cyber City,
                                Gurgaon, Haryana-122002
                                Phone: +91 (0) 124-4816888
                                Email: info@lrenergy.in
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white text-center p-4">
                © Copyright <b>Lr Energy</b>. All Rights Reserved
            </div>
        </>
    );
}

export default Footer;


