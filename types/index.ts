import type { LucideIcon } from 'lucide-react'

// ── Navigation ──
export interface NavLink {
  href: string
  label: string
}

// ── Home Page ──
export interface Service {
  icon: string
  title: string
  desc: string
}

export interface ServiceDetailed extends Service {
  tag?: string
  features: string[]
  locations: string
}

export interface Stat {
  value: string
  label: string
  icon: LucideIcon
}

// ── About Page ──
export interface TimelineEvent {
  year: string
  title: string
  desc: string
}

export interface Value {
  icon: string
  title: string
  desc: string
}

// ── Services Page ──
export interface ProcessStep {
  step: string
  title: string
  desc: string
}

// ── Media Page ──
export interface MediaPhoto {
  src: string
  location: string
}

export interface MediaCategory {
  id: string
  icon: string
  title: string
  count: number
  photos: MediaPhoto[]
}

// ── Contact Form ──
export interface ContactFormData {
  name: string
  company: string
  phone: string
  email: string
  service: string
  message: string
}

export interface ContactFormErrors {
  [key: string]: string
}

// ── API Responses ──
export interface ApiResponse<T = undefined> {
  success: boolean
  message: string
  data?: T
  errors?: Record<string, string>
}
