/**
 * India map behind the contact form, with a bouncing, spinning pin on Bangalore.
 * The map image and the pin are two layers with identical geometry. The pin sits above the
 * form so hover and keyboard focus always reach it. Pin position: see `.map-pin` in contact.css.
 */
export default function ContactMap() {
  return (
    <>
      <div className="map-box" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}assets/images/india-map.svg`} alt="" />
      </div>
      <div className="map-box map-layer">
        <span className="map-pin" tabIndex={0} role="img" aria-label="Bangalore, India">
          <span className="pin-bounce">
            <svg className="pin-svg" viewBox="0 0 24 32" aria-hidden="true">
              <path d="M12 .75C5.7.75.75 5.7.75 11.9.75 20 12 31.25 12 31.25S23.25 20 23.25 11.9C23.25 5.7 18.3.75 12 .75Z" fill="#4ade80" stroke="#0b3d1f" strokeWidth="1.5" />
              <circle cx="12" cy="11.8" r="4.2" fill="#0b3d1f" />
            </svg>
          </span>
          <span className="pin-ground" aria-hidden="true" />
          <span className="pin-tip" aria-hidden="true">Bangalore, India</span>
        </span>
      </div>
    </>
  )
}
