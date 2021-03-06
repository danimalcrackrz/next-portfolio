import React, { Suspense, useRef } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import Avatar from "../public/images/me.jpeg"
import Loading from "./Loading"
import About from "./About"

const Main = () => {
  const scrollBottom = useRef()
  const Cloud = dynamic(() => import("./Cloud"))
  return (
    <div className='main'>
      <Suspense fallback={<Loading />}>
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className='main-cloud'
        >
          <Cloud />
        </motion.div>
      </Suspense>
      <motion.p
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className='main-intro'
      >
        Hello, I&apos;m Daniel, a web developer based in Austin, Tx
      </motion.p>
      <motion.p
        initial={{ opacity: 0.5, y: "-20%" }}
        animate={{ opacity: 1, y: "5%" }}
        transition={{ duration: 1, repeatType: "mirror", repeat: "Infinity" }}
        className='main-arrow-icon'
      >
        <IoIosArrowDown
          onClick={() => {
            scrollBottom.current.scrollIntoView({ behavior: "smooth" })
          }}
        />
      </motion.p>
      <div className='main-header'>
        <div>
          <h2>Daniel Shaw</h2>
          <p>
            Front-End Developer <span className='main-header-decorator'>|</span>{" "}
            Freelancer <span className='main-header-decorator'>|</span> Designer
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
      <div className='main-content' ref={scrollBottom}>
        <About />
      </div>
    </div>
  )
}

export default Main
