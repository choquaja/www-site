import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // static getInitialProps ({ renderPage }) {
  //   const {html, head} = renderPage()
  //   const styles = flush()
  //   return { html, head, styles }
  // }

  render () {
		const sheet = new ServerStyleSheet()
		const main = sheet.collectStyles(<Main />)
		const styleTags = sheet.getStyleElement()

    return (
     <html>
       <Head>
         {styleTags}
       </Head>
       <body className="root">
         {main}
       </body>
       <NextScript />
     </html>
    )
  }
}
