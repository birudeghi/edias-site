import * as React from "react"
import AddWaitlist from '../components/AddWaitlist';
import { Helmet } from 'react-helmet';

import Layout from "../components/navbar/layout";
import "./_index.scss";
import hero from "../images/edias-hero.png";

const LandingPage = () => {

    return (
    <Layout>
        <Helmet>
            <title>Edias | Home</title>
            <meta name="description" content="Risk on. Break things." />
        </Helmet>
        <div className="hero-section">
            <div className="align-items-center">
                <div className="hero-text">
                    <h1 className="hero-title display-4">
                        Risk on. Break things.
                    </h1>
                    <h4 className="hero-subtitle">
                        Quickly prototype PyCubed software for your CubeSat components.
                    </h4>
                </div>
                <img src={hero} className="hero-img" alt="Responsive" />
                <AddWaitlist className="hero-input" />
            </div>
        </div>
    </Layout>
    );
};

export default LandingPage;