import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import { DiGithubFull } from "react-icons/di"
import { SiReact } from "react-icons/si"
import { CgHomeAlt } from "react-icons/cg"

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className='nav'
    >
      <a className='nav-header'>
        <span className='nav-logo'>
          <SiReact />
        </span>
        <p className='nav-title'>Daniel Shaw</p>
      </a>
      <ul className='nav-links'>
        <Link href='/'>
          <CgHomeAlt className='home-icon' />
        </Link>
        <Link href='/portfolio'>Projects</Link>
        <Link href='/Contact'>Contact</Link>
        <Link href='/Source'>
          <a
            className='github-icon'
            href='https://github.com/danimalcrackrz'
            target='_blank'
            rel='noreferrer'
          >
            <DiGithubFull />
          </a>
        </Link>
      </ul>
    </motion.div>
  )
}

export default Nav
