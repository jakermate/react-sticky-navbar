# react-sticky-navbar

### A NavBar component for React that animates on scroll and tracks page position using page breapoints specified by the user..

![npm](https://img.shields.io/npm/v/react-sticky-navbar)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-sticky-navbar)

<div style="color: red; font-weight: bold;  font-size: 2rem">:construction: UNDER CONSTRUCTION :construction: </div>

## Install

```js
npm i react-sticky-navbar
```

## Usage

```js
import React from 'react'
import ReactStickyNavbar from 'react-sticky-navbar'

export default function MyApp(props){
    return(
        <div id="app-root">
            <ReactStickyNavbar locations={[
                {
                    text: "Home",
                    id: ""
                },
                {
                    text: "About",
                    id: "about-section"
                },
                {
                    text: "Pricing",
                    id: "pricing-section"
                }
            }] />
        </div>
    )
}
```

### When using the smart-location links, format your location object as shown above.
_Make sure the id property matches your dom element ID exactly._

The first entry in your locations array should be your 'Home' link. 
This represents the top of the page. No matter what ID you enter for this array index, the component will ensure the page navigates back to the 0 position of the page.  You may give this link whatever text you wish.


# Props

# Dependencies

- proptypes
- react
- react-dom
- styled-components
