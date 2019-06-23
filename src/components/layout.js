import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import _ from 'lodash'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Icon from '../images/gatsby-icon.png'
import Styles from '../styles/main.module.scss'
import GithubSvg from '../images/github.svg'
import LinkedInSvg from '../images/linkedIn.svg'
import TwitterSvg from '../images/twitter.svg'
import { relative } from 'path'

const Layout = ({ children }) => {
  const [isDrawerVisible, setDrawerVisible] = useState(false)
  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible)
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
              {
                name: 'description',
                content:
                  'Static site built with Gatsbyjs, ReasonML, and React.',
              },
              { name: 'keywords', content: 'reasonml, bucklescript, react' },
            ]}
          >
            <html lang="en" />
            <body className={isDrawerVisible && Styles.blur} />
          </Helmet>
          <div
            id="main"
            onClick={isDrawerVisible && toggleDrawer} //  close the drawer when drawer is visible
            className={`${Styles.main}`}
          >
            {children}
          </div>
          <footer className={Styles.footer}>
            <div>
              <ul className={Styles.contactList}>
                <li>
                  <a href="https://github.com/JackJackNg" target="_blank">
                    <GithubSvg className={Styles.icon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jack-ng-b2593b151/"
                    target="_blank"
                  >
                    <LinkedInSvg className={Styles.icon} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/JackNgWeiMing1" target="_blank">
                    <TwitterSvg className={Styles.icon} />
                  </a>
                </li>
              </ul>
            </div>
            <span className={Styles.notes}>Built by Jack Ng 🔨</span>
          </footer>
          <div
            className={`
            ${Styles.contact}
            ${Styles.contactLeft}
          `}
          >
            <ul className={Styles.contactList}>
              <li>
                <a href="https://github.com/JackJackNg" target="_blank">
                  <GithubSvg className={Styles.icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jack-ng-b2593b151/"
                  target="_blank"
                >
                  <LinkedInSvg className={Styles.icon} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/JackNgWeiMing1" target="_blank">
                  <TwitterSvg className={Styles.icon} />
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`
            ${Styles.contact}
            ${Styles.contactRight}
          `}
          >
            <a className={Styles.contactEmail}>jackng9995@gmail.com</a>
          </div>

          <Header openDrawer={isDrawerVisible} handleDrawer={toggleDrawer} />
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
