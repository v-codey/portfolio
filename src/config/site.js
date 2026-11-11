// Site-wide settings. Change values here, not in components.

// Where the resume PDF is loaded from.
//
// Static (default): the file in /public, served from this site.
// Dynamic: paste a public link instead, for example
//   Google Drive: https://drive.google.com/file/d/<FILE_ID>/preview
//   AWS S3:       https://<bucket>.s3.<region>.amazonaws.com/Vinay_Kumar_Developer.pdf
// Drive files must be shared as "Anyone with the link". S3 objects need public read
// access, and the bucket's CORS and response headers must not block embedding.
export const RESUME_URL = 'https://public-v-code.s3.eu-north-1.amazonaws.com/vinay-kumar-04a26cc.pdf'
export const RESUME_FILENAME = 'Vinay_Kumar_Software_Developer.pdf'

// How often the closing quote changes.
export const QUOTE_INTERVAL_MS = 2 * 60 * 1000
