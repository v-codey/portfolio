import { useEffect } from 'react'
import { RESUME_FILENAME, RESUME_URL } from '@/config/site'
import { profile } from '@/data'

export default function ResumePage() {
  useEffect(() => {
    const previous = document.title
    document.title = `Resume | ${profile.name}`
    return () => { document.title = previous }
  }, [])

  return (
    <section className="resume-page" aria-labelledby="resume-h">
      <div className="resume-head">
        <div>
          <h1 id="resume-h" className="resume-title">Resume</h1>
          <p className="sub">{profile.name}, {profile.role}</p>
        </div>
        <div className="resume-actions">
          <a className="pill" href={RESUME_URL} target="_blank" rel="noreferrer">Open in new tab</a>
          <a className="pill solid" href={RESUME_URL} download={RESUME_FILENAME}>Download PDF</a>
        </div>
      </div>
      <iframe className="resume-frame" src={RESUME_URL} title={`${profile.name} resume (PDF)`} />
      <p className="sec-sub resume-note">
        Can't see the preview? <a href={RESUME_URL} target="_blank" rel="noreferrer">Open the PDF in a new tab</a>.
      </p>
    </section>
  )
}
