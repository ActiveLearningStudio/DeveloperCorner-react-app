import React from 'react'
import plusicon from '../../assets/images/PLUS.svg'
import desktopicon from '../../assets/images/developertool.svg';
const HelpArea = () => {
    return (
        <div className="developer-help-area">
            <div className="container">

            <div>
                <h2>WE'RE HERE TO HELP</h2>
                <img src={plusicon} alt="plus icon"/>
            </div>
            <div className="develper-content">
                <div className="developer-help-cards">
                    <div className="deveoloper-help-card">
                        <img src={desktopicon} alt="desktop icon"/>
                        <h3>Newsletter</h3>
                        <p>Sign-up for developer updates & release notes</p>
                        <a href="curriki.org" target="_blank">Sign up</a>

                    </div>
                    <div className="deveoloper-help-card">
                        <img src={desktopicon} alt="desktop icon"/>
                        <h3>Community Forums</h3>
                        <p>Join our slack channel to connect with</p><p> other developers using the Curriki API</p>
                        <a href="curriki.org" target="_blank">JOin Curriki's Slack channel</a>

                    </div>
                    <div className="deveoloper-help-card">
                        <img src={desktopicon} alt="desktop icon"/>
                        <h3>Curriki Technical Support</h3>
                        <p>OPen a ticket to get help from our team of in-house experts</p>
                        <a href="curriki.org" target="_blank">Get tech support</a>

                    </div>

                </div>
                <div className="deveoloper-help-card">
                        <img src={desktopicon} alt="desktop icon"/>
                        <h3>Curriki Technical Support</h3>
                        <p>OPen a ticket to get help from our team of in-house experts</p>
                        <a href="curriki.org" target="_blank">Get tech support</a>

                    </div>

            </div>

            </div>
        </div>
    )
}

export default HelpArea
