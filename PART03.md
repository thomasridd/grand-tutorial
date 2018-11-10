# # Part Three: Provider pages
In this section we are extending our app to have really crude information pages for individual higher education providers. In this stage we will get our data from file

## 3.1 Restructure
First we are going to properly structure the React app

### Individual components
At the moment the Homepage file is stuffed with components 

Create a folder structure in `scenes/Homepage`

```
src/scenes/Homepage/components/
src/scenes/Homepage/components/Banner
src/scenes/Homepage/components/HeaderSection
src/scenes/Homepage/components/BodySection
src/scenes/Homepage/components/Footer
```

- Create an `index.js` file in each folder. 
- Cut and paste component code from the main Homepage/index.js
- Wire the lot up so we get…

Homepage.js
```
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
```

Lastly the styles in `styles.scss` in only relevant to `HeaderSection` so create an scss file there and shift content

## 3.2 Provider pages
To begin we will create a Provider page and wire it into our existing app

### Skeleton provider index page
Create a folder structure in `scenes` for the new page

```
src/scenes/ProviderListPage/index.js
```

Begin with some simple contents for index.js
```
export default (props) => {
    return (
        <div>
            <Banner />
            <h1 className="govuk-header-xl">
					A list of pages
				</h1>
            <FooterSection />
        </div>
    )
}
```

We want to use the `<Banner />` and `<FooterSection />` components that are current children of the Homepage. It is against the rules to reference the children of another scene so we need to move these two up the hierarchy

Create a folder `src/components`  and move the Banner and FooterSection components in there. If your IDE doesn’t do it automagically update all the relevant links

### Multipage React App
React deals with routing using the `react-router-dom` library. If you didn’t install it now is the time.

We implement the Router at the root of our app

src/index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './scenes/Homepage'
import ProviderListPage from './scenes/ProviderListPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = (props) => {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/providesr" component={ProviderListPage} />
          </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
```


### Reduxify
We are going to be working with a lot of data and this app is going to be dependent on Redux. Sooner rather than later is better. Let’s start by adding another page to the app - ProviderList. It will give us a complete (for now) list of Higher Ed providers which we will be able to select from.

* Create a sample data source (reducer) using a simple data file

src/scenes/ProviderListPage/services/ProvidersData/reducer.js
```
import providers from './data'

export default function(state={}, action) {
    return providers
}
```

* Use this to add a central store

src/store.js
```
import providersReducer from './scenes/ProviderListPage/services/ProviderData/reducer'
import { combineReducers, createStore } from 'redux'

export default createStore(
    combineReducers({
        providers: providersReducer
    })
)
```

* Use the `{ connect }` function to link up `providers` from the central store to ProviderListPage’s `props`

src/scenes/ProviderListPage/index.js
```
import { connect } from 'react-redux';

class ProviderListPage extends Component {

    render() {
        return (
            <div>
                <Banner />
                ...
                <FooterSection />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {providers: state.providers}
}

export default connect(mapStateToProps, null)(ProviderList);
```

* And lastly tell our root this is a Redux app.
```
import { Provider } from 'react-redux'
import store from './store'

...

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
```

Super. A slight shame the relevant part of Redux is called Provider since that now gets us into a bit of a confusion but never mind. Now we have a working Redux app.


### Full Providers List page
For the rest of this section you need to build the providers list page. It should have a table with a list of providers and a link to each one. 

In react-router-dom you need to use <Link to=“/“> instead of <a href=“/”> so in my code that runs
```
<Link to={`/providers/${provider.pid}`}>more</Link>
```


[image:9875DF24-6BB1-4787-8EBD-74B66CAED746-4920-0001BA8D8241A2BC/4592F93D-BE54-4683-9688-26AD5F86B53A.png]

Which brings us on to…

### Provider pages
Which brings us to the point that we are looking to be able to click on “more” and get a page customized to university. 

[image:AFE73E4F-1A86-4A11-953E-D4577914B1D3-4920-0001BD7B08EFF4AD/EFBD26A5-011B-45D7-9CE3-B44CCFA08262.png]

Well it isn’t much but this is the tutorial version

* Sketching out a crude component for Provider page and wire it into Redux

src/scenes/ProviderPage/index.js
```
import React, { Component } from 'react'
import Banner from '../../components/Banner'
import FooterSection from '../../components/FooterSection'
import { connect } from 'react-redux';

class ProviderPage extends Component {

    render() {
        return (
            <div>
                <Banner />
                <div className="govuk-width-container">
                    <Link to="/" className="govuk-back-link">Back</Link>
                    <main className="govuk-main-wrapper">
                        <div className="govuk-grid-row">
                            <div className="govuk-grid-column-two-thirds">
                                ...
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
```

* Now add it to our Router with the path `/providers/:id`
The :id will allow us to pick out the id section of the path

src/index.js
```
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/providers" component={ProviderListPage} />
            <Route exact path="/providers/:id" component={ProviderPage} />
          </div>
        </Router>
```

* Back to the provider page and we can pick up the id from the url in the constructor. 
```
...
    constructor(props) {
        super(props)

        this.state = {
            providerId: props.match.params.id,
            provider: null
        } 
    }
...
```

* When we mount the component we can grab the value of the provider. This can’t be done in the constructor because at that point redux isn’t fully fired up.
```
...
    componentDidMount() {
        this.setState(
            {provider: this.props.providers[this.state.providerId]}
        )
    }
...
```

Build the rest of the page. Now you have the data for the provider it should be easy but the code is in this repo

### Finishing up
You should also add a Start button (link to /providers) on the Homepage




#grand tutorial#