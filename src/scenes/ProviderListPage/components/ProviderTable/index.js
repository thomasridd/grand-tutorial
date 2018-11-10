import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    const providerIds = Object.keys(props.providers)
    const providers = providerIds.map(pid => {
        return(
            {pid: pid, 
            name:props.providers[pid].name})
    })

    function renderProviderRow(provider) {
        return(
            <tr class="govuk-table__row" key={provider.pid}>
                <th class="govuk-table__header" scope="row">{provider.pid}</th>
                <td class="govuk-table__cell">{provider.name}</td>
                <td class="govuk-table__cell"><Link to={`/providers/${provider.pid}`}>more</Link></td>
            </tr>
        )
    }
        
    return (
        <table class="govuk-table">
            <thead class="govuk-table__head">
                <tr class="govuk-table__row">
                <th class="govuk-table__header" scope="col">Id</th>
                <th class="govuk-table__header" scope="col">Provider</th>
                <th></th>
                </tr>
            </thead>
            <tbody class="govuk-table__body">
                { providers.map( p => renderProviderRow(p) )}
            </tbody>
        </table>
    )
}