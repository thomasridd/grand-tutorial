import React from 'react'
import Banner from '../../components/Banner'
import FooterSection from '../../components/FooterSection'

export default (props) => {
    return (
        <div>
            <Banner />
            <h1 className="govuk-header-xl">University page</h1>
            <FooterSection />
        </div>
    )
}