import React from "react"
import { motion } from "framer-motion"
import Form from "../components/Form"

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className='contact-page'
    >
      <Form />
    </motion.div>
  )
}

export default contact
