import React from 'react'
import './styles.scss'
import Banner from './components/Banner'
import BodySection from './components/BodySection'
import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'

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