import React from 'react'
import Layout from '../components/layout/layout'
import styles from './index.styles.scss'
import { Browser } from '../components/browser/browser'
import {
  ContentSection,
  ContentPane,
  Graphic,
  Title,
  Subtitle,
  Body,
} from '../components/content-section/content-section'
import Buttons from '../components/buttons/buttons'
import { Grid, GridItem } from '../components/grid/grid'
import Console, {
  CodeComment,
  CodeInput,
  CodeOutput,
} from '../components/console/console'
import styled from 'styled-components'
import { media, centerContent, transition } from '../styles/helpers'

const PageWrapper = styled.div`padding-top: 0;`

const Hero = styled.div`
  background: #3b3b3b url("/static/hero-bg.jpg") 60% 20% no-repeat;
  background-size: cover !important;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-180deg, rgba(9, 30, 65, 0) 40%, #3b3b3b 100%);
  }
`

const HeroH1 = styled.h1`
  color: white;
  text-align: center;
  padding-top: 120px;
`
const HeroH2 = styled.h2`text-align: center;`

const HeroWrapper = styled.div`
  position: relative;
  z-index: 4;
`

const HeroButtons = styled.div`
  flex: 1;
  display: flex;
  min-height: 600px;
  align-self: stretch;
`

const HeroButtonsWrapper = styled.div`
  align-items: center;
  justify-content: center;
  padding: 20px;
  display: flex;
  flex: 1;
  ${centerContent};
  justify-content: space-between;
  ${media.tablet`flex-direction:column`};
`

const HeroSection = styled.div`
  flex: 1;
  display: flex;
  ${media.tablet`padding: 0 ${props => props.theme.units.gutter}px`};
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
  ${props =>
    props.half &&
    `max-width: 50%
    ${media.tablet`width:100% max-width:100%`}
    `};
`

const HeroSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Newsletter = styled.div`
  margin-top: ${props => props.theme.units.gutter}px;
  ${media.tablet`margin-bottom: ${props => props.theme.units.gutter * 2}px`};
`
const NewsletterSubtitle = styled.div`
  padding-bottom: ${props => props.theme.units.unit}px;
  font-weight: 300;
  color: ${props => props.theme.colors.greybase};
  opacity: 0.35;
`

const HeroTranslate = styled.div`
  width: 100%;
  transform: translateY(-80px);
`

const img = styled.img`
  display: block;
  max-width: 100%;
`

const Form = styled.div`
  display: flex;
  width: 100%;
`

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`

const FormButton = styled.div`
  background: ${props => props.theme.colors.orangelight};
`

const FormButtonWrapper = styled.div`
  padding: ${props => props.theme.units.unit}px;
  color: white;
`

const FormMessage = styled.div`
  position: absolute;
  top: 100%;
  padding-top: ${props => props.theme.units.unit}px;
  ${transition};
  font-size: 0.85rem;
  color: rgba(${props => props.theme.colors.grey - base}, 0.5);
`

const FormInput = styled.div`
  flex: 1;
  border: ${props => props.theme.borders.border};
  padding: ${props => props.theme.units.unit}px;
  color: ${props => props.theme.colors.grey - base};
`

const textDark = styled.div`color: ${props => props.theme.colors.graphitebase};`

const FlexedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  flex: 1 1 25%;
  padding: ${props => props.theme.units.gutter}px;
  min-width: 250px;
`

const ItemAvatar = styled.div`
  padding-top: ${props => props.theme.units.gutter * 2}px;
  padding-bottom: ${props => props.theme.units.gutter}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ItemI = styled.div`
  color: ${props => props.theme.colors.graphitebase};
  font-size: 30px;
  line-height: 30px;
`

const ItemAvatarWrapper = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid rgba(white, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: ${props => props.theme.animations.dropShadowxlLight};
`

const ItemTitle = styled.div`
  font-size: 24px;
  font-weight: 100;
  font-family: ${props => props.theme.fonts.headings};
`

const ItemBody = styled.div`
  padding-top: ${props => props.theme.units.gutter}px;
`

const ItemBodyP = styled.div`
  color: rgba(white, 0.75);
  font-size: 16px;
  line-height: 22px;
`

const FeaturedLinks = styled.div`
  padding: 0 !important;
  margin: 0 !important;
`

const FeaturedLink = styled.div`
  list-style: none;
  &:not(:first-of-type) {
    padding-top: $gutter;
  }
  &:not(:last-of-type) {
    padding-bottom: $gutter;
    border-bottom: $border;
  }
`

const FeaturedLinkTitle = styled.div`font-size: 1.5rem;`

const ButtonGrid = styled.div`
  padding-top: ${props => props.theme.units.gutter}px;
`

const ButtonGridButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ButtonGridButton = styled.div`
  flex-grow: 1;
  width: calc(50% - 20px);
  &:nth-of-type(3),
  &:nth-of-type(4) {
    margin-top: ${props => props.theme.units.unit}px;
  }
  &:nth-of-type(3) {
    margin-left: 0;
  }
`

const LayoutAlignEndButtonsWrapper = styled.div`justify-content: flex-end;`

const SpecialMockContentSection = styled.div`overflow: hidden;`

const SpecialMockWrapper = styled.div`position: relative;`

const SpecialMockImage = styled.div`
  ${media.desktop`transform: scale(2) translateY(30px) translateX(80px);`};
  ${media.tablet`transform: scale(1.25) translateY(50px);`};
`

const SpecialSubtitle = styled.h2`
  color: ${props => props.theme.colors.orangelight};
  font-weight: 100;
  ${media.handheld`text-align:left`};
`

const FeaturesContentSectionPaneHalf = styled.div`
  &:first-of-type {
    padding-right: $gutter;
  }
  &:nth-of-type(2) {
    padding-left: $gutter;
  }
  ${media.handheld`
     &:first-of-type {
      padding-right: 0;
    }
    &:nth-of-type(2) {
      padding-left: 0;
    }`};
`
const meta = {
  title: 'Let your Data Speak!',
  description: '3Blades',
}

const newsletterButton = [
  {
    label: 'Request Early Access',
    title: '',
    icon: null,
    target: '_blank',
    link: 'https://www.getdrip.com/forms/1759481/submissions/new',
    button: {
      classes: 'button button-primary button-large',
    },
  },
]

const ShowcaseButton = [
  {
    label: 'Explore our Kits',
    title: '',
    icon: null,
    target: '_self',
    link: '#',
    button: {
      classes: 'button button-secondary',
    },
  },
]

const firstContentSectionStyles = {
  paddingTop: '20px',
  paddingBottom: '40px',
}
const noPaddingBottom = {
  paddingBottom: '0',
}
const topLeftCard = {
  paddingBottom: '0',
  // alignSelf: 'flex-end'
}

const whoList = [
  {
    title: 'Data Scientists',
    desc:
      'Collaborate with other data science project team members effectively.',
    icon: 'mdi-code-braces',
  },
  {
    title: 'Business Analysts',
    desc: 'Contribute, review and share data stories with all stakeholders.',
    icon: 'mdi-chart-areaspline',
  },
  {
    title: 'Software Engineers',
    desc:
      'Integrate assets with existing pipelines and applications using a full-featured API.',
    icon: 'mdi-server',
  },
  {
    title: 'Executives',
    desc:
      'Accelerate data-driven organizations with best of breed tools and services.',
    icon: 'mdi-account-card-details',
  },
]

const platformButtons = [
  {
    label: 'Getting Started',
    title: '',
    icon: null,
    target: '_blank',
    link: 'https://docs.3blades.io/docs',
    button: {
      classes: 'button button-primary',
    },
  },
  {
    label: 'Advanced Topics',
    title: '',
    icon: null,
    target: '_blank',
    link: 'https://docs.3blades.io/docs/server-environment-variables',
    button: {
      classes: 'button button-primary',
    },
  },
  {
    label: 'API',
    title: '',
    icon: null,
    target: '_blank',
    link: 'https://docs.3blades.io/reference',
    button: {
      classes: 'button button-primary',
    },
  },
  {
    label: 'Open Source',
    title: '',
    icon: null,
    target: '_blank',
    link: 'https://github.com/3blades',
    button: {
      classes: 'button button-primary',
    },
  },
]

const seeMore = [
  {
    label: 'See More',
    title: '',
    icon: null,
    target: '_blank',
    link: 'https://www.getdrip.com/forms/1759481/submissions/new',
    button: {
      classes: 'button button-primary',
    },
  },
]

let whoUses = items => {
  return items.map((item, i) => {
    return (
      <Item>
        <ItemAvatar>
          <ItemAvatarWrapper>
            <i className={'mdi ' + item.icon}>
              {item.avatar}
            </i>
          </ItemAvatarWrapper>
        </ItemAvatar>
        <ItemTitle>
          {item.title}
        </ItemTitle>
        <ItemBody>
          <ItemBodyP>
            {item.desc}
          </ItemBodyP>
        </ItemBody>
      </Item>
    )
  })
}

export default class Index extends React.Component {
  render() {
    return (
      <Layout meta={meta}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Hero>
          <HeroWrapper>
            <HeroSection>
              <HeroSectionWrapper>
                <HeroTranslate>
                  <HeroH1>Let your data speak!</HeroH1>
                  <HeroH2>
                    Build and share your data science projects with ease.
                  </HeroH2>
                  <Newsletter>
                    <Buttons items={newsletterButton} />
                  </Newsletter>
                </HeroTranslate>
              </HeroSectionWrapper>
            </HeroSection>
          </HeroWrapper>
        </Hero>

        <ContentSection graphite className="special-mock-content-section">
          <ContentPane half center-vertically>
            <Title>What is 3Blades?</Title>
            <Body>
              <SpecialSubtitle>
                {' '}3Blades offers a cloud based development environment to
                build and share data science projects.
              </SpecialSubtitle>
              <p>
                Guided data science consists of services used by business
                analysts and data scientists to enhance their productivity while
                exploring data, building machine and deep learning models, and
                creating rich visualizations to tell their data stories.
              </p>
              <p>
                3Blades data scientists have created a set of interactive helper
                services that increases business value by guiding the user in
                these tasks.
              </p>
            </Body>
          </ContentPane>
          <ContentPane half center-vertically>
            <Body>
              <SpecialMockContentSection>
                <SpecialMockWrapper>
                  <SpecialMockImage>
                    <img src="/static/images/cli-mock.png" alt="" />
                  </SpecialMockImage>
                </SpecialMockWrapper>
              </SpecialMockContentSection>
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection gold-gradient>
          <ContentPane full center center-vertically>
            <Title>Who uses 3Blades?</Title>
            <Body>
              <h2 className="subtitle text--dark">
                Giving you the tools to collaborate seemlessly
              </h2>
              <FlexedItems>
                {whoUses(whoList)}
              </FlexedItems>
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection className="features-section">
          <ContentPane half-featured>
            <Title>Platform Resources</Title>
            <Body>
              <p>
                View the 3Blades platform introduction, dive deeper into
                advanced topics, or experience our interactive API docs.
              </p>
              <ButtonGrid>
                <Buttons items={platformButtons} />
              </ButtonGrid>
            </Body>
          </ContentPane>
        </ContentSection>
      </Layout>
    )
  }
}
