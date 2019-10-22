import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'We are professionals. We provide rapid solutions for your business, making you Ideas happens....!' },
              { name: 'keywords', content: 'Android, Applications, Services, Consultancy, ERP, Solutions, Web, Design, Development, Varanasi, DLW, iOS, Training, Php, JSP, Servlets, Spring, MVC, Hibernate, Advanced Java, Core Java, Applet, AWT' },
            ]}
          >
            <html lang="en" />
            
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
