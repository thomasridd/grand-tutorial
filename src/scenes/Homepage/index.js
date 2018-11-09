import React from 'react'
import './styles.scss'

const Banner = (props) => {
    return (
        <header className="govuk-header govuk-header__container " role="banner" data-module="header">
            <div className="govuk-width-container">

                <div className="govuk-header__logo">
                <a href="#" className="govuk-header__link govuk-header__link--homepage">
                    <span className="govuk-header__logotype">

                    <span className="govuk-header__logotype-text">
                        GOV.UK
                    </span>
                    </span>
                </a>
                </div>
            </div>
        </header>
    )
}

const HeaderSection = (props) => {
    return (
        <div className="unistats-header">
            <div className="govuk-width-container">
                <main className="govuk-main-wrapper">
                    <div className="govuk-grid-row">
                        <div className="govuk-grid-column-two-thirds">
                            <h1 className="govuk-heading-xl unistats-header-text">Compare higher education courses</h1>
                            <p className="govuk-body-l unistats-header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

const BodySection = (props) => {
    return (
        <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
            <div className="govuk-grid-row">
                <div className="govuk-grid-column-two-thirds">
                <p className="govuk-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="govuk-body">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </main>
        </div>
    )
}

const FooterSection = (props) => {
    return (
        <footer className="govuk-footer " role="contentinfo">
            <div className="govuk-width-container ">
                
            </div>
        </footer>
    )
}

export default (props) => {
    return (
        <div>
            <Banner />
            <HeaderSection />
            <BodySection />
            <FooterSection />
        </div>
    )
}