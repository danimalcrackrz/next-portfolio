import React from "react"
import { motion } from "framer-motion"
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className='portfolio'
    >
      {projects.map((project, id) => (
        <Card key={id} {...project} />
      ))}
    </motion.div>
  )
}

export default portfolio
