import Head from 'next/head'
import Header from '../header/header';
import Footer from '../footer/footer';
import NProgress from 'nprogress'
import Router from 'next/router'
import Typekit from 'react-typekit';

import inView from 'in-view';

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

            inView.offset(20);
            inView('.hidden').on('enter', el => {
                el.classList.add("in-view-enter");
                el.classList.remove("in-view-exit");

            }).on('exit', el => {
                el.classList.remove("in-view-enter");
                el.classList.add("in-view-exit");

            });
            document.body.classList.remove('no-scroll');

        };
        Router.onRouteChangeError = () => NProgress.done()
    }

    componentDidMount() {
        inView.offset(20);
        inView('.hidden').on('enter', el => {
            el.classList.add("in-view-enter");
            el.classList.remove("in-view-exit");

        }).on('exit', el => {
            el.classList.remove("in-view-enter");
            el.classList.add("in-view-exit");

        });
    }


    render() {

        return (
            <div className="Layout">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <Head>
                    <title>{ '3Blades: ' + this.props.meta.title }</title>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
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
