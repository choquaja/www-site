import Head from 'next/head'
import Header from '../header/header'
import Footer from '../footer/footer'
import Router from 'next/router'
import Typekit from 'react-typekit'
import styles from './layout.styles.scss'
import ReactGA from 'react-ga'
import { theme } from './../../styles/theme'
if (typeof window !== 'undefined') ReactGA.initialize('UA-63775134-5')
import styled, {
  ThemeProvider,
  injectGlobal,
  css,
  keyframes,
} from 'styled-components'
import {
  ffHeading,
  transition,
  centerContent,
  media,
} from '../../styles/helpers'
import {
  FadeSlideFromTopSMKeyFrame,
  FadeSlideFromBottomSM,
  animationFadein,
} from '../../styles/keyframes'
import { placeholder } from 'polished'

injectGlobal`
  * {
  box-sizing: border-box;
  outline: none;
}

body.root{
  & > div{
    &:first-of-type{
      width: 100%;
    }
  }
}

body {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.body};
  position: relative;


  p {
    font-weight: 200;
  }

  &.loading {
    & .page {
      opacity: 0;
      &-wrapper {
        transform: translateY(-8px);
      }
    }
  }

  & #__next {
    display: flex;
    flex: 1;
    flex-direction: column;

    & div[data-reactroot] {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }
}

a{
  &:link,
  &:active,
  &:visited{
    color: ${props => props.theme.colors.orangedark};
    text-decoration: none;
    &:hover{
      cursor: pointer;
      color: ${props => props.theme.colors.orangelight};
    }
  }
  h1 {
    ${ffHeading}
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 55px;
    color: ${props => props.theme.colors.greyblue};
  }
}
`

const LoadingAnim = keyframes`
0% {
  left: -100vw;
}

100% {
  left: 100vw;
}
`

const LayoutComponent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PageComponent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  opacity: 1;
  ${transition};
`

const PageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  transform: none;
  padding-top: ${props => props.theme.units.headerheight};
  flex-direction: column;
  ${transition};
`

const SubtitleComp = styled.div`
  ${ffHeading} font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 3.6px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.orangebase};
`
//& + h1 {
//  padding-top: $gutter;

const PaddingTopGutter = styled.div`
  padding-top: ${props => props.theme.units.gutter}px;
`

const ButtonsWrapper = styled.div`display: flex;`

const ButtonsFullWidth = styled.div`width: 100%;`
const ButtonsFullWidthButton = styled.div`
  width: 100%;
  flex: 1;
  text-align: center;
`

const ButtonsFullWidthButtonLabel = styled.div`${centerContent};`

const Button = styled.div`
  display: flex;
  text-decoration: none;
  padding: ${props => props.theme.units.unit}px
    ${props => props.theme.units.gutter}px;
  padding-bottom: ${props => props.theme.units.unit / 1.25}px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  ${transition} white-space: nowrap;
  &:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  }
  &:not(.no-movement) {
    &:hover {
      transform: translateY(-2px);
    }
  }

  &:active {
    .button-label {
      transform: translateY(2px);
    }
  }
  ${props =>
    props.primary &&
    `background:${props => props.theme.colors.orangelight}
 &:hover {
  background: darken(${props => props.theme.colors.orangelight}, 5%)
}
&:active {
  background: $color-orange-dark
}`};
  ${props =>
    props.secondary &&
    `background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 5px;

  &:hover {
    border-color: ${props => props.theme.colors.orangelight};
  }`};
`

const ButtonLabel = styled.div`
  text-transform: none;
  font-family: ${props => props.theme.fonts.code};
  font-size: 0.9rem;
  line-height: 0.9rem;
  ${transition} ${props => props.primary && 'color:white'};
  ${props => props.primary && 'color:${props=>props.theme.colors.orangelight}'};
`

const ButtonLarge = styled.div`
  padding: (${props => props.theme.units.unit * 2}px)
    (
      ${props => props.theme.units.gutter * 2}px
    );
`

const ButtonMed = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;
`

const ButtonFlatLeft = styled.div`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

const hiddenComp = styled.div`opacity: 1 !important;`

const hiddenInViewEnter = styled.div`
  animation-delay: 0s !important ${FadeSlideFromTopSMKeyFrame};
`

const hiddenUpInViewEnter = styled.div`
  animation-delay: 0s !important ${FadeSlideFromBottomSM};
`

const hiddenDelayMedInViewEnter = styled.div`animation-delay: 0.35s !important;`

const hiddenFadeInViewEnter = styled.div`
  ${animationFadein} animation-delay: 0.35s !important;
`

const showOnFocus = styled.div`
  opacity: 0;
  input:focus {
    opacity: 1;
  }
`

const WebKitPlaceholder = styled.input`
  ${placeholder({ color: 'rgba(${props=>props.theme.colors.greybase},0.25)' })};
`

const Moz19Placeholder = styled.input`
  ${placeholder({ color: 'rgba(${props=>props.theme.colors.greybase},0.25)' })};
`

const MSInputePlaceholder = styled.input`
  ${placeholder({ color: 'rgba(${props=>props.theme.colors.greybase},0.25)' })};
`

const Moz18Placeholder = styled.input`
  ${placeholder({ color: 'rgba(${props=>props.theme.colors.greybase},0.25)' })};
`

const BlueSectionRight = styled.input`
  ${media.desktop`margin-top: ${props => props.theme.units.gutter}px`};
`

const WiggleAfter = styled.div`
  position: relative;
  padding-bottom: ${props => props.theme.units.unit * 2}px;
  margin-bottom: ${props => props.theme.units.unit * 2}px;
  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    content: '';
    height: 6px;
    width: 61px;
    background: ${props => props.theme.colors.orangelight};
  }
`

const CardsTopLeft = styled.div`align-items: flex-end;`
const CardsTopLeftCard = styled.div`margin-bottom: 0 !important;`

const CardsHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 8;
  ${media.tablet`flex-direction:column`};
`

const CardsHomeTranslate = styled.div`
  ${media.desktop`position:relative z-index:8`};
`

const CardsHomeRight = styled.div`
  ${media.desktop`margin-top:${props => props.theme.units.gutter * 3}px`};
`

const Card = styled.div`
  flex: 1 1 calc(50% - 20px);
  margin-bottom: ${props => props.theme.units.gutter};
  background: white;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${props => props.theme.animations.dropShadowShallow};
  border: ${props => props.theme.borders.border};
  ${transition};
  &:first-of-type {
    margin-bottom: $gutter !important;
  }
  &:nth-of-type(2) {
    margin-right: 0 !important;
    ${media.tablet`
    margin-bottom: 0 !important;`};
  }
`

const CardWrapper = styled.div`padding: ${props => props.theme.units.gutter}px;`

const CardHeader = styled.div`
  padding-bottom: ${props => props.theme.units.unit * 2}px;
`

const CardText = styled.div`
  color: ${props => props.theme.colors.graphitebase};
  font-family: ${props => props.theme.fonts.headings};
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2.25rem;
`

const CardBody = styled.div`
  color: ${props => props.theme.colors.graphitemid};
  p {
    font-size: 1rem;
    line-height: 1.8rem;
  }
  ${media.tablet`margin-right:${props => props.theme.units.gutter}px;`};
  ${media.desktop`
    &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.animations.dropShadowlLight}`};
`

const PaddingGutter = styled.div`
  padding: ${props => props.theme.units.gutter}px;
`

const PaddingSidesGutter = styled.div`
  ${media.desktop`padding-left:${props =>
    props.theme.units.gutter}px padding-right:${props =>
    props.theme.units.gutter}px;`};
  ${media.tablet`margin-top:${props =>
    props.theme.units.gutter * 2}px margin-bottom:${props =>
    props.theme.units.gutter}px;`};
`

const logPageView = () => {
  if (typeof window !== 'undefined') {
    console.log('logPageView', window.location.pathname, window.location.search)
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}

const buildTheme = mode => ({
  ...theme,
  mode,
})

export default class Layout extends React.Component {
  state = {
    loading: false,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    logPageView()
    Router.onRouteChangeComplete = () => {
      logPageView()
    }
  }

  render() {
    return (
      <ThemeProvider theme={buildTheme(this.props.light ? 'light' : 'dark')}>
        <div className="Layout">
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          <Head>
            <meta charSet="utf-8" />
            <title>
              {'3Blades: ' + this.props.meta.title}
            </title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <meta
              itemprop="description"
              content={this.props.meta.description}
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/css/normalize.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/mdi/css/materialdesignicons.css"
            />
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js.hs-scripts.com/3428528.js"
            />
            <Typekit kitId="mqy5yqb" />
          </Head>
          <Header {...this.props} />
          <main className="page">
            <div className="page-wrapper">
              {this.props.children}
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}
