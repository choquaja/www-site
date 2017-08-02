import { color, font } from '../../styles/styles.config'
import styled, { withTheme } from 'styled-components'

const LogoMark = styled.div`
  max-width: 40px;
  width: 40px;
  margin-right: 12px;
  img {
    display: block;
    max-width: 100%;
  }
`

function imageColor(props) {
  if (props.theme.mode === 'light') {
    return 'mark-gradient.svg'
  } else if (props.theme.mode === 'dark') {
    return 'mark-gradient-white-dot.svg'
  } else {
    return 'mark-gradient.svg'
  }
}

export default withTheme(props => {
  return (
    <LogoMark>
      <img src={'/static/images/logo/' + imageColor(props)} />
    </LogoMark>
  )
})
