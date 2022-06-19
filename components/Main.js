import React from "react"
import Image from "next/image"
import Avatar from "../public/assets/me.jpeg"

const Main = () => {
  return (
    <div className='main'>
      <p className='main-intro'>
        Hello, I&apos;m a web developer based in Austin Tx
      </p>
      <div className='main-header'>
        <div>
          <h2>Daniel Shaw</h2>
          <p>Front-End Developer | Freelancer</p>
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
    </div>
  )
}

export default Main
