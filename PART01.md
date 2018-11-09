# Part One: Build a React app

Create the initial React app with a simple home page and GOV.UK styling

Because we are getting started this is going to be the biggest walkthrough in this series so settle down and get ready to do some making. We are starting with nothing and by the end ought to have a fairly convincing app on our hands.

### To begin
Run the npm create project script and initialize an app called unistats
`npm init react-app unistats`

Check we are all good so far
`cd unistats`
`npm start`

The simple demo React app should now be running on localhost:3000

### Do some installing
We are going to be using some libraries during this tutorial so lets add them now.  Node-sass in particular is a bit chunky so will take its time.
`npm install node-sass node-router-dom`

We don’t need these libraries immediately so just leave them installing while we keep on

### Strip out the chaff
Get rid of all the files in `/src` except for `index.js`

### Build a Homepage
Create the folder `src/scenes/Homepage`
To this add `index.js` and `styles.scss`

In `Homepage/index.js` add a default export of a pretty banal web component

Homepage.js
```
export default  (props) => {
    return <div>
        My Homepage
    </div>
}
```

App.js
```
import Homepage from './scenes/Homepage'

const App = (props) => {
    return <Homepage />
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Check that everything is wiring itself together nicely

### Plan some content for stage 1
So we are going to have a very simple page with a GOV.UK banner, a title and some lorem ipsum blurb

[image:30937839-A224-43DC-A817-028F9A2587E4-4920-00019152171F9A76/IMG_0924.jpg]

From here we will start adding features such as new pages and search but first the lorem stuff

Let’s begin by breaking out the Homepage into Banner, Header, Body, and Footer pieces

```
import React from 'react'

const Banner = (props) => {
    return (
        <div>GOV.UK Banner</div>
    )
}

const HeaderSection = (props) => {
    return (
        <div>
            <div><h1>Compare higher education courses</h1></div>
            <div>Includes official data for undergraduate courses on each university and college's satisfaction scores in the National Student Survey, jobs and salaries after study and other key information for prospective students.</div>
        </div>
    )
}

const BodySection = (props) => {
    return (
        <div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
    )
}

const FooterSection = (props) => {
    return (
        <div>
            GOV.UK Footer    
        </div>
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
```

### GOV.UK Styling

Go to [GitHub - alphagov/govuk-frontend: GOV.UK Frontend contains the code you need to start building a user interface for government platforms and services.](https://github.com/alphagov/govuk-frontend/)

Clone or download the repository to your system.

Copy the contents of `govuk-frontend-master/src` into a new folder in our react project `src/static/govuk`. This means we will have all the sass 

Now lets check everything is working by pasting in some code from [Components – GOV.UK Design System](https://design-system.service.gov.uk/components/)

```
<button type="submit" class="govuk-button">
  Save and continue
</button>
```

Add that to our body section and if a gov.uk style button appears we are on to the next stage

### Homepage content
I’m going to leave the process of building this page out fully over to the reader. My code is below and somewhere in the repo

Homepage/styles.scss
```
@import "../../static/govuk/all";

.unistats-header {
    background-color: govuk-organisation-colour("department-for-education");

    &-text {
        color: white !important;
    }
}
```

Homepage/index.js
```
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
```

