import { useState } from 'react'
import { SendIcon } from '@/components/icons'
import { profile } from '@/data'

/** There is no backend, so submitting opens the visitor's email app with the message filled in. */
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${form.get('message')}\n\n${name} (${form.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label className="field"><span>Name</span><input name="name" required autoComplete="name" placeholder="Jane Doe" /></label>
        <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="jane@example.com" /></label>
      </div>
      <label className="field"><span>Message</span><textarea name="message" rows="4" required placeholder="Tell me about your project" /></label>
      <button type="submit" className="pill solid send-btn">Send message<SendIcon /></button>
      {sent && (
        <p className="form-note" role="status">
          Opening your email app. If nothing opens, write to <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      )}
    </form>
  )
}
