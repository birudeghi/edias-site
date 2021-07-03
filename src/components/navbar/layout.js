import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby";
import Header from "./header";
import { Helmet } from 'react-helmet';
import './_layout.scss';

import fb from "../../images/fb.png";
import twitter from "../../images/twitter.png";
import insta from "../../images/insta.png";
import linkedin from "../../images/linkedin.png";

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
                menuLinks {
                 name
                 link
               }
            }
          }
        }
      `}
      style={{
        boxSizing: 'border-box',
      }}
      render={data => (
        <React.Fragment>
          <Helmet
            title={'title'}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
          </Helmet>
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
              {children}
          <div className="footer-section">
            <div className="social-media">
                <a href="https://www.facebook.com/heycuvo" target="_blank" rel="noopener noreferrer">
                    <img src={fb} className="social-media--img" alt="Responsive" />  
                </a>
                <img src={twitter} className="social-media--img" alt="Responsive" />
                <img src={insta} className="social-media--img" alt="Responsive" />
                <img src={linkedin} className="social-media--img" alt="Responsive" />
            </div>
            <div className="legal">
                <li className="link-privacy">
                    <Link className="link-privacy-text" to="/privacy">
                        Privacy
                    </Link>
                </li>
                <li className="link-terms">
                    <Link className="link-terms-text" to="/terms">
                        Terms
                    </Link>
                </li>
            </div>
        </div>
        </React.Fragment>
      )}
    />
  )

export default Layout;