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

import { Grid, GridItem } from '../../components/grid/grid'
import styled from 'styled-components'

const PersonMain = styled.div`
  margin-top: ${props => props.theme.units.gutter * 4}px;
`

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.units.gutter * 2};
`

const PersonAvatar = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: white;
  margin-bottom: ${props => props.theme.units.gutter};
  box-shadow: ${props => props.theme.animations.dropShadowShallow};
  overflow: hidden;
`

const PersonDetailsName = styled.div`
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.headings};
  color: ${props => props.theme.colors.graphitebase};
  font-weight: 100;
`

const PersonDetailsTitle = styled.div`
  padding-top: ${props => props.theme.units.unit}px;
  padding-bottom: ${props => props.theme.units.unit}px;
  color: rgba(${props => props.theme.colors.graphitebase}, 0.75);
`

const meta = {
  title: 'Let your Data Speak!',
  description: '3Blades',
}

const newsletterButton = [
  {
    label: 'Subscribe',
    title: '',
    icon: null,
    target: '_self',
    link: '#',
    button: {
      classes: 'button button-primary button-flat-left button-med no-movement',
    },
  },
]

const team = [
  {
    name: 'Greg Werner',
    headshot: 'gregwerner.jpg',
    title: 'CEO',
    description: '',
  },
  {
    name: 'Kevin Edmonson',
    headshot: 'kedmonson.jpg',
    title: 'Sales',
    description: '',
  },
  {
    name: 'Micheal Roach',
    headshot: 'mroach.jpg',
    title: 'DevOps Engineer',
    description: '',
  },
  {
    name: 'John Griebel',
    headshot: 'johngriebel.jpg',
    title: 'Backend Engineer',
    description: '',
  },
  {
    name: 'Eli Philpotts',
    headshot: 'eliphilpotts.png',
    title: 'Data Scientist',
    description: '',
  },
  {
    name: 'Ray Gesualdo',
    headshot: 'raygesualdo.jpg',
    title: 'Software Engineer',
    description: '',
  },
]
export default class About extends React.Component {
  render() {
    return (
      <Layout meta={meta} light>
        <ContentSection>
          <ContentPane full center center-vertically>
            <Title>
              3Blades strives to democratize data science regardless of company
              or team size. We firmly believe that more collaboration leads to
              more innovation.
            </Title>
            <Body>
              <p />
            </Body>
          </ContentPane>
        </ContentSection>
        <ContentSection gold-gradient>
          <ContentPane full center center-vertically>
            <Title>The 3Blades Team</Title>
            <Body>
              <p>
                The 3Blades team is passionate about quality open source
                software. Based out of Atlanta, GA, 3Blades engineers come from
                a variety of backgrounds and geographies.
              </p>

              <Grid columns="3">
                {team.map(person =>
                  <GridItem key={person.name}>
                    <PersonMain>
                      <PersonWrapper>
                        <PersonAvatar>
                          <img
                            src={`/static/images/headshots/${person.headshot}`}
                            style={{ width: '100%' }}
                          />
                        </PersonAvatar>
                        <div>
                          <PersonDetailsName>
                            {person.name}
                          </PersonDetailsName>
                          <PersonDetailsTitle>
                            {person.title}
                          </PersonDetailsTitle>
                        </div>
                      </PersonWrapper>
                    </PersonMain>
                  </GridItem>
                )}
              </Grid>
            </Body>
          </ContentPane>
        </ContentSection>
      </Layout>
    )
  }
}
