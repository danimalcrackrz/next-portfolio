import Link from "next/link"
import React from "react"
import { DiGithubFull } from "react-icons/di"
import { SiReact } from "react-icons/si"
import { CgHomeAlt } from "react-icons/cg"

const Nav = () => {
  return (
    <div className='nav'>
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
    </div>
  )
}

export default Nav
