import React, { useState } from "react";
import Layout from "../components/navbar/layout";
import { Helmet } from 'react-helmet';
import MonacoEditor from 'react-monaco-editor';
import InitiateAvrgirl from '../components/avrgirl';
import './_dev.scss';

const DevPage = () => {
    const [ hex, setHex ] = useState(null);

    handleSubmit = event => {
        InitiateAvrgirl(event.state.value);
    }
    return (
        <Layout>
            <Helmet>
                <title>Edias | Home</title>
                <meta name="description" content="Risk on. Break things." />
            </Helmet>
            <form onSubmit={handleSubmit}>
                <label for="File1">Upload hex file here
                    <input type="file" className="file-upload" id="File1" onChange={setHex}/>
                </label>
                <input type="submit" value="submit" className="submit-button" />
            </form>
            
        </Layout>
    )
}

export default DevPage;