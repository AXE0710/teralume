'use server'

import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable')
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { message: 'Please fill in all fields.' }
  }

  try {
    await resend.emails.send({
      from: 'terralume@resend.dev',
      to: 'info@terralumeliving.com',
      reply_to: email,
      subject: `New message from ${name} via Terralume Living`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
    return { message: 'success' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { message: 'Error sending message. Please try again later.' }
  }
}