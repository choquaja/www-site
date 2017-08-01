import Mark from './logoMark'
import Link from 'next/link'
import { color, font, unit } from '../../styles/styles.config'
import styled, { css } from 'styled-components'

const LogoMain = styled.a`
  margin-right: ${props => props.theme.units.unit}px;
  text-decoration: none;
`

function logoNameColor(props) {
  if (props.light) {
    return props.theme.colors.white
  } else if (props.dark) {
    return props.theme.colors.greybase
  } else {
    return props.theme.colors.greybase
  }
}

const LogoName = styled.div`
  font-family: ${props => props.theme.fonts.headings};
  font-size: 2rem;
  color: ${logoNameColor};
  padding-top: ${props => props.theme.units.unit}px;
  font-weight: 100;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default props => {
  'use strict'
  let classes = ''

  if ('dark' in props) {
    classes += ' light'
  }
  if ('light' in props) {
    classes += ' dark'
  }

  return (
    <Link href="/" prefetch>
      <LogoMain>
        <LogoWrapper>
          <Mark {...props} />
          <LogoName {...props}>3Blades</LogoName>
        </LogoWrapper>
      </LogoMain>
    </Link>
  )
}
