import React from 'react'
import Layout from '../../components/layout/layout'
import {
  ContentSection,
  ContentPane,
  Graphic,
  Title,
  Subtitle,
  Body,
} from '../../components/content-section/content-section'

const meta = {
  title: 'Blog',
  description: '3Blades',
}

export default () => (
  <Layout meta={meta}>
    <ContentSection>
      <ContentPane half center-vertically>
        <Body />
      </ContentPane>
      <ContentPane half center-vertically>
        <Title>
          Data Science Marketplace
        </Title>
        <Body>
          <p>
            Data scientists often would like to publish their models and visualizations so consumers can
            use them within their environments. 3Blades offers a data science platform that matches
            producers with consumers to enhance their productivity and allow for monetization of trained
            models. This innovative marketplace approach ensures that business analysts and data
            scientists of all levels are matched with appropriate end users to ensure maximum
            productivity.
          </p>
        </Body>
      </ContentPane>
    </ContentSection>
  </Layout>
)
