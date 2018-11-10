import React, { Component } from 'react'
import Banner from '../../components/Banner'
import FooterSection from '../../components/FooterSection'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class ProviderPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            providerId: props.match.params.id,
            provider: null
        } 
    }

    componentDidMount() {
        this.setState(
            {provider: this.props.providers[this.state.providerId]}
        )
    }

    renderProviderDetails() {
        const provider = this.state.provider
        if(provider) {
            return (
                <div>
                    <h1 className="govuk-heading-xl">{provider.name}</h1>
                    <table class="govuk-table">
                        <tbody class="govuk-table__body">
                            <tr class="govuk-table__row">
                            <th class="govuk-table__header" scope="row">Trading name</th>
                            <td class="govuk-table__cell">{provider.trading_name}</td>
                            </tr>
                            <tr class="govuk-table__row">
                            <th class="govuk-table__header" scope="row">Website</th>
                            <td class="govuk-table__cell"><a href={provider.url}>{provider.url}</a></td>
                            </tr>
                            <tr class="govuk-table__row">
                            <th class="govuk-table__header" scope="row">Address</th>
                            <td class="govuk-table__cell">{provider.address}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )    
        }
        return (
            <div>
                <h1 className="govuk-heading-xl">Error</h1>
                <p>Provider with id {this.state.providerId} not found</p>
            </div>
        )
                            
    }

    render() {
        return (
            <div>
                <Banner />
                <div className="govuk-width-container">
                    <Link to="/" className="govuk-back-link">Back</Link>
                    <main className="govuk-main-wrapper">
                        <div className="govuk-grid-row">
                            <div className="govuk-grid-column-two-thirds">
                                {this.renderProviderDetails()}
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

export default connect(mapStateToProps, null)(ProviderPage);
