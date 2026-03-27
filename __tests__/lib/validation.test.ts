import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidPhone,
  sanitizeString,
  validateContactForm,
  sanitizeContactForm,
} from '@/lib/validation'

// ── isValidEmail ──────────────────────────────────────────
describe('isValidEmail', () => {
  it('accepts a standard email', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
  })
  it('accepts email with subdomain', () => {
    expect(isValidEmail('user@mail.example.co.uk')).toBe(true)
  })
  it('rejects email missing @', () => {
    expect(isValidEmail('userexample.com')).toBe(false)
  })
  it('rejects email missing domain', () => {
    expect(isValidEmail('user@')).toBe(false)
  })
  it('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })
})

// ── isValidPhone ──────────────────────────────────────────
describe('isValidPhone', () => {
  it('accepts a 10-digit Indian number', () => {
    expect(isValidPhone('9876543210')).toBe(true)
  })
  it('accepts number with country code', () => {
    expect(isValidPhone('+91 98765 43210')).toBe(true)
  })
  it('accepts formatted number with dashes', () => {
    expect(isValidPhone('+91-98765-43210')).toBe(true)
  })
  it('rejects a 5-digit number (too short)', () => {
    expect(isValidPhone('12345')).toBe(false)
  })
  it('rejects alphabetic input', () => {
    expect(isValidPhone('abcdefghij')).toBe(false)
  })
})

// ── sanitizeString ────────────────────────────────────────
describe('sanitizeString', () => {
  it('strips HTML tags', () => {
    expect(sanitizeString('<script>alert(1)</script>')).toBe('scriptalert(1)/script')
  })
  it('trims whitespace', () => {
    expect(sanitizeString('  hello  ')).toBe('hello')
  })
  it('leaves normal text unchanged', () => {
    expect(sanitizeString('Hello World')).toBe('Hello World')
  })
})

// ── validateContactForm ───────────────────────────────────
describe('validateContactForm', () => {
  const validForm = {
    name: 'Ajay Sharma',
    company: 'Acme Corp',
    phone: '9876543210',
    email: 'ajay@example.com',
    service: 'Hoardings',
    message: 'I am interested in your services.',
  }

  it('passes a fully valid form', () => {
    const { valid, errors } = validateContactForm(validForm)
    expect(valid).toBe(true)
    expect(errors).toEqual({})
  })

  it('fails when name is empty', () => {
    const { valid, errors } = validateContactForm({ ...validForm, name: '' })
    expect(valid).toBe(false)
    expect(errors.name).toBeDefined()
  })

  it('fails when name is too short', () => {
    const { valid, errors } = validateContactForm({ ...validForm, name: 'A' })
    expect(valid).toBe(false)
    expect(errors.name).toBeDefined()
  })

  it('fails when phone is empty', () => {
    const { valid, errors } = validateContactForm({ ...validForm, phone: '' })
    expect(valid).toBe(false)
    expect(errors.phone).toBeDefined()
  })

  it('fails when phone is invalid', () => {
    const { valid, errors } = validateContactForm({ ...validForm, phone: 'abc' })
    expect(valid).toBe(false)
    expect(errors.phone).toBeDefined()
  })

  it('fails when email is empty', () => {
    const { valid, errors } = validateContactForm({ ...validForm, email: '' })
    expect(valid).toBe(false)
    expect(errors.email).toBeDefined()
  })

  it('fails when email is invalid', () => {
    const { valid, errors } = validateContactForm({ ...validForm, email: 'not-an-email' })
    expect(valid).toBe(false)
    expect(errors.email).toBeDefined()
  })

  it('fails when message exceeds 2000 characters', () => {
    const { valid, errors } = validateContactForm({ ...validForm, message: 'x'.repeat(2001) })
    expect(valid).toBe(false)
    expect(errors.message).toBeDefined()
  })
})

// ── sanitizeContactForm ───────────────────────────────────
describe('sanitizeContactForm', () => {
  it('sanitizes all fields', () => {
    const dirty = {
      name: '  <b>John</b>  ',
      company: '<Company>',
      phone: ' 9876543210 ',
      email: ' john@example.com ',
      service: '<script>',
      message: '  Hello  ',
    }
    const clean = sanitizeContactForm(dirty)
    expect(clean.name).toBe('bJohn/b')
    expect(clean.company).toBe('Company')
    expect(clean.service).toBe('script')
    expect(clean.message).toBe('Hello')
  })
})
