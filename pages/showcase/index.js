import React from 'react'
import Layout from '../../components/layout/layout'
import styles from './showcase.styles.scss'
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

export default class Index extends React.Component {
  render() {
    return (
      <Layout meta={meta} light>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <ContentSection>
          <ContentPane full center center-vertically>
            <Title>
              Data Science Model Showcase
            </Title>
            <Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab beatae deserunt, dignissimos
                dolor earum hic laboriosam molestias omnis provident? Ab doloribus ea inventore officia
                placeat quae quidem recusandae similique.
              </p>
              <Grid columns="4" className="showcase-grid">
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>

                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
                <GridItem>
                  <div className="showcase-item">
                    <div className="showcase-item-wrapper">
                      <div className="showcase-item-avatar">
                        <div className="showcase-item-avatar-wrapper" />
                      </div>
                      <div className="showcase-item-details">
                        <div className="showcase-item-details-name">
                          Model Example
                        </div>
                        <div className="showcase-item-details-desc">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                      </div>

                    </div>

                  </div>
                </GridItem>
              </Grid>
            </Body>
          </ContentPane>
        </ContentSection>
      </Layout>
    )
  }
}
