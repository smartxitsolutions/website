import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} alt="SmartxITSolutions" style={{height:`inherit`}} className="mx-auto"/>
        </div>
        <div className="content">
            <div className="inner">
                <h1 className="font-black">SmartxIT<span style={{color:`orangered`}}>Solutions</span></h1>
                <p>We build rapid solutions for your business!!!</p>
                <ul className="icons mt-10">
                    <li className="simptip-position-top half-arrow" data-tooltip="Android Development">
                        <a href="#android"className="icon-new fab fa-android">
                            <span className="label">Android</span>
                        </a>
                    </li>
                    <li className="simptip-position-bottom half-arrow" data-tooltip="Web Design &amp; Development">
                        <a href="#web" className="icon fas fa-globe">
                            <span className="label">Web Design &amp; Development</span>
                        </a>
                    </li>
                    <li className="simptip-position-top half-arrow" data-tooltip="Core &amp; Adv. Java Training">
                        <a href="#java" className="icon-new fab fa-java">
                            <span className="label">Java</span>
                        </a>
                    </li>
                    <li className="simptip-position-bottom half-arrow" data-tooltip="Live Development &amp; Traning">
                        <a href="#training" className="icon-new fas fa-users">
                            <span className="label">Users Training</span>
                        </a>
                    </li>
                    <li className="simptip-position-top half-arrow" data-tooltip="Database Training">
                        <a href="#db" className="icon-new fas fa-database">
                            <span className="label">Database Training</span>
                        </a>
                    </li>
                    <li className="simptip-position-bottom half-bottom" data-tooltip="ERP, E-Com, Logo Design &amp; More">
                        <a href="#more" className="icon-new fas fa-plus-circle">
                            <span className="label">ERP, E-Com, Logo Design &amp; More</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={() => {props.onOpenArticle('about')}}>About Us</button></li>
                <li><button onClick={() => {props.onOpenArticle('services')}}>Services</button></li>
                <li><button onClick={() => {props.onOpenArticle('contact')}}>Contact Us</button></li>
                {/*
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('services')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact Us</a></li>
                */}
                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
