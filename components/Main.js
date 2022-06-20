import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Avatar from "../public/assets/me.jpeg"
import Loading from "./Loading"
import About from "./About"

const Main = () => {
  const Cloud = dynamic(() => import("./Cloud"))
  return (
    <div className='main'>
      <Suspense fallback={<Loading />}>
        <div className='main-cloud'>
          <Cloud />
        </div>
      </Suspense>
      <p className='main-intro'>
        Hello, I&apos;m Daniel, a web developer based in Austin, Tx
      </p>
      <div className='main-header'>
        <div>
          <h2>Daniel Shaw</h2>
          <p>
            Front-End Developer <span className='main-header-decorator'>|</span>{" "}
            Freelancer
          </p>
        </div>
        <span className='main-avatar-border'>
          <Image
            className='main-avatar'
            src={Avatar}
            alt='picture of author'
            height={100}
            width={100}
          />
        </span>
      </div>
      <div className='main-content'>
        <About />
      </div>
    </div>
  )
}

export default Main
