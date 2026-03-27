import nodemailer from 'nodemailer'
import type { ContactFormData } from '@/types'

// Create transporter from environment variables
// Supports Gmail, Outlook, or any SMTP provider
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for port 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const ADMIN_EMAIL   = process.env.ADMIN_EMAIL   || process.env.SMTP_USER || ''
const FROM_ADDRESS  = `"Upendra Publicity Website" <${process.env.SMTP_USER}>`

/**
 * Send a contact form notification to the admin + a confirmation to the client.
 * Throws if the transporter fails — caller should handle gracefully.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter()

  // ── Admin notification ────────────────────────────────────────────────
  await transporter.sendMail({
    from: FROM_ADDRESS,
    to: ADMIN_EMAIL,
    subject: `[New Lead] ${data.name} — ${data.service || 'General Enquiry'}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#00bfff">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#666;width:130px">Name</td><td style="padding:8px 0"><strong>${data.name}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${data.company || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${data.service || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#666;vertical-align:top">Message</td><td style="padding:8px 0">${data.message.replace(/\n/g, '<br />')}</td></tr>
        </table>
      </div>
    `,
  })

  // ── Client confirmation ────────────────────────────────────────────────
  await transporter.sendMail({
    from: FROM_ADDRESS,
    to: data.email,
    subject: 'We received your enquiry — Upendra Publicity',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#00bfff">Thank you, ${data.name}!</h2>
        <p>We have received your enquiry about <strong>${data.service || 'our services'}</strong> and will get back to you within <strong>24 hours</strong>.</p>
        <p style="color:#666">If you need immediate assistance, call us at <a href="tel:+919999999999">${process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 XXXX XXXXXX'}</a>.</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
        <p style="font-size:12px;color:#999">
          Upendra Publicity · Chhatrapati Sambhajinagar, Maharashtra<br />
          This is an automated confirmation. Please do not reply to this email.
        </p>
      </div>
    `,
  })
}
