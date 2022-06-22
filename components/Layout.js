import Head from "next/head"
import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Daniel | Front-End Developer</title>
      </Head>
      <Nav />
      {children}
    </>
  )
}
