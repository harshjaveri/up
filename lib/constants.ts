// ── Contact & Company Constants ──
// All values backed by environment variables with sensible defaults.
// Set NEXT_PUBLIC_* variables in .env.local (dev) or your deployment dashboard (prod).

export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ''
export const PHONE_NUMBER   = process.env.NEXT_PUBLIC_PHONE_NUMBER   || '+91 XXXXX XXXXX'
export const PHONE_HREF     = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`
export const EMAIL          = process.env.NEXT_PUBLIC_EMAIL           || 'info@upendrapublicity.com'
export const ADDRESS        = 'Chhatrapati Sambhajinagar, Maharashtra – 431001'
export const COMPANY_NAME   = 'Upendra Publicity'
export const COMPANY_TAGLINE = 'Est. 1965'

// WhatsApp pre-filled message
export const WHATSAPP_URL = WHATSAPP_PHONE
  ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hello, I'm interested in outdoor advertising with Upendra Publicity.")}`
  : ''

// Google Maps embed URL
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120000!2d75.3236!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba305720a5c07%3A0xe5b604701cf22c6!2sChhatrapati%20Sambhajinagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
