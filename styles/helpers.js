import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { theme } from './theme'

//Basic Helpers
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

const wiggleDark = () => css`
position: relative;
&::before{
  height: $height;
  opacity:$opacity;
  width: 100%;
  content: '';
  position: absolute;
  bottom: 0;
  left:0;
  background: url("/static/images/wiggle.png") top center repeat;
  background-size:45px;
  z-index:-1;
}
`

//Mobile Formatting
const formatHandheld = () => css`
max-width:mobileSizes.handheld;
`

const formatHandheldUp = () => css`
  min-width:mobileSizes.handheld +1px;
`

const formatTablet = () => css`
  max-width: mobileSizes.desktop -1px;
`

const formatTabletUp = () => css`
  min-width:mobileSizes.tablet 4 1px;
`

const formatDesktop = () => css`
  min-width:mobileSizes.desktop;
`

//Mixins movement

const fadeIn = () => css`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

const fadeOut = () => css`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const FadeSlideFromBottom = () => css`
from {
  opacity: 0;
  transform: translate3d(0, units.gutter*4, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const FadeSlideFromBottomSM = () => css`
from {
  opacity: 0;
  transform: translate3d(0, units.gutter, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const FadeSlideFromTop = () => css`
from {
  opacity: 0;
  transform: translate3d(0, -units.gutter*4, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const FadeSlideFromTopSM = () => css`
from {
  opacity: 0;
  transform: translate3d(0, -units.gutter, 0);
}

to {
  opacity: 1;
  transform: none;
}
`

const StaggerMenu = () => css`
from {
  transform: translate3d(0, 5px, 0) skew(14deg, 7deg);
  opacity: 0
}

to {
  transform: translate3d(0, 0, 0) skew(0, 0);
  opacity: 1
}
`

//animations.timing: animations.timing*2.5;
