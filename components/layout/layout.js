import Head from 'next/head'
import Header from '../header/header'
import Footer from '../footer/footer'
import Router from 'next/router'
import Typekit from 'react-typekit'
import styles from './layout.styles.scss'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') ReactGA.initialize('UA-63775134-5')

const logPageView = () => {
  if (typeof window !== 'undefined') {
    console.log('logPageView', window.location.pathname, window.location.search)
    ReactGA.set({ page: window.location.pathname + window.location.search })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}

export default class Layout extends React.Component {
  state = {
    loading: false,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    logPageView()
    Router.onRouteChangeComplete = () => {
      logPageView()
    }
  }

  render() {
    return (
      <div className="Layout">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Head>
          <meta charSet="utf-8" />
          <title>{'3Blades: ' + this.props.meta.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta itemprop="description" content={this.props.meta.description} />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/normalize.css"
          />
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3428528.js"></script>
          <Typekit kitId="mqy5yqb" />
        </Head>
        <Header {...this.props} />
        <main className="page">
          <div className="page-wrapper">
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
