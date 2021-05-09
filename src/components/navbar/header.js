import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./_header.scss"
import { useScrollPosition } from './useScrollPosition';

const Header = ({ siteTitle, menuLinks }) => {
  
  const [hideOnScroll, setHideOnScroll] = useState(true);
    
    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y;
        if (isShow !== hideOnScroll && currPos.y <= -100) setHideOnScroll(isShow)
    }, [hideOnScroll])

  return (
  <header
    className={`header ${ hideOnScroll ? "active" : "hidden"}`}
  >
    <div className="header--base">
      <div className="header--title">
        <h1 className="header--edias-title">
          <Link
            className="header--edias-title-link"
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="header-nav">
        <nav className="header-nav--content">
          <ul className="header-nav--content-unordered-list">
            {menuLinks.map(link => (
              <li
                key={link.name}
                className="header-nav--list-link"
              >
                <a className="header-nav--link" href={link.link}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header