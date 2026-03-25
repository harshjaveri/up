# Upendra Publicity - UI/UX Portfolio Website

A modern, responsive, and highly interactive portfolio website designed to showcase UI/UX design projects, developed with cutting-edge web technologies to deliver a premium user experience.

## ✨ Features

- **Dark Theme Aesthetics:** Sleek, modern dark mode design with glassmorphism effects.
- **Smooth Scrolling:** Powered by [Lenis](https://github.com/studio-freight/lenis) for a fluid, natural scroll experience.
- **High-Performance Animations:** Complex scroll-linked animations and page transitions using [GSAP](https://gsap.com/) and [Framer Motion](https://www.framer.com/motion/).
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile viewing using [Tailwind CSS](https://tailwindcss.com/).
- **Modern Architecture:** Built on top of [Next.js 15](https://nextjs.org/) (App Router) and [React 18](https://react.dev/).
- **Interactive Elements:** Custom cursors, floating action buttons (WhatsApp integration), and dynamic video scrubbing backgrounds.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.0.3](https://nextjs.org/) (App Router, TypeScript)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations:** 
  - [GSAP 3.12](https://gsap.com/)
  - [Framer Motion 11](https://www.framer.com/motion/)
- **Scroll Hijacking:** [@studio-freight/lenis 1.0.42](https://github.com/studio-freight/lenis)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harshjaveri/up.git
   cd upendra-publicity
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

- `/app` - Next.js App Router pages (Home, About, Services, Media, Contact) and global layouts.
- `/components` - Reusable UI components (Navbar, Footer, CustomCursor, LenisProvider, WhatsAppFloat, etc.).
- `/hooks` - Custom React hooks for animations (`useScrollReveal.ts`).
- `/public` - Static assets including images, logos, and videos.

## 📜 License

This project is proprietary and confidential. All rights reserved.
