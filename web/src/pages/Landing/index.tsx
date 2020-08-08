import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleGeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api'

function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        });
    },[]);
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Your Online Plataform of Studies</h2>
                </div>
                <img src={landingImg} alt="Studies Plataform" className="hero-image"/>
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Study
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassIcon} alt="Give Classes"/>
                        Give Classes
                    </Link>
                </div>
                <span className="total-connections">
                    Total of {totalConnections} conections already done.
                    <img src={purpleGeartIcon} alt="Purple heart"/>
                </span>
            </div>
        </div>

    )
}

export default Landing;