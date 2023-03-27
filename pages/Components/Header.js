import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";

function Header() {

    const [visible, setVisible] = useState(true)
    const [position, setPosition] = useState("")

    useEffect(() => {
        if (position >= 140) {
            setVisible(false)
        } else {
            setVisible(true)
        }
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            if (position >= 140) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <>
            <Navbar expand="md" className={`mb-3 ${visible ? styles.blackBgNavbar : styles.transparentBgNavbar} fixed-top`}>
                <Container fluid className='px-md-5 mx-sm-4'>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <img src='/logo.png' alt="#ImgNotFound" width="100px" height="50px" />
                    </Link>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} className={`${styles.offcanvasNavbarBg}`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className='text-white px-3'>
                                Navbar Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Link href="/" className={`p-3 ${styles.navbarOptions}`}>Home</Link>
                                <Link href="/aboutus" className={`p-3 ${styles.navbarOptions}`}>About Us</Link>
                                <Dropdown>
                                    <Dropdown.Toggle variant='auto' id="dropdown-basic" className={`p-3 text-white ${styles.navbarDropdownOptions}`}>
                                        Services
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ borderRadius: '0', marginTop: '7px' }}>
                                        <Link href="/solarPowerSolution" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/solarPowerSolution">
                                                Solar Power Solution
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/bioGasSolution" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/bioGasSolution">
                                                Bio Gas Solution
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/agriSolution" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/agriSolution">
                                                Agri Solution
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/solarCalculator" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/solarCalculator">
                                                Solar Calculator
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/carbonCalculator" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/carbonCalculator">
                                                Carbon Footprint Calculator
                                            </Dropdown.Item>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant='auto' id="dropdown-basic" className={`p-3 text-white ${styles.navbarDropdownOptions}`}>
                                        Reach Us
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ borderRadius: '0', marginTop: '7px' }}>
                                        <Link href="/contact" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/contact">
                                                Contact Us
                                            </Dropdown.Item>
                                        </Link>
                                        <Link href="/careers" className={`${styles.navbarOptions}`}>
                                            <Dropdown.Item href="/careers">
                                                Careers
                                            </Dropdown.Item>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
