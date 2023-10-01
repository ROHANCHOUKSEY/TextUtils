import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

const Navber = (props) => {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode === '#111439'?'light':'dark'}`} to="/">{props.text}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === '#111439'?'light':'dark'}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === '#111439'?'light':'dark'}`} to="/about">{props.about}</Link>
              </li>
            </ul>
            <div className="theme">
                <button type="button" className="btn btn-primary border mx-2 " style={{height: '30px', width:'30px'}} onClick={props.handleBlue}></button>
                <button type="button" className="btn btn-danger border " style={{height: '30px', width:'30px'}} onClick={props.handleRed}></button>
            </div>
                
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                <input className= "form-check-input" onClick={props.tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode === '#111439'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault" >{props.btn}</label>
            </div>
          </div> 
        </div>
      </nav>
    );
} 

export default Navber;

Navber.propTypes = {
    text: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navber.defaultProps = {
    text: "TextUtils10",
    about: "AboutUs Utils"
}
