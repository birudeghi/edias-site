import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import { Helmet } from 'react-helmet';

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
          <div
            className="layout-wrapper"
            style={{
              margin: '0 auto',
              maxWidth: 1440,
              padding: '0px 80px',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </React.Fragment>
      )}
    />
  )

export default Layout;