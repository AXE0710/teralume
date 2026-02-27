'use server'

import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'

if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
  throw new Error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variable')
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "aayushkewat0710@gmail.com",
    pass: "dufe vdmi oywc xjiy",
    
  },
})

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { message: 'Please fill in all fields.' }
  }

  try {
    await transporter.sendMail({
      from: "aayushkewat0710@gmail.com",
      to: 'info@terralumeliving.com',
      replyTo: email,
      subject: `New message from ${name} via Terralume Living`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
    return { message: 'success' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { message: 'Error sending message. Please try again later.' }
  }
}