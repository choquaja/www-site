import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from './theme'

const centerContent = () => css`
margin-right:auto;
margin-left:auto;
`

const globalWrapper = () => css`
max-width:units.globalWidth;
width: 100%;
padding-right:units.gutter;
padding-left:units.gutter;
`

const ffHeading = () => css`
  font-family:fonts.headings;
`

const transition = () => css`
    transition: animations.transition;
`

const wiggleDark = (height, opacity) => css`
position: relative;
&::before{
  height: height;
  opacity:opacity;
  width: 100%;
  content: '';
  position: absolute;
  bottom: 0;
  left:0;
  background: url("/static/images/wiggle.png") top center repeat;
  background-size:45px;
  z-index:-1;
`
