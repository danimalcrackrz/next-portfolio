import React from "react"
import { Cloud } from "react-icon-cloud"

const IconCloud = () => {
  const languages = [
    "JavaScript",
    "ReactJs",
    "NodeJs",
    "ExpressJs",
    "NextJs",
    "MongoDB",
    "PostgresSQL",
    "MySQL",
    "Tailwindcss",
    "MaterialUI",
    "Recoil",
    "Zustand",
    "Redux",
    "Python",
  ]

  return (
    <Cloud
      options={{
        clickToFront: 500,
        depth: 1,
        pinchZoom: false,
        wheelZoom: false,
        fadeIn: 500,
        outlineMethod: "none",
        initial: [0.1, -0.1],
        textHeight: 25,
      }}
    >
      {languages.map((item, id) => (
        <a
          key={id}
          href='undefined'
          style={{
            color: "#18fdd8",
            fontFamily: "futura",
          }}
          onClick={(e) => e.preventDefault()}
        >
          {item}
        </a>
      ))}
    </Cloud>
  )
}

export default IconCloud
