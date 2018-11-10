import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './scenes/Homepage'
import { Provider } from 'react-redux'
import store from './store'

import ProviderPage from './scenes/ProviderPage'
import ProviderListPage from './scenes/ProviderListPage'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = (props) => {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/providers" component={ProviderListPage} />
            <Route exact path="/providers/:id" component={ProviderPage} />
          </div>
        </Router>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

