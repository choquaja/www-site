import React from 'react'
import Layout from '../../components/layout/layout'
import styled from 'styled-components'
import { Grid, GridItem } from '../../components/grid/grid'
import {
  ContentSection,
  ContentPane,
  Graphic,
  Title,
  Subtitle,
  Body,
} from '../../components/content-section/content-section'

const meta = {
  title: 'Kits Showcase',
  description: '3Blades',
}

const ShowcaseGrid = styled(Grid)`
margin-top: ${props => props.theme.units.gutter * 4};
`

const ShowcaseItem = styled.div`
  padding: ${props => props.theme.units.gutter};
  border-radius: 8px;
  border: ${props => props.theme.borders.border};
  box-shadow: ${props => props.theme.animations.dropShadowlLight};
  margin: ${props => props.theme.units.gutter};
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    box-shadow: $drop-shadow-l-light;
  }
`

const ShowcaseItemAvatar = styled.div`
  width: 100%;
  padding-bottom: 60%;
  margin-bottom: ${props => props.theme.units.gutter};
  border: ${props => props.theme.borders.border};
  background: whitesmoke;
`

const ShowcaseItemName = styled.div`
  font-family: ${props => props.theme.fonts.headings};
  font-size: 1.5rem;
  padding-bottom: ${props => props.theme.units.unit}px;
  font-weight: 100;
  text-align: left;
  width: 100%;
`

const ShowcaseItemDesc = styled.div`
  text-align: left;
  width: 100%;
  font-weight: 300;
  opacity: 0.5;
`

export default class Index extends React.Component {
  render() {
    return (
      <Layout meta={meta} light>
        <ContentSection>
          <ContentPane full center center-vertically>
            <Title>Data Science Model Showcase</Title>
            <Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab
                beatae deserunt, dignissimos dolor earum hic laboriosam
                molestias omnis provident? Ab doloribus ea inventore officia
                placeat quae quidem recusandae similique.
              </p>
              <ShowcaseGrid columns="4">
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>

                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />

                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
                <GridItem>
                  <ShowcaseItem>
                    <ShowcaseItemAvatar />
                    <ShowcaseItemName>Model Example</ShowcaseItemName>
                    <ShowcaseItemDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ShowcaseItemDesc>
                  </ShowcaseItem>
                </GridItem>
              </ShowcaseGrid>
            </Body>
          </ContentPane>
        </ContentSection>
      </Layout>
    )
  }
}
