import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Berenice Balieiro — Neuropsicopedagoga Clínica',
  description: 'Avaliação neuropsicopedagógica e reabilitação cognitiva para crianças. Especialista em neurociência do comportamento e funções executivas.',
  keywords: 'neuropsicopedagoga, avaliação neuropsicopedagógica, TDAH, dificuldade de aprendizagem, reabilitação cognitiva, funções executivas',
  openGraph: {
    title: 'Berenice Balieiro — Neuropsicopedagoga Clínica',
    description: 'Avaliação neuropsicopedagógica e reabilitação cognitiva para crianças.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
