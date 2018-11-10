import React, { Component } from 'react'
import Banner from '../../components/Banner'
import FooterSection from '../../components/FooterSection'
import ProviderTable from './components/ProviderTable'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import '../../static/govuk/all.scss'

class ProviderList extends Component {

    render() {
        return (
            <div>
                <Banner />
                <div className="govuk-width-container">
                    <Link to="/" className="govuk-back-link">Back</Link>
                    <main className="govuk-main-wrapper">
                        <div className="govuk-grid-row">
                        <div className="govuk-grid-column-two-thirds">
                            <h1 className="govuk-heading-xl">Providers</h1>
                            <ProviderTable providers={this.props.providers} />
                        </div>
                        </div>
                    </main>
                </div>
                <FooterSection />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {providers: state.providers}
}

export default connect(mapStateToProps, null)(ProviderList);
