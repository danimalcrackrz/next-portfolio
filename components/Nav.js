import Link from "next/link"
import React from "react"
import { DiGithubFull } from "react-icons/di"
import { SiReact } from "react-icons/si"

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
        <Link href='/'>Projects</Link>
        <Link href='/Contact'>Contact</Link>
        <Link href='/Source'>
          <span className='github-icon'>
            <DiGithubFull />
          </span>
        </Link>
      </ul>
    </div>
  )
}

export default Nav
