import React, { useRef } from "react"
import emailjs from "emailjs-com"

const Form = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_jzkzqjo",
        "template_x33e1n7",
        form.current,
        "QV7-9vvdYO_oabMbl"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea
          name='message'
          rows='7'
          placeholder='Message'
          required
        ></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default Form
