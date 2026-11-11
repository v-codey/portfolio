import { ArrowUpRightIcon } from '@/components/icons'
import { certifications } from '@/data'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })

export default function CertificationsSection() {
  return (
    <section className="sec reveal" id="certifications" aria-labelledby="cert-h">
      <h2 id="cert-h">Certifications</h2>
      <ul className="xp-list">
        {certifications.map((cert) => (
          <li className="xp" key={cert.href}>
            <div className="xp-head">
              <span className="mark" aria-hidden="true" >
                {cert.markType === "image" ? (
                    <img src={cert.mark} alt="" />
                  ) : (
                    cert.mark
                  )}
              </span>
              <div className="xp-text">
                <h3>{cert.name}</h3>
                <p className="sub">{cert.issuer}, <time dateTime={cert.date}>{formatDate(cert.date)}</time></p>
              </div>
              <a
                className="round"
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View the ${cert.name} certificate on ${cert.issuer} (opens in a new tab)`}
                title="View certificate"
              >
                <ArrowUpRightIcon />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
