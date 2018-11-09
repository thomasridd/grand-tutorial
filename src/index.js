import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './scenes/Homepage'
import ProviderPage from './scenes/ProviderPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = (props) => {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/providers" component={ProviderPage} />
          </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


