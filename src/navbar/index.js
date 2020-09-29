import React, { useEffect, useState, useRef } from "react"
import proptypes from "prop-types"
import styled from "styled-components"
const throttle = require('lodash').throttle
export default function Index(props) {
  const log = console.log
  // setup defaults if none provided

  const params = {
    locations: props?.locations || [],
    brandIcon: processBrandImage(props?.brandIcon), // image element
    maxWidth: props?.maxWidth || 1024,
    backgroundColorPrimary: props?.backgroundColorPrimary || 'white',
    backgroundColorSecondary: props?.backgroundColorSecondary || 'black',
    dropShadow: props?.dropShadow || true


  }

  // location tracking
  const [active, setActive] = useState("/")
  const [map, setMap] = useState({})
  const [windowHeight, setWindowHeight] = useState(0)
  // setup listeners
  useEffect(() => {
    document.addEventListener("scroll", throttle(onscroll, 50))
    document.addEventListener("resize", resizeWindow)
    setMap(generateMap(params.locations))
    resizeWindow()
  }, []) // on mount
  function onscroll() {
      console.log('Scroll call')
    let position = getScrollLocation()
    log(position)
    determineIfActive(position)
  }
  function getScrollLocation() {
    return window.scrollY
  }
  
  function getLocationPixels(path) {
    let el = document.getElementById(path)
    return el.getBoundingClientRect().top + document.body.scrollTop
  }
  function resizeWindow() {
    let windowHeight = getWindowSize()
    setWindowHeight(windowHeight)
  }
  function getWindowSize() {
    return window.innerHeight
  }
  // apply active class
  const headerRef = useRef()
  function determineIfActive() {
    if (window.scrollY > 10) {
      headerRef.current.classList.add("active")
      return
    }
    headerRef.current.classList.remove("active")
  }

  // generate location map for id scroll positions on page
  function generateMap(locationArray){
    let inValid = false
    //error handling
    if(!locationArray){
        return
    }
    locationArray.forEach((locationObj, index)=>{
        if(!document.getElementById(locationObj.id)){
            inValid = true
        }
    })
    // exit if id's do not resolve
    if(inValid){
        return
    }
    // generate array
    let map = []
    locationArray.forEach((pathObj, index) => {
      let newObj = {
        id: pathObj.id,
        location: getLocationPixels(pathObj.id),
      }
      map.push(newObj)
    })
    return map
  }


  // render
  return (
    <Header
      ref={headerRef}
      className=""
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        background: params.backgroundColorPrimary,
      }}
      secondary={params.backgroundColorSecondary}
    >
      <div
        id="sticky-navbar-content-wrapper"
        style={{
          maxWidth: `${params.maxWidth}px`,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* content has two containers, brand and links, set to either edge */}
        <div id="react-sticky-navbar-brand-container">{params.brandIcon}</div>
        <div id="react-sticky-navbar-links-container">

        </div>
      </div>
    </Header>
  )
}
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  min-height: 50px;
  padding: 20px 0px;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  &.active {
    background: ${props => props.secondary} !important;
    padding: 10px 0;
  }
  #sticky-navbar-brand-image {
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  &.active #sticky-navbar-brand-image {
    width: 100px;
  }
`

Index.propTypes = {
  /** type:[object] - object array of element ID to include in navigation section
   * {
   *     path: string,
   *     image: string
   * }
   */
  locations: proptypes.object,
  /** type:string - string to path of image*/
  brandIcon: proptypes.string,
  /** type:number max width of navbar content in pixels */
  maxWidth: proptypes.number,
  /** type:string background color of navbar while page is parked */
  backgroundColorPrimary: proptypes.string,
  /** type:string background color of navbar whil page is scrolled */
  backgroundColorSecondary: proptypes.string,
  /** type:bool activate drop shadow effect */
  dropShadow: proptypes.bool
}

function processBrandImage(brandImage) {
  let img = React.createElement("img", {
    src: brandImage,
    id: "sticky-navbar-brand-image",
    width: 60,
  })
  console.log(img)
  return img
}

