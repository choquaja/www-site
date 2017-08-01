import { color, font } from '../../styles/styles.config'
import styled from 'styled-components'

const LogoMark = styled.div`
  max-width: 40px;
  width: 40px;
  margin-right: 12px;
  img {
    display: block;
    max-width: 100%;
  }
`

export default props => {
  'use strict'
  let mark = 'mark-gradient.svg'

  if ('light' in props) {
    mark = 'mark-gradient.svg'
  }
  if ('dark' in props) {
    mark = 'mark-gradient-white-dot.svg'
  }

  function imageColor(props) {
    if (props.light) {
      return 'mark-gradient.svg'
    } else if (props.dark) {
      return 'mark-gradient-white-dot.svg'
    } else {
      return 'mark-gradient.svg'
    }
  }

  return (
    <LogoMark {...props}>
      <img src={'/static/images/logo/' + mark} />
    </LogoMark>
  )
}
