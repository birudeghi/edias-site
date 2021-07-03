import * as React from "react"
import AddWaitlist from '../components/AddWaitlist';
import { Helmet } from 'react-helmet';

import SectionContainer from "../components/SectionContainer";
import SectionStep from "../components/SectionStep";
import Layout from "../components/navbar/layout";
import "./_index.scss";

const LandingPage = () => {

    const STEPS = [
        {
            icon: <i className="bi bi-phone-fill" style={{"font-size": "4rem"}}></i>,
            text: "Describe your mission in a 5-minute form or phone call."    
        },
        {
            icon: <i className="bi bi-person-fill" style={{"font-size": "4rem"}}></i>,
            text: "We will match you to an expert who will be your dedicated engineer."    
        },
        {
            icon: <i className="bi bi-cup-fill" style={{"font-size": "4rem"}}></i>,
            text: "We'll take care of your avionics and flight software, and you'll focus on your mission and payload."    
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
        </div>
        <SectionContainer className="section-price" backgroundColor="dark">
            <div className="row flex-row price-text">
                <div className="price-title-container col">
                    <h2 className="price-title display-4">
                        Talk to us for free
                    </h2>
                    <h4 className="price-content--text">
                        We are currently testing this model, so everything we do won't cost you anything. We promise.
                    </h4>
                    <AddWaitlist className="hero-input" />
                </div>
                
            </div>
        </SectionContainer>
    </Layout>
    );
};

export default LandingPage;