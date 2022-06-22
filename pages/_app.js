import Layout from "../components/Layout"
import "../styles/globals.css"
import "../styles/Nav.scss"
import "../styles/Main.scss"
import "../styles/About.scss"
import "../styles/Portfolio.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
