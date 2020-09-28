import React, {useEffect, useState, useRef} from 'react'
import proptypes from 'prop-types'
import styled from 'styled-components'
export default function Index(props) {
    const log = console.log
    // setup defaults if none provided
    const params = {
        locations: props?.locations || [],
        brandIcon : processBrandImage(props?.brandIcon) // image element
    }

    // location tracking
    const [active, setActive] = useState('/')
    const [map, setMap] = useState({})
    const [windowHeight, setWindowHeight] = useState(0)
    // setup listeners
    useEffect(()=>{
        document.addEventListener('scroll', onscroll)
        document.addEventListener('resize', resizeWindow)
        buildMap(params.locations)
        resizeWindow()
    },[]) // on mount
    function onscroll(){
        let position = getScrollLocation()
        log(position)
        determineIfActive(position)
    }
    function getScrollLocation(){
        return window.scrollY
    }
    function buildMap(pathArray){
        let map = []
        pathArray.forEach((pathObj, index)=>{
            let newObj = {
                path: pathObj.path,
                location: getLocation(pathObj.path)
            }
            map.push(newObj)
        })
        return map
    }
    function getLocation(path){
        let el = document.getElementById(path)
        return el.getBoundingClientRect().top + document.body.scrollTop
    }
    function resizeWindow(){
        let windowHeight = getWindowSize()
        setWindowHeight(windowHeight)
    }
    function getWindowSize(){
        return window.innerHeight
    }
    // apply active class
    const headerRef = useRef()
    function determineIfActive(){
        if(window.scrollY > 10){
            headerRef.current.classList.add('active')
            return
        }
        headerRef.current.classList.remove('active')
    }
    return (
        <Header ref={headerRef} className="" style={{
            position:'sticky',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            background:'white'
        }}>
            <div id="react-sticky-header-brand-container">
                
                {params.brandIcon}
                
            </div>
        </Header>
    )
}
const Header = styled.header`
    position: sticky;
    top:0;
    left:0;
    right:0;
    min-height: 50px;
    padding: 0 20px;
    transition: all .3s cubic-bezier(0.68, -0.6, 0.32, 1.6); 
    &.active{
        background: black !important;
        padding: 0 10px;
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
    brandIcon: proptypes.string
}

function processBrandImage(brandImage){
    let img = new Image()
    img.src = brandImage
    let width = img.width
    let height = img.height
    console.log(img)
    if(width > height){
        img.width = 30
        return img
    }
    else{
        img.width = 30
        return img
    }
}