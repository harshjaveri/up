import { describe, it, expect } from 'vitest'
import {
  navLinks,
  services,
  stats,
  brands,
  timeline,
  values,
  servicesDetailed,
  processSteps,
  serviceOptions,
  mediaCategories,
  footerServices,
} from '@/lib/data'

describe('lib/data – navLinks', () => {
  it('has at least one link', () => expect(navLinks.length).toBeGreaterThan(0))
  it('every link has href and label', () => {
    navLinks.forEach((l) => {
      expect(l.href).toBeTruthy()
      expect(l.label).toBeTruthy()
    })
  })
})

describe('lib/data – services', () => {
  it('has entries', () => expect(services.length).toBeGreaterThan(0))
  it('every service has icon, title, desc', () => {
    services.forEach((s) => {
      expect(s.icon).toBeTruthy()
      expect(s.title).toBeTruthy()
      expect(s.desc).toBeTruthy()
    })
  })
})

describe('lib/data – stats', () => {
  it('has exactly 4 stats', () => expect(stats.length).toBe(4))
  it('every stat has value, label, icon', () => {
    stats.forEach((s) => {
      expect(s.value).toBeTruthy()
      expect(s.label).toBeTruthy()
      // Lucide icons are forwardRef objects — check truthy not typeof
      expect(s.icon).toBeTruthy()
    })
  })
})

describe('lib/data – brands', () => {
  it('has at least 10 brands', () => expect(brands.length).toBeGreaterThanOrEqual(10))
  it('every brand is a non-empty string', () => {
    brands.forEach((b) => expect(b.length).toBeGreaterThan(0))
  })
})

describe('lib/data – timeline', () => {
  it('has entries', () => expect(timeline.length).toBeGreaterThan(0))
  it('every event has year, title, desc', () => {
    timeline.forEach((e) => {
      expect(e.year).toBeTruthy()
      expect(e.title).toBeTruthy()
      expect(e.desc).toBeTruthy()
    })
  })
})

describe('lib/data – values', () => {
  it('has entries', () => expect(values.length).toBeGreaterThan(0))
  it('every value has icon, title, desc', () => {
    values.forEach((v) => {
      expect(v.icon).toBeTruthy()
      expect(v.title).toBeTruthy()
      expect(v.desc).toBeTruthy()
    })
  })
})

describe('lib/data – servicesDetailed', () => {
  it('has entries', () => expect(servicesDetailed.length).toBeGreaterThan(0))
  it('every service has features array', () => {
    servicesDetailed.forEach((s) => {
      expect(Array.isArray(s.features)).toBe(true)
      expect(s.features.length).toBeGreaterThan(0)
    })
  })
})

describe('lib/data – processSteps', () => {
  it('has entries', () => expect(processSteps.length).toBeGreaterThan(0))
  it('every step has step, title, desc', () => {
    processSteps.forEach((p) => {
      expect(p.step).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.desc).toBeTruthy()
    })
  })
})

describe('lib/data – serviceOptions', () => {
  it('has entries', () => expect(serviceOptions.length).toBeGreaterThan(0))
})

describe('lib/data – mediaCategories', () => {
  it('has entries', () => expect(mediaCategories.length).toBeGreaterThan(0))
  it('every category has photos array', () => {
    mediaCategories.forEach((c) => {
      expect(Array.isArray(c.photos)).toBe(true)
    })
  })
})

describe('lib/data – footerServices', () => {
  it('has entries', () => expect(footerServices.length).toBeGreaterThan(0))
})
