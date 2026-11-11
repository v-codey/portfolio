import { profile } from '@/data'

export default function Banner() {
  return (
    <div className="banner">
      <img src={`${import.meta.env.BASE_URL}banner.jpg`} alt="" width="3840" height="2160" decoding="async" />
      <p className="quote">{profile.quote}</p>
    </div>
  )
}
