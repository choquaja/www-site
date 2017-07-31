import React from 'react'
import Link from 'next/link'
import { globalWrapper, media } from '../../styles/helpers'
import styled from 'styled-components'
import { rgba } from 'polished'

const FooterMain = styled.footer`
  background: whitesmoke;
  border-top: ${props => props.theme.borders.border};
  color: ${props => rgba(props.theme.colors.graphitebase, 0.5)};
`

const FooterMainWrapper = styled.div`
  ${globalWrapper} display: flex;
  ${media.tablet`
  flex-direction: column;
  .footer-main-section-wrapper{
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
  }
`};
`

const FooterMainSection = styled.div`flex: 1;`

const FooterMainSectionWrapper = styled.div`
  display: flex;
  padding: ${props => props.theme.units.unit * 2}px 0;
  justify-content: ${props => props.justifyContent};
`

FooterMainSectionWrapper.defaultProps = {
  justifyContent: '',
}

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
      <FooterMain>
        <FooterMainWrapper>
          <FooterMainSection>
            <FooterMainSectionWrapper>
              <div>
                Copyright © 2015-2017 3Blades.io, Made with love in Atlanta.
              </div>
            </FooterMainSectionWrapper>
          </FooterMainSection>
          <FooterMainSection>
            <FooterMainSectionWrapper justifyContent="flex-end">
              <div>
                <Link href="/privacy" prefetch>
                  <a>Privacy Policy</a>
                </Link>{' '}
                |{' '}
                <Link href="/terms" prefetch>
                  <a>Terms and Conditions</a>
                </Link>
              </div>
            </FooterMainSectionWrapper>
          </FooterMainSection>
        </FooterMainWrapper>
      </FooterMain>
    )
  }
}
