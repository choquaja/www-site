import Mark from './logoMark'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const LogoMain = styled.a`
  margin-right: ${props => props.theme.units.unit}px;
  text-decoration: none;
`

function logoNameColor(props) {
  if (props.theme.mode === 'light') {
    return props.theme.colors.white
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
  return (
    <Link href="/" prefetch>
      <LogoMain>
        <LogoWrapper>
          <Mark />
          <LogoName>3Blades</LogoName>
        </LogoWrapper>
      </LogoMain>
    </Link>
  )
}
