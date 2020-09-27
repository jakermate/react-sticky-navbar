import React from 'react'
import proptypes from 'prop-types'
import styled from 'styled-components'
export default function index(props) {
    return (
        <Header className="">
            
        </Header>
    )
}
const Header = styled.header`
    position: sticky;
    top:0;
    left:0;
    right:0;
    min-height: 70px;
    &.active{

    }
`
