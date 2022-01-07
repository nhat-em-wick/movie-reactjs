import React from 'react'


import './footer.scss'

import { Link } from 'react-router-dom'
import bg from '../../assets/footer-bg.jpg'
import logo from '../../assets/tmovie.png'

const Footer = props => {
  return (
    <div className="footer" style={{backgroundImage: `url(${bg})`}}>
      <div className="footer__content">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} />
            <Link to='/'>tMovies</Link>
          </div>
        </div>
        <div className="grid footer__content__menus">
          <div className="row">
            <ul className="footer__content__menu col l-3 m-6 c-12">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
            <ul className="footer__content__menu col l-3 m-6 c-12">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
            <ul className="footer__content__menu col l-3 m-6 c-12">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
            <ul className="footer__content__menu col l-3 m-6 c-12">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer
