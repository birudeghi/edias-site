import React, { useRef, useEffect } from "react";
import Layout from "../components/navbar/layout";
import { Helmet } from 'react-helmet';
import Avrgirl from 'avrgirl-arduino';

import './_dev.scss';


const DevPage = () => {
    const fileInput = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        const reader = new FileReader();

        reader.readAsArrayBuffer(fileInput.current.files[0]);
        
        reader.onload = event => {
            const fileContents = event.target.result;
            
            const avrgirl = new Avrgirl({
                board: 'mega'
              });
              
            avrgirl.flash(fileContents, error => {
                if (error) {
                  console.error(error);
                } else {
                  console.info('Flash successful.');
                }
            });
        };
    };

    return (
        <Layout>
            <Helmet>
                <title>Edias | Home</title>
                <meta name="description" content="Risk on. Break things." />
            </Helmet>
            <form onSubmit={handleSubmit} className="form-container">
                <label for="File1">Upload hex file here
                    <input type="file" className="file-upload" ref={fileInput} id="File1" />
                </label>
                <input type="submit" value="upload" className="submit-button" />
            </form>
        </Layout>
    )
}

export default DevPage;