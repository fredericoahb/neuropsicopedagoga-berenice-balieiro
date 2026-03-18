import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Berenice Balieiro — Neuropsicopedagoga Clínica | Avaliação e Reabilitação Cognitiva',
  description: 'Avaliação neuropsicopedagógica e reabilitação cognitiva para crianças, adultos e idosos. Especialista em TDAH, funções executivas, dificuldades de aprendizagem e declínio cognitivo.',
  keywords: 'neuropsicopedagoga, avaliação neuropsicopedagógica, TDAH, dificuldade de aprendizagem, reabilitação cognitiva, funções executivas, declínio cognitivo, idosos, adultos',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Berenice Balieiro — Neuropsicopedagoga Clínica',
    description: 'Avaliação e reabilitação cognitiva para crianças, adultos e idosos. Baseada em neurociência e evidência.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
