import React from 'react'
import styles from './content-section.scss'
import styled from 'styled-components'
import { globalWrapper, media } from '../../styles/helpers'

//CONTENT SECTION
const ContentSectionMain = styled.div`
  width: 100%;
  will-change: opacity;
  background: white;
  ${props =>
    props.end &&
    '  align-items: flex-end justify-content: flex-end display: flex'};
`
//CONTENT SECTION WRAPPER
const ContentWrapper = styled.div`
  opacity: 0;
  padding-top: $gutter*2;
  padding-bottom: $gutter*2;
  flex-wrap: wrap;
  display: flex;
  ${globalWrapper} ${media.desktop`
  padding-top: ${props => props.theme.units.gutter * 4.5};
  padding-bottom: ${props => props.theme.units.gutter * 4.5};
  `} ${media.tablet`
      padding-left: 0;
      padding-right: 0;`};
`
//CONTENT SECTION HEADER
const ContentHeader = styled.div`
  margin-bottom: ${props => props.theme.units.gutter * 1.5} ${media.handheld`
    text-align:center;
    ${globalWrapper}
    padding-left:${props => props.theme.units.gutter}
    padding-right:${props => props.theme.units.gutter}
  `};
  ${media.tablet`
    padding-left: $gutter*2;
    padding-right: $gutter*2;
    min-width: 100% !important;
    max-width: 100% !important;
  `};
`
//CONTENT SECTION TITLE
const ContentTitle = styled.div`
  margin-bottom: ${props => props.theme.units.gutter * 1.5};
  ${props => props.center && '&::after {left: calc(50% - 30.5px);'};
`

const ContentTitleWrapper = styled.div`
  padding-bottom: ${props => props.theme.units.unit}px;
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.headings};
  font-weight: 100;
  ${media.handheld`
  text-align: left;
`};
`

//CONTENT SECTION BODY
const ContentBodyMain = styled.div`
  width: 100%;
  ${media.handheld`
    text-align: center;
  `};
  ${props =>
    props.end &&
    '  align-items: flex-end justify-content: flex-end display: flex'};
`

const ContentBodyWrapper = styled.div`
  padding-bottom: ${props => props.theme.units.unit}px;
`

const BodyUL = styled.ul`
  margin: 0;
  font-size: 18px;
  line-height: 30px;
  font-weight: 200;
  ${media.desktop`max-width: 85%`};
  ${media.handheld`text-align: left`};
`

const BodyP = styled.ul`
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

//CONTENT SECTION GRAPHIC
const ContentSectionGraphic = styled.div`
  margin: ${props => props.theme.units.gutter} ${globalWrapper}
    ${media.tablet`padding:0;`};
`

const ContentGraphicLabel = styled.div`
  ${globalWrapper} text-align: center;
  padding-top: ${props => prop.theme.units.unit}px;
`

const ContentGraphicImage = styled.div`
  background: white;
  max-width: 100%;
  display: block;
  box-shadow: ${props => props.theme.animations.dropShadowxlLight};
`

//content section alignments
const CenterAlignPInContentSectionBody = styled.p`
  max-width: 680px;
  ${globalWrapper};
`

const CenterP = styled.p`
  font-size: 22px;
  line-height: 36px;
`

//PANES
const PaneMain = styled.div`
  display: flex;
  width: 100%;
`

const PaneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${props => props.theme.units.unit}px;
`

const PaneHalf = styled.div`
  width: 50%;
  ${media.tablet`width:100%;`};
  padding: ${props => props.theme.units.unit}px;
`

const PaneHalfFeatured = styled.div`
  width: 100%;
  ${media.tablet`width:100%;`};
  padding: ${props => props.theme.units.unit}px;
`

const PaneFlex = styled.div`flex: 1;`

const PaneText = styled.div`
  ${media.tablet`width:65%;`} ${media.handheld`width:100%;`};
`

const PaneGraphic = styled.div`
  ${media.tablet`width:35%;`} ${media.handheld`width:100%;`};
`

const AlignCenterContentSectionTitle = styled.div`max-width: 700px !important;`

const AlignCenterContentSectionTitleWrapper = styled.div`
  ${media.handheld` text-align: center !important`};
`

const AlignCenterContentP = styled.p`
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: 600px !important;
  ${media.handheld`text-align:center`};
`

const StyleGraphite = styled.div`
  background: ${props => props.theme.colors.graphitebase};
`

const CardSimple = styled.div`
  position: relative;
  margin-top: ${props => prop.theme.units.unit * 2}px;
  min-width: 480px;
`

const CardSimpleWrapper = styled.div`
  padding: ${props => props.theme.units.unit * 2}px;
`

const CardSimpleBody = styled.div`
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    left: 0;
    height: 100%;
    border-radius: 40px;
    box-shadow: 0 8px 15px rgba(80, 103, 132, .15);
  }
`

const ContentSectionPaneWrapper = styled.div`
  ${props => props.half && 'padding: ${props => props.theme.units.unit * 2}px'};
  ${props =>
    props.halfFeatured && 'padding: ${props => props.theme.units.unit * 2}px'};
  ${props => props.centerVertical && 'justify-content: center'};
  ${props =>
    props.end &&
    'align-items: flex-end justify-content: flex-end display: flex'};
  ${props => props.right && 'text-align:right justify-content:flex-end'};
  ${props =>
    props.center &&
    'justify-content: center !important align-items: center !important text-align: center !important'};
`

export class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ContentTitle>
        <ContentTitleWrapper>
          {this.props.children}
        </ContentTitleWrapper>
      </ContentTitle>
    )
  }
}

export class Body extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ContentBodyMain>
        <ContentBodyWrapper>
          {this.props.children}
        </ContentBodyWrapper>
      </ContentBodyMain>
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
    return (
      <PaneMain>
        <ContentSectionPaneWrapper>
          {this.props.children}
        </ContentSectionPaneWrapper>
      </PaneMain>
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
