# React-Sticky-Navbar
### A NavBar component for React that animates on scroll and tracks page position using page breapoints specified by the user..

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
            <ReactStickyNavbar></ReactStickyNavbar>
        </div>
    )
}
```
## When using the smart-location links, format your location object as such
```js
<ReactStickyNavbar locations={{

}} />
```
The first entry in your locations array should be your 'Home' link.  No matter what ID you enter for this array index, the component will ensure the page navigates back to the 0 position of the page.


# Dependencies
- proptypes
- react
- react-dom
- styled-components