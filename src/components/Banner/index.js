import React from 'react'

export default (props) => {
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