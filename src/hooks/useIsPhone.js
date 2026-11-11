import { useState } from 'react'

/**
 * True when the visitor is on a phone. This looks at the device, not the window width,
 * so a narrow desktop browser or a tablet is not treated as a phone.
 * Uses the User-Agent Client Hints flag where available, otherwise the user agent string.
 */
function detectPhone() {
  if (typeof navigator === 'undefined') return false
  const hinted = navigator.userAgentData?.mobile
  if (typeof hinted === 'boolean') return hinted
  return /iPhone|iPod|Android.+Mobile|Windows Phone|IEMobile|BlackBerry|Opera Mini/i.test(navigator.userAgent)
}

export function useIsPhone() {
  // The device does not change while the page is open, so detect once.
  const [isPhone] = useState(detectPhone)
  return isPhone
}
