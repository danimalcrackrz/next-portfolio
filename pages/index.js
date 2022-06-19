import Head from "next/head"
import Nav from "../components/Nav"

export default function Home() {
  return (
    <div className='app'>
      <Head>
        <title>Daniel | Front-End Developer</title>
      </Head>
      <Nav />
    </div>
  )
}
