import React from "react"
import { SpinnerInfinity } from "spinners-react"

const Loading = () => {
  return (
    <SpinnerInfinity
      size={90}
      thickness={97}
      speed={100}
      color='#36ad47'
      secondaryColor='rgba(0, 0, 0, 0.44)'
    />
  )
}

export default Loading
