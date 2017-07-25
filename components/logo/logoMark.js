import { color, font } from '../../styles/styles.config'
import styles from './LogoMark.styles.scss'
import { ThemeProvider } from 'styled-components'

export default props => {
  'use strict'
  let mark = 'mark-gradient.svg'

  if ('light' in props) {
    mark = 'mark-gradient.svg'
  }
  if ('dark' in props) {
    mark = 'mark-gradient-white-dot.svg'
  }

  return (
    <div className="logo-mark">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <img src={'/static/images/logo/' + mark} />
    </div>
  )
}
