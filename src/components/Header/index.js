import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {NavLinkContent} from './styledComponents'
import 'reactjs-popup/dist/index.css'
// import {HeaderComponent} from './styledComponents'

import './index.css'

const contentStyle = {
  fontFamily: 'Roboto',
  width: '96%',
  height: '95vh',
}

const overlayStyles = {
  backgroundColor: 'white',
  fontFamily: 'Roboto',
}

const Header = () => (
  <>
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon" />
          </button>
        }
        contentStyle={contentStyle}
        overlayStyle={overlayStyles}
        position="top right"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="links-container" overlayStyle={overlayStyles}>
              <li>
                <Link to="/" className="link" onClick={() => close()}>
                  <AiFillHome className="home-icon" />
                  <NavLinkContent>Home</NavLinkContent>
                </Link>
              </li>
              <li>
                <Link to="/about" className="link" onClick={() => close()}>
                  <BsInfoCircleFill className="home-icon" />
                  <NavLinkContent>About</NavLinkContent>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
    <hr />
  </>
)
export default Header
