import React from 'react'
import styles from './content-section.scss'
import styled from 'styled-components'
import { globalWrapper, media } from '../../styles/helpers'

const ContentSectionMain = styled.div`
  width: 100%;
  will-change: opacity;
  background: white;
`

const NoPaddingMobile = styled.div`
  ${media.tablet`
    .content-section-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
    .content-section-header {
      padding-left: $gutter*2;
      padding-right: $gutter*2;
      min-width: 100% !important;
      max-width: 100% !important;
    }
  }`};
`

const ContentWrapper = styled.div`
  opacity: 0;
  padding-top: $gutter*2;
  padding-bottom: $gutter*2;
  flex-wrap: wrap;
  display: flex;
  ${globalWrapper} ${media.desktop`
  padding-top: ${props => props.theme.units.gutter * 4.5};
  padding-bottom: ${props => props.theme.units.gutter * 4.5};
`};
`

const ContentHeader = styled.div`
  margin-bottom: ${props => props.theme.units.gutter * 1.5} ${media.handheld`
    text-align:center;
    ${globalWrapper}
    padding-left:${props => props.theme.units.gutter}
    padding-right:${props => props.theme.units.gutter}
  `};
`

const ContentTitleWiggleAfter = styled.div`
  margin-bottom: ${props => props.theme.units.gutter * 1.5};
`

const ContentTitleWrapper = styled.div`
  padding-bottom: $unit;
  font-size: 2rem;
  font-family: $font-headings;
  font-weight: 100;
  ${media.handheld`
  text-align: left;
`};
`

const ContentBodyMain = styled.div`
  width: 100%;
  ${media.handheld`
    text-align: center;
  `};
`

const ContentBodyWrapper = styled.div`
  padding-bottom: ${props => props.theme.units.unit}px;
`

const BodyULinP = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 30px;
  font-weight: 200;
  ${media.desktop`max-width: 85%`};
  ${media.handheld`text-align: left`};
`

const BodySingleUL = styled.ul`
  margin: ${props => props.theme.units.unit * 2}px, 0;
  padding-top: ${props => props.theme.units.unit * 2}px;
  padding-bottom: ${props => props.theme.units.unit * 2}px;
  padding-right: ${props => props.theme.units.unit * 2}px;
  border-radius: 8px;
`

const ContentSectionGraphic = styled.div`
  margin: ${props => props.theme.units.gutter} ${globalWrapper}
    ${media.tablet`padding:0;`};
`

const ContentGraphicLabel = styled.div`
  ${globalWrapper} text-align: center;
  padding-top: ${props => prop.theme.units.unit}px;
`

const ContentGraphicImage = styled.div`background: white;`

// line 109 img {}

const CenterAlignPInContentSectionBody = styled.p`
  max-width: 680px;
  ${globalWrapper};
`

//line 130 [white]

const CenterP = styled.p`
  font-size: 22px;
  line-height: 36px;
`

const PaneMain = styled.div`
  display: flex;
  width: 100%;
`

const PaneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const PaneHalf = styled.div`
  width: 50%;
  ${media.tablet`width:100%;`};
`

const PaneHalfFeatured = styled.div`
  width: 100%;
  ${media.tablet`width:100%;`};
`
//  @at-root & .content-section-pane-wrapper {
//    padding: $unit;

const PaneFlex = styled.div`flex: 1;`

const PaneText = styled.div`
  ${media.tablet`width:65%;`} ${media.handheld`width:100%;`};
`

const PaneGraphic = styled.div`
  ${media.tablet`width:35%;`} ${media.handheld`width:100%;`};
`

const PaneAlignLeft = styled.div`@at-root & .content-section-pane-wrapper {}`

const PaneAlignCenter = styled.div`
  @at-root & .wiggle-after {
    &::after {
      left: calc(50% - 30.5px);
    }
  }
  @at-root & .content-section-pane-wrapper {
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
  }
  .content-section-title {
    max-width: 700px !important;
    @include handheld {
      &-wrapper {
        text-align: center !important;
      }
    }
  }
  p {
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 600px !important;
    @include handheld {
      text-align: center;
    }
  }
`

export class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={
          'content-section-title title-l wiggle-after ' + this.props.className
        }
      >
        <div className="content-section-title-wrapper hidden">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export class Subtitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        className={'content-section-subtitle title-med ' + this.props.className}
      >
        <div className="content-section-subtitle-wrapper hidden">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'content-section-body ' + this.props.className}>
        <div className="content-section-body-wrapper hidden">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export class Graphic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''

    let graphic,
      label = () => ''

    if (this.props.image) {
      graphic = graphic = () =>
        <img className="content-section-graphic-img" src={this.props.image} />
      classes += ' content-section-graphic-image'
    }
    if (this.props.label) {
      if (this.props.link) {
        label = label = () =>
          <div className="content-section-graphic-label">
            <a href={this.props.link}>
              {this.props.label}
            </a>
          </div>
      } else {
        label = label = () =>
          <div className="content-section-graphic-label">
            {this.props.label}
          </div>
      }
    }

    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    return (
      <div className={'content-section-graphic ' + classes}>
        <div className="content-section-graphic-wrapper hidden">
          {graphic()}
          {label()}
        </div>
      </div>
    )
  }
}

export class ContentPane extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''
    let styles = {}

    if ('text' in this.props) {
      classes += ' content-section-pane-text'
    }
    if ('graphic' in this.props) {
      classes += ' content-section-pane-graphic'
    }
    if ('flex' in this.props) {
      classes += ' content-section-pane-flex'
    }
    if ('half' in this.props) {
      classes += ' content-section-pane-half'
    }
    if ('left' in this.props) {
      classes += ' content-section-pane-align-left'
    }
    if ('center' in this.props) {
      classes += ' content-section-pane-align-center'
    }
    if ('center-vertically' in this.props) {
      classes += ' content-section-pane-align-center-vertically'
    }
    if ('align-end' in this.props) {
      classes += ' content-section-pane-align-end'
    }
    if ('align-start' in this.props) {
      classes += ' layout-align-center'
    }
    if ('align-center' in this.props) {
      classes += ' layout-align-center'
    }
    if ('right' in this.props) {
      classes += ' content-section-pane-align-right'
    }
    if ('full' in this.props) {
      classes += ' content-section-pane-full'
    }
    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    if (this.props.style) {
      styles = this.props.style
    }

    return (
      <div className={'content-section-pane' + classes}>
        <div className="content-section-pane-wrapper hidden" style={styles}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export class ContentSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''

    if ('dark-blue-gradient' in this.props) {
      classes += ' content-section-style--dark-blue-gradient'
    }
    if ('gold-gradient' in this.props) {
      classes += ' content-section-style--gold-gradient'
    }

    if ('graphite' in this.props) {
      classes += ' content-section-style--graphite'
    }

    let contentSectionStyles = null

    if (this.props.style) {
      contentSectionStyles = this.props.style
    }
    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    return (
      <section className={'content-section ' + classes}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div
          className="content-section-wrapper hidden"
          style={contentSectionStyles}
        >
          {this.props.children}
        </div>
      </section>
    )
  }
}
