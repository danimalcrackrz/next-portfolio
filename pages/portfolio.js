import React from "react"
import Card from "../components/Card"

export async function getStaticProps() {
  const res = await import("./db.json")
  return {
    props: {
      projects: res.projects,
    },
  }
}

const portfolio = ({ projects }) => {
  return (
    <div className='portfolio'>
      {projects.map((project, id) => (
        <Card key={id} {...project} />
      ))}
    </div>
  )
}

export default portfolio
