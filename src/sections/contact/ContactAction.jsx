import { useEffect, useRef, useState } from 'react'
import { CheckIcon, CopyIcon, SendIcon, WhatsAppIcon } from '@/components/icons'
import { profile } from '@/data'
import { useIsPhone } from '@/hooks/useIsPhone'

const COPIED_MS = 2000

// Copy with the Clipboard API, falling back to a hidden textarea where it isn't available (e.g. http pages).
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const field = document.createElement('textarea')
    field.value = text
    field.setAttribute('readonly', '')
    field.style.cssText = 'position:fixed;opacity:0'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    field.remove()
    return ok
  }
}

/**
 * The contact form is switched off for now (it is in git history). "Send message" opens the visitor's
 * mail app addressed to me, and then a note shows the address with an icon-only copy button.
 */
export default function ContactAction() {
  const [opened, setOpened] = useState(false)
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  const isPhone = useIsPhone()
  // wa.me wants the number as digits only, with the country code and no '+'.
  const whatsappHref = `https://wa.me/${profile.phone.replace(/\D/g, '')}`

  useEffect(() => () => clearTimeout(timer.current), [])

  const onCopy = async () => {
    if (!(await copyText(profile.email))) return
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), COPIED_MS)
  }

  return (
    <div className="contact-action">
      <div className="contact-buttons">
        <a
          className="pill solid send-btn"
          href={`mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry')}`}
          onClick={() => setOpened(true)}
        >
          Send message<SendIcon />
        </a>
        {/* WhatsApp is a phone thing, so the button only shows on phones. */}
        {isPhone && (
          <a className="pill accent send-btn" href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />WhatsApp me
          </a>
        )}
      </div>

      {opened && (
        <p className="form-note">
          Opening your email app. If nothing opens, write to{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <button
            type="button"
            className="round copy-btn"
            onClick={onCopy}
            aria-label={copied ? 'Email address copied' : 'Copy email address'}
            title={copied ? 'Copied' : 'Copy email address'}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
          <span className="sr-only" role="status">{copied ? 'Email address copied to clipboard' : ''}</span>
        </p>
      )}
    </div>
  )
}
