import * as React from "react"
import AddWaitlist from '../components/AddWaitlist';
import { Helmet } from 'react-helmet';

import SectionContainer from "../components/SectionContainer";
import SectionStep from "../components/SectionStep";
import Layout from "../components/navbar/layout";
import Code from "../images/python.svg";
import "./_index.scss";

const LandingPage = () => {

    const STEPS = [
        {
            icon: <i className="bi bi-code-square" style={{"font-size": "4rem"}}></i>,
            text: "Develop immediately from day one."    
        },
        {
            icon: <i className="bi bi-person-fill" style={{"font-size": "4rem"}}></i>,
            text: "Request new libraries and functions through a 5-minute form or phone call."    
        },
        {
            icon: <i className="bi bi-cup-fill" style={{"font-size": "4rem"}}></i>,
            text: "Complexity managed. Now you can focus on your mission and payload."    
        }
    ];

    const TECH = [
        {
            icon: <i className="fab fa-python python" style={{"font-size": "4rem"}}></i>,
            text: "Develop easily with PyCubed, the simplest satellite stack built on Python."
        },
        {
            icon: <i className="bi bi-intersect" style={{"font-size": "4rem"}}></i>,
            text: "Exploit the prebuilt integrations to focus more on your core mission capabilities."
        }
    ];

    return (
    <Layout className="index-container">
        <Helmet>
            <title>Edias | Home</title>
            <meta name="description" content="Develop your CubeSat in a matter of months." />
        </Helmet>
        <SectionContainer className="section-hero" backgroundColor="dark">
            <div className="hero-container col">
                <div className="hero-text row">
                    <h1 className="hero-title display-4">
                        Develop your CubeSats in a matter of months.
                    </h1>
                    <h4 className="hero-subtitle">
                        We abstract away the system-level complexity of your CubeSat, so that
                        you can focus on making your mission happen, sooner.
                    </h4>
                </div>
                <div className="row">
                    <AddWaitlist className="hero-input" />
                </div>
            </div>
        </SectionContainer>
        <div className="layout-wrapper">
            <SectionContainer className="section-how" fullWidth={false} backgroundColor="light">
                <div className="row flex-row how-text">
                    <div className="how-title-container col">
                        <h2 className="how-title display-4">
                            How it works
                        </h2>
                    </div>
                    <div className="how-content-container col">
                        <SectionStep contents={STEPS} />
                    </div>
                </div>
                <div>
                </div>
            </SectionContainer>
            <SectionContainer className="section-technical">
                <div className="technical-text col-sm-6">
                    <h2 className="technical-title display-4">
                        Made by developers, for developers.
                    </h2>
                    <h4 className="technical-content--text">
                        We agonise over the right technology so that you don't have to spend months reading manuals and stitching together disparate subsystems.
                    </h4>
                    <div className="technical-content--details">
                        <SectionStep contents={TECH} />
                    </div>
                </div>
                <div className="technical-code col-sm-6">
                    <img className="code-img" src={Code} alt="code"></img>
                </div>
            </SectionContainer>
        </div>
        <SectionContainer className="section-price" backgroundColor="dark">
            <div className="row flex-row price-text">
                <div className="price-title-container col">
                    <h2 className="price-title display-4">
                        It costs as little as your phone.
                    </h2>
                    <h4 className="price-content--text">
                        All included, like your phone.
                    </h4>
                    <AddWaitlist className="hero-input" />
                </div>
                
            </div>
        </SectionContainer>
    </Layout>
    );
};

export default LandingPage;