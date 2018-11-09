# # Part Three: Restructure
Next we are going to properly structure the React app

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



#grand tutorial#