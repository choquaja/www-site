import styled, { css } from 'styled-components'

const centerContent = css`
margin-right:auto;
margin-left:auto;
`

export const globalWrapper = css`
${centerContent}
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
  height: height
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

const sizes = {
  handheld: '540px',
  tablet: '768px',
  desktop: '1060px',
  midSized: '1200px',
  largeDisplay: '1440px',
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}) {
			${css(...args)}
		}
	`
  acc[label + 'Up'] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})
