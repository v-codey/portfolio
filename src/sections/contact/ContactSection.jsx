import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

export default function ContactSection() {
  return (
    <section className="sec reveal contact" id="contact" aria-labelledby="c-h">
      <h2 id="c-h">Contact</h2>

      <ContactMap />

      <div className="contact-meta">
        <span className="avail"><span className="dot-green" aria-hidden="true" />Available for new opportunities</span>
      </div>

      <h3 className="contact-title">Let's work together.</h3>
      <p className="contact-sub">Have a project or a role in mind? Tell me about it and I'll get back to you.</p>

      <ContactForm />
    </section>
  )
}
