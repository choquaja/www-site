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
      <div className="item">
        <div className="item-wrapper">
          <div className="item-avatar">
            <div className="item-avatar-wrapper">
              <i className={'mdi ' + item.icon}>
                {item.avatar}
              </i>
            </div>
          </div>
          <div className="item-details">
            <div className="item-title">
              {item.title}
            </div>
            <div className="item-body">
              <p>
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

export default class Index extends React.Component {
  render() {
    return (
      <Layout meta={meta}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="hero">
          <div className="hero-wrapper">
            <div className="hero-section full">
              <div className="hero-section-wrapper">
                <div className="hero-messaging hero-translate">
                  <h1>Let your data speak!</h1>
                  <h2 className="subtitle small">
                    Build and share your data science projects with ease.
                  </h2>
                  <div className="newsletter ">
                    <Buttons items={newsletterButton} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContentSection graphite className="special-mock-content-section">
          <ContentPane half center-vertically>
            <Title>What is 3Blades?</Title>
            <Body>
              <h2 className="special-subtitle">
                {' '}3Blades offers a cloud based development environment to
                build and share data science projects.
              </h2>
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
              <div className="special-mock">
                <div className="special-mock-wrapper">
                  <div className="special-mock-image">
                    <img src="/static/images/cli-mock.png" alt="" />
                  </div>
                </div>
              </div>
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
              <div className="flexed-items">
                {whoUses(whoList)}
              </div>
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
              <div className="button-grid">
                <Buttons items={platformButtons} />
              </div>
            </Body>
          </ContentPane>
        </ContentSection>
      </Layout>
    )
  }
}
