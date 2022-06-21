import React from "react"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"

const About = () => {
  return (
    <div className='about'>
      <h2 className='about-title'>About</h2>
      <p>
        Since I was 16, I&apos;ve had a passion for building digital
        products/anything I want. I <FaHeart className='about-icon' /> to solve
        complex problems, and to create meaningful{" "}
        <span className='about-decorator'>&&</span> memorable solutions. When
        not in front of my computer you can usually find me in a huge pile of
        Legos, with a cup of coffee or tea nearby. Well-Organized,
        problem-solver, <span className='about-decorator'>&&</span> driven with
        high attention to detail. Big fan of Bob&apos;s Burgers, String Theory,
        and Black Holes.
      </p>
      <Link href='/portfolio'>
        <a className='about-btn'>Take a look at my work.</a>
      </Link>
    </div>
  )
}

export default About
