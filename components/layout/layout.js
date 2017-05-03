import Head from 'next/head'
import Header from '../header/header';
import Footer from '../footer/footer';
import NProgress from 'nprogress'
import Router from 'next/router'
import Typekit from 'react-typekit';


import styles from './layout.styles.scss';


export default class Layout extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };


    }

    componentWillMount() {
        Router.onRouteChangeStart = (url) => {
            console.log(`Loading: ${url}`);
            NProgress.start();
            this.setState({
                loading: true
            });
            document.body.classList.add('loading');
            // document.body.classList.remove('loaded');

        };
        Router.onRouteChangeComplete = () => {
            this.setState({
                loading: false
            });
            console.log(this.state);
            NProgress.done();
            document.body.classList.remove('loading');
            document.body.classList.remove('no-scroll');

        };
        Router.onRouteChangeError = () => NProgress.done()
    }

    componentDidMount() {

    }


    render() {

        return (
            <div className="Layout">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <Head>
                    <meta charSet='utf-8'/>
                    <title>{ '3Blades: ' + this.props.meta.title }</title>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <meta itemprop="description" content={this.props.meta.description}/>
                    <link rel="stylesheet" type="text/css" href="/static/css/normalize.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css"/>

                    <Typekit kitId="mqy5yqb"/>


                </Head>
                <Header {...this.props} />

                <main className="page">
                    <div className="page-wrapper">
                        { this.props.children }
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

}
