import React from 'react'
import Layout from '/components/layout/layout';
import styles from './about.index.styles.scss';
import {ContentSection, ContentPane, Graphic, Title, Subtitle, Body} from '/components/content-section/content-section';

import {Grid, GridItem} from '/components/grid/grid';

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


export default class About extends React.Component {
    render() {
        return (
            <Layout meta={meta} light>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <ContentSection>
                    <ContentPane full center center-vertically>

                        <Title>
                            A short but snappy line about 3blades as a company and what it stands for.
                        </Title>
                        <Body>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet aspernatur assumenda
                            consectetur dignissimos eaque eligendi fugit id magnam modi, nesciunt pariatur quaerat, quod
                            repellendus tempora tenetur unde, ut voluptatum!
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab beatae deserunt, dignissimos
                            dolor earum hic laboriosam molestias omnis provident? Ab doloribus ea inventore officia
                            placeat quae quidem recusandae similique.
                        </p>

                        <Grid columns="3" className="people">
                            <GridItem>
                                <div className="person">
                                    <div className="person-wrapper">
                                        <div className="person-avatar">
                                            <div className="person-avatar-wrapper">

                                            </div>
                                        </div>
                                        <div className="person-details">
                                            <div className="person-details-name">
                                                Greg Werner
                                            </div>
                                            <div className="person-details-title">
                                                CEO
                                            </div>
                                            <div className="person-details-bio">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </GridItem>

                            <GridItem>
                                <div className="person">
                                    <div className="person-wrapper">
                                        <div className="person-avatar">
                                            <div className="person-avatar-wrapper">

                                            </div>
                                        </div>
                                        <div className="person-details">
                                            <div className="person-details-name">
                                                Greg Werner
                                            </div>
                                            <div className="person-details-title">
                                                CEO
                                            </div>
                                            <div className="person-details-bio">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </GridItem>

                            <GridItem>
                                <div className="person">
                                    <div className="person-wrapper">
                                        <div className="person-avatar">
                                            <div className="person-avatar-wrapper">

                                            </div>
                                        </div>
                                        <div className="person-details">
                                            <div className="person-details-name">
                                                Greg Werner
                                            </div>
                                            <div className="person-details-title">
                                                CEO
                                            </div>
                                            <div className="person-details-bio">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </GridItem>

                            <GridItem>
                                <div className="person">
                                    <div className="person-wrapper">
                                        <div className="person-avatar">
                                            <div className="person-avatar-wrapper">

                                            </div>
                                        </div>
                                        <div className="person-details">
                                            <div className="person-details-name">
                                                Greg Werner
                                            </div>
                                            <div className="person-details-title">
                                                CEO
                                            </div>
                                            <div className="person-details-bio">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </GridItem>

                            <GridItem>
                                <div className="person">
                                    <div className="person-wrapper">
                                        <div className="person-avatar">
                                            <div className="person-avatar-wrapper">

                                            </div>
                                        </div>
                                        <div className="person-details">
                                            <div className="person-details-name">
                                                Greg Werner
                                            </div>
                                            <div className="person-details-title">
                                                CEO
                                            </div>
                                            <div className="person-details-bio">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </GridItem>

                            <GridItem>
                                <div className="person">
                                    <div className="person-wrapper">
                                        <div className="person-avatar">
                                            <div className="person-avatar-wrapper">

                                            </div>
                                        </div>
                                        <div className="person-details">
                                            <div className="person-details-name">
                                                Greg Werner
                                            </div>
                                            <div className="person-details-title">
                                                CEO
                                            </div>
                                            <div className="person-details-bio">
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