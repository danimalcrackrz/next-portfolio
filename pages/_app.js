import Layout from "../components/Layout"
import { AnimatePresence } from "framer-motion"
import "../styles/globals.css"
import "../styles/Nav.scss"
import "../styles/Main.scss"
import "../styles/About.scss"
import "../styles/Portfolio.scss"
import "../styles/Form.scss"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}

export default MyApp
