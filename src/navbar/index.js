import React, { useEffect, useState, useRef } from "react"
import proptypes from "prop-types"
import styled from "styled-components"
import throttle from "lodash/throttle"
export default function Index(props) {
  const log = console.log
  // setup defaults if none provided

  const params = {
    locations: props?.locations || null,
    brandIcon: processBrandImage(props?.brandIcon), // image element
    maxWidth: props?.maxWidth || 1024,
    backgroundColorPrimary: props?.backgroundColorPrimary || "white",
    backgroundColorSecondary: props?.backgroundColorSecondary || "black",
    dropShadow: props?.dropShadow || true,
    brandLink: props?.brandLink || "/",
  }

  // location tracking
  const [active, setActive] = useState("/")
  const [map, setMap] = useState({})
  const [windowHeight, setWindowHeight] = useState(0)
  // setup listeners
  useEffect(() => {
    // set scroll behavior to smooth
    document.documentElement.style.scrollBehavior = 'smooth'
    document.addEventListener("scroll", throttle(onscroll, 50))
    document.addEventListener("resize", resizeWindow)
    setMap(generateMap(params.locations))
    resizeWindow()
  }, []) // on mount
  function onscroll() {
    // console.log("Scroll call")
    let position = getScrollLocation()
    log(position)
    // determine if scroll styling is active
    determineIfScrolled(position)

    // determine what section is being seen
    if (Object.keys(map).length === 0) {
      return // return if map is default empty object
    }
    log(map)
    let activePath = getActiveLocation()
    setActive((oldState) => activePath)
  }

  function getScrollLocation() {
    return window.scrollY
  }

  function getActiveLocation() {
    let active = 0
    map.forEach((map, index) => {
      if (window.scrollY + windowHeight / 2 > map.height) {
        active = index
        // console.log('can see '+path)
      }
      return
    })
    // this returns last matching path of visible element
    return active
  }

  function resizeWindow() {
    let windowHeight = getWindowSize()
    setWindowHeight(windowHeight)
    function getWindowSize() {
      return window.innerHeight
    }
  }

  // apply active class
  const headerRef = useRef()
  function determineIfScrolled() {
    if (window.scrollY > 10) {
      headerRef.current.classList.add("active")
      return
    }
    headerRef.current.classList.remove("active")
  }

  // generate location map for id scroll positions on page
  function generateMap(locationArray) {
    let inValid = false
    //error handling
    if (!locationArray) {
      return
    }
    locationArray.forEach((locationObj, index) => {
      if (!document.getElementById(locationObj.id)) {
        inValid = true
      }
    })
    // exit if id's do not resolve
    if (inValid) {
      return
    }
    // generate array
    let map = []
    locationArray.forEach((pathObj, index) => {
      let newObj = {
        id: pathObj.id,
        text: pathObj.text,
        location: getLocationPixels(pathObj.id),
      }
      console.log(newObj)
      map.push(newObj)
    })
    return map

    function getLocationPixels(idString) {
      let el = document.getElementById(idString)
      return el.getBoundingClientRect().top + window.scrollY
    }
  }

  // navigate on button press
  function handleNavigation(e, idString) {
    e.preventDefault()
    log("Navigating to ID: " + idString)
    // first, refresh location map
    setMap(generateMap(params.locations))
    let index = map
      .map(function (f) {
        return f.id
      })
      .indexOf(idString)

    window.scrollTo(0, parseInt(map[index].location) - windowHeight / 3)
  }

  //   navigator component
  const navComponent = (
    <div>
      <div
        id="sticky-navbar-nav-links"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {params.locations.map((locationObj, index) => {
          return (
            <button
              key={`sticky-navbar-link-key-${index}`}
              className="sticky-navbar-location-button"
              style={{}}
              onClick={(e) => {
                handleNavigation(e, locationObj.id)
              }}
            >
              <div className="sticky-navbar-location-text">
                {locationObj.text}
              </div>
            </button>
          )
        })}
      </div>
      <div id="sticky-navbar-nav-indicator"></div>
    </div>
  )

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
      // paramter drops
      secondary={params.backgroundColorSecondary}
      dropShadow={params.dropShadow}
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
        <a href={params.brandLink || "/"}>
          <div
            id="react-sticky-navbar-brand-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {params.brandIcon}
          </div>
          
        </a>
        <div id="react-sticky-navbar-links-container">
          {params.locations && navComponent} 

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

  /* active styling */
  &.active {
    background: ${(props) => props.secondary} !important;
    padding: 10px 0;
    /* drop shadow */
    box-shadow: ${(props) =>
      props.dropShadow ? "0 4px 8px rgba(0,0,0,.3)" : "none"};
  }
  #react-sticky-navbar-brand-container {
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  &.active #react-sticky-navbar-brand-container {
    transform: scale(1.4);
  }
`

Index.propTypes = {
  /** type:[object] - object array of element ID to include in navigation section
   * {
   *     id: string,
   *     text: string
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
  dropShadow: proptypes.bool,
  /** type:string brand icon transform:scale on scroll ('none', def:'low', 'high') */
  brandScale: proptypes.string,
  /** type:string brand icon link URL */
  brandLink: proptypes.string,
  /** type:bool display drop shadow on scroll */
  dropShadow: proptypes.bool,
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
