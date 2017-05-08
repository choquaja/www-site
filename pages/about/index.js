import React from 'react'
import Layout from '../../components/layout/layout';
import styles from './about.index.styles.scss';
import {ContentSection, ContentPane, Graphic, Title, Subtitle, Body} from '../../components/content-section/content-section';

import {Grid, GridItem} from '../../components/grid/grid';

const meta = {
    title: 'Let your Data Speak!',
    description: '3Blades'
};

const newsletterButton = [
    {
        label: 'Subscribe',
        title: '',
        icon: null,
        target: '_self',
        link: '#',
        button: {
            classes: 'button button-primary button-flat-left button-med no-movement'
        }
    }
];

const team = [
  { name: 'Greg Werner', headshot: 'gregwerner.jpg', title: 'CEO', description: ''},
  { name: 'Abhi Kethireddy', headshot: 'abhikethireddy.jpg', title: 'Software Engineer', description: 'Optimistic and Imaginative'},
  { name: 'John Griebel', headshot: 'johngriebel.jpg', title: 'Senior Backend Engineer', description: 'Too busy fixing things to think of a bio.'},
  { name: 'Eli Philpotts', headshot: 'eliphilpotts.png', title: 'Senior Data Scientist', description: ''},
  { name: 'Ray Gesualdo', headshot: 'raygesualdo.jpg', title: 'Senior Software Engineer', description: ''},
]
export default class About extends React.Component {
    render() {
        return (
            <Layout meta={meta} light>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <ContentSection>
                    <ContentPane full center center-vertically>

                        <Title>
                            3Blades strives to democratize data science regardless of company or team size. We firmly believe that more collaboration leads to more innovation.
                        </Title>
                        <Body>
                        <p>
                        </p>
                        </Body>
                    </ContentPane>
                </ContentSection>
                <ContentSection gold-gradient>
                    <ContentPane full center center-vertically>
                        <Title>
                            The team behind 3Blades
                        </Title>
                        <Body>
                        <p>
                            The 3Blades team is passionate about quality open source software. Based out of Atlanta, GA, 3Blades engineers come from a variety of backgrounds and geographies.
                        </p>

                        <Grid columns="3" className="people">
                          {team.map(person => (
                            <GridItem key={person.name}>
                              <div className="person">
                                <div className="person-wrapper">
                                  <div className="person-avatar">
                                    <img src={`/static/images/headshots/${person.headshot}`} style={{width: '100%'}} />
                                  </div>
                                  <div className="person-details">
                                    <div className="person-details-name">
                                      {person.name}
                                    </div>
                                    <div className="person-details-title">
                                      {person.title}
                                    </div>
                                    {/* <div className="person-details-bio">
                                      {person.description}
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </GridItem>
                          ))}
                        </Grid>
                        </Body>
                    </ContentPane>
                </ContentSection>
            </Layout>
        )
    }

}
