import type { ContactFormData, ContactFormErrors } from '@/types'

// ── Validation Helpers ──
export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export const isValidPhone = (phone: string): boolean =>
  /^[\d\s+\-()]{7,15}$/.test(phone.trim())

/** Strip HTML angle brackets to prevent XSS */
export const sanitizeString = (str: string): string =>
  str.replace(/[<>]/g, '').trim()

// ── Form Validation ──
export function validateContactForm(
  form: ContactFormData
): { valid: boolean; errors: ContactFormErrors } {
  const errors: ContactFormErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone is required'
  } else if (!isValidPhone(form.phone)) {
    errors.phone = 'Enter a valid phone number'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (form.message.length > 2000) {
    errors.message = 'Message must be under 2000 characters'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

/** Sanitize all form fields */
export function sanitizeContactForm(form: ContactFormData): ContactFormData {
  return {
    name: sanitizeString(form.name),
    company: sanitizeString(form.company),
    phone: sanitizeString(form.phone),
    email: sanitizeString(form.email),
    service: sanitizeString(form.service),
    message: sanitizeString(form.message),
  }
}
