import Mark from './logoMark'
import Link from 'next/link'
import styles from './logo.styles.scss'
import { color, font, unit } from '../../styles/styles.config'

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
      <a className={'logo' + classes}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="logo-wrapper">
          <Mark {...props} />
          <div className="logo-name">
            3Blades
          </div>
        </div>
      </a>
    </Link>
  )
}
