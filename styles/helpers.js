import styled, { css } from 'styled-components'

const centerContent = () => css`
margin-right:auto;
margin-left:auto;
`

const globalWrapper = () => css`
max-width:${props => props.theme.units.globalWidth};
width: 100%;
padding-right:${props => props.theme.units.gutter}px;
padding-left:${props => props.theme.units.gutter}px;
`

const ffHeading = () => css`
  font-family:${props => props.theme.fonts.headings};
`

const transition = () => css`
    transition: ${props => props.theme.animations.transition};
`

const wiggleDark = () => css`
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
}
`

// //Responsive Formatting
// const formatHandheld = () => css`
// max-width:mobileSizes.handheld;
// `
//
// const formatHandheldUp = () => css`
//   min-width:mobileSizes.handheld +1px;
// `
//
// const formatTablet = () => css`
//   max-width: mobileSizes.desktop -1px;
// `
//
// const formatTabletUp = () => css`
//   min-width:mobileSizes.tablet 4 1px;
// `
//
// const formatDesktop = () => css`
//   min-width:mobileSizes.desktop;
// `
