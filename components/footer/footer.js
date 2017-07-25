import React from 'react'
import styles from './footer.styles.scss'
import Link from 'next/link'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''

    let Styles = null

    if (this.props.style) {
      Styles = this.props.style
    }
    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    return (
      <footer className={'footer-main ' + classes}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="footer-main-wrapper" style={Styles}>
          <div className="footer-main-section">
            <div className="footer-main-section-wrapper">
              <div className="copyright">
                Copyright © 2015-2017 3Blades.io, Made with love in Atlanta.We
                shop at wholefoods.
              </div>
            </div>
          </div>
          <div className="footer-main-section">
            <div className="footer-main-section-wrapper">
              <div className="footer-main-links">
                <Link href="/privacy" prefetch>
                  <a>Privacy Policy</a>
                </Link>{' '}
                |{' '}
                <Link href="/terms" prefetch>
                  <a>Terms and Conditions</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
