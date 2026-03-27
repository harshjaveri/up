import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next'],
    typecheck: { tsconfig: './tsconfig.test.json' },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
  },
})
