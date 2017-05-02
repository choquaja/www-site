import React from 'react'
import Layout from '../components/layout/layout';
import styles from './index.styles.scss';
import {Browser} from '/components/browser/browser';
import {ContentSection, ContentPane, Graphic, Title, Subtitle, Body} from '/components/content-section/content-section';
import Buttons from '/components/buttons/buttons';
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

const ShowcaseButton = [
    {
        label: 'Explore our Kits',
        title: '',
        icon: null,
        target: '_self',
        link: '#',
        button: {
            classes: 'button button-secondary'
        }
    }
];

const firstContentSectionStyles = {
    paddingTop: '20px',
    paddingBottom: '40px'
};
const noPaddingBottom = {
    paddingBottom: '0'

};
const topLeftCard = {
    paddingBottom: '0',
    // alignSelf: 'flex-end'
};

export default class Index extends React.Component {
    render() {
        return (
            <Layout meta={meta} light>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="hero">
                    <div className="hero-wrapper">
                        <div className="hero-section half">
                            <div className="hero-section-wrapper">
                                <div className="hero-messaging hero-translate">
                                    <div className="subtitle small">
                                        Let your data speak!
                                    </div>
                                    <h1>
                                        Build and share your data science projects with ease.
                                    </h1>
                                    <div className="newsletter">
                                        <div className="subtitle small">
                                            Subscribe to receive updates
                                        </div>
                                        <div className="form">
                                            <div className="form-wrapper">
                                                <input type="text" placeholder="name@domain.com"/>
                                                <div className="form-message show-on-focus">
                                                    We keep your information private.
                                                </div>
                                                <Buttons items={newsletterButton}/>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="hero-section graphic half">
                            <div className="hero-section-wrapper">
                                <div className="hero-translate">
                                    <Browser>
                                        <img src="/static/images/hero-graphic.png"/>
                                    </Browser>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContentSection dark-blue-gradient style={firstContentSectionStyles}>

                    <ContentPane half className="cards-home-translate cards-top-left">
                        <Body>
                        <div className="cards cards-home ">
                            <div className="card">
                                <div className="card-wrapper">
                                    <div className="card-header">
                                        <div className="card-header-text">
                                            Explore and Publish Trained Models
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Publish trained models with custom instance types as a RESTful API either
                                            for development or production. 3Blades also offers different kits of premade
                                            models to use or fork.
                                        </p>
                                        <Buttons full-width className='padding-top-gutter' items={ShowcaseButton}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-wrapper">
                                    <div className="card-header">
                                        <div className="card-header-text">
                                            Deploy to staging and production environments
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Out of the box integrations with common third party services along with an
                                            intuitive API for custom environments so that you no longer have to struggle
                                            with deployment headaches.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Body>
                    </ContentPane>
                    <ContentPane half center-vertically className="blue-section-right padding-sides-gutter">
                        <Title>
                            3Blades offers a cloud based development environment to build and share data science
                            projects.
                        </Title>
                        <Body>
                        <p>
                            Synchronize your files with best in class cloud storage services or use a RESTful API to
                            sync objects with on-premise storage solutions.
                        </p>
                        </Body>
                    </ContentPane>
                    <ContentPane half align-end style={topLeftCard} className="cards-home-translate">
                        <Body>
                        <div className="cards cards-home cards-home-top-left">
                            <div className="card">
                                <div className="card-wrapper">
                                    <div className="card-header">
                                        <div className="card-header-text">
                                            Expanding your data science team.
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Take advantage of our large database of training models and advanced machine
                                            learning models to extend your data science team beyond what it could be
                                            alone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Body>
                    </ContentPane>
                    <ContentPane half className="cards-home-translate">
                        <Body>
                        <div className="cards cards-home">
                            <div className="card">
                                <div className="card-wrapper">
                                    <div className="card-header">
                                        <div className="card-header-text">
                                            Collaboration has never
                                            been easier.
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Our collaboration engine instantly updates team members and enables real
                                            time collaboration on your data science files.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Body>
                    </ContentPane>
                </ContentSection>

                <ContentSection graphite>
                    <ContentPane half center-vertically>
                        <Title>
                            Guided Data Science
                        </Title>
                        <Body>
                        <p>
                            Guided data science refers to services used by business analysts and data scientists to
                            enhance their productivity while exploring data, building machine and deep learning models
                            and creating visualizations.
                        </p>
                        <p>
                            3Blades' data scientists love to eat their own dog food! We
                            have created a fantastic recommendation engine to help users clean and normalize data,
                            compare machine and deep learning algorithms, optimize hyperparameters and select the best
                            visualizations to tell their story.
                        </p>
                        </Body>
                    </ContentPane>
                    <ContentPane half center-vertically>
                        <Body>
                        <Graphic image="https://3bladesio-eegzahisvr.now.sh/static/images/hero-graphic.png"/>
                        </Body>
                    </ContentPane>
                </ContentSection>

                <ContentSection>
                    <ContentPane half center-vertically>

                        <Body>
                        <Graphic image="https://3bladesio-eegzahisvr.now.sh/static/images/hero-graphic.png"/>
                        </Body>
                    </ContentPane>
                    <ContentPane half center-vertically>
                        <Title>
                            Manage Jupyter Notebooks
                        </Title>
                        <Body>
                        <p>
                            Data science teams often use Jupyter Notebooks for exploratory data analysis, model
                            development and creating visualizations. 3Blades makes it easy to use custom Jupyter
                            Notebook setups by supporting launch scripts and by using images from local or remote
                            container registries.
                        </p>
                        </Body>
                    </ContentPane>
                </ContentSection>

                <ContentSection>
                    <ContentPane half center-vertically>
                        <Title>
                            Publish Trained Models as RESTful Endpoints
                        </Title>
                        <Body>
                        <p>
                            Publish trained machine learning and deep learning models as RESTful endpoints or long
                            running services. 3Blades' innovative solutions allow data science teams to publish their
                            own models in their native languages, regardless of the framework used. In addition to
                            supporting common machine learning frameworks such as Python sklearn, R caret, and Matlab,
                            3Blades also offers support for deep learning frameworks such as TensorFlow, MXNet, Lasagne,
                            Caffe, among others.
                        </p>
                        </Body>
                    </ContentPane>
                    <ContentPane half center-vertically>
                        <Body>
                        <Graphic image="https://3bladesio-eegzahisvr.now.sh/static/images/hero-graphic.png"/>
                        </Body>
                    </ContentPane>
                </ContentSection>


                <ContentSection gold-gradient>
                    <ContentPane full center center-vertically>
                        <Title>
                            Bring Your Own Node (BYON)
                        </Title>
                        <Body>
                        <p>
                            3Blades customers have expressed the desire to use 3Blades services but maintain running
                            models within their private networks. We listened! Customers can now add their own servers
                            to 3Blades orchestration engine and deploy Jupyter Notebooks and trained models to their own
                            servers with a few simple commands.
                        </p>
                        </Body>
                    </ContentPane>
                </ContentSection>

                <ContentSection>
                    <ContentPane half center-vertically>
                        <Title>
                            Share visualizations
                        </Title>
                        <Body>
                        <p>
                            Share your data story with compelling visualizations. Great visualizations are an excellent
                            way to trigger new questions, which enhances your project's value. 3Blades data scientists
                            have built amazing visualization recommendations based on years of experience and countless
                            iterations.
                        </p>
                        </Body>
                    </ContentPane>
                    <ContentPane half center-vertically>
                        <Body>
                        <Graphic image="https://3bladesio-eegzahisvr.now.sh/static/images/hero-graphic.png"/>
                        </Body>
                    </ContentPane>
                </ContentSection>

                <ContentSection>
                    <ContentPane half center-vertically>
                        <Body>
                        <Graphic image="https://3bladesio-eegzahisvr.now.sh/static/images/hero-graphic.png"/>
                        </Body>
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
    }

}