import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData, ApiResponse } from '@/types'
import { validateContactForm, sanitizeContactForm } from '@/lib/validation'

// ── In-memory rate limiter ──
// Key: IP address → Array of timestamps
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000  // 1 hour
const RATE_LIMIT_MAX = 5                       // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  // Remove entries older than the window
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS)
  rateLimitMap.set(ip, recent)

  if (recent.length >= RATE_LIMIT_MAX) {
    return true
  }
  recent.push(now)
  rateLimitMap.set(ip, recent)
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || request.headers.get('x-real-ip')
      || 'unknown'

    if (isRateLimited(ip)) {
      const response: ApiResponse = {
        success: false,
        message: 'Too many requests. Please try again later.',
      }
      return NextResponse.json(response, { status: 429 })
    }

    // Parse body
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      const response: ApiResponse = {
        success: false,
        message: 'Invalid request body.',
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Build form data with defaults for missing fields
    const formData: ContactFormData = {
      name: String(body.name || ''),
      company: String(body.company || ''),
      phone: String(body.phone || ''),
      email: String(body.email || ''),
      service: String(body.service || ''),
      message: String(body.message || ''),
    }

    // Sanitize
    const sanitized = sanitizeContactForm(formData)

    // Validate
    const { valid, errors } = validateContactForm(sanitized)
    if (!valid) {
      const response: ApiResponse = {
        success: false,
        message: 'Validation failed. Please check your input.',
        errors,
      }
      return NextResponse.json(response, { status: 422 })
    }

    // ── Process the submission ──
    // TODO: Replace with real email service (SendGrid, Nodemailer, etc.)
    // TODO: Replace with real database storage (Prisma, etc.)
    console.log('[Contact Submission]', {
      timestamp: new Date().toISOString(),
      ip,
      data: sanitized,
    })

    const response: ApiResponse = {
      success: true,
      message: 'Message received. We will get back to you within 24 hours.',
    }
    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('[Contact API Error]', error)
    const response: ApiResponse = {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    }
    return NextResponse.json(response, { status: 500 })
  }
}
