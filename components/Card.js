import React, { useState } from "react"
import Image from "next/image"

const Card = ({ image, title, github, demo }) => {
  const [hovered, setHover] = useState(false)
  return (
    <div
      className='portfolio-card'
      onMouseEnter={() => setHover(!hovered)}
      onMouseLeave={() => setHover(!hovered)}
    >
      <div className='portfolio-card-info'>
        <h3 className='portfolio-card-title'>{title}</h3>
        <div className='portfolio-image-container'>
          <Image
            className='portfolio-image'
            src={image}
            alt='portfolio-image'
            layout='responsive'
            width={16}
            height={9}
            objectFit='cover'
          />
        </div>
        <ul className='portfolio-links'>
          <li>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              Source
            </a>
          </li>
          <li>
            <a href={demo} target='_blank' rel='noopener noreferrer'>
              Demo
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
