'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Brain, Eye, Clock, BookOpen, Heart, FolderOpen,
  MessageCircle, CheckCircle2, ChevronDown, Phone,
  Lightbulb, Users, Target, GraduationCap, Shield,
  ArrowRight, Sparkles, Activity
} from 'lucide-react'

/* ───────────────── WHATSAPP CONFIG ───────────────── */
const WHATSAPP_NUMBER = '5500000000000' // trocar pelo número real
const WHATSAPP_MSG = encodeURIComponent('Olá! Gostaria de agendar uma avaliação neuropsicopedagógica.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

/* ───────────────── INTERSECTION OBSERVER HOOK ───────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ───────────────── BRAIN SVG LOGO ───────────────── */
function BrainLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer arc */}
      <path d="M40 160 C40 60, 100 20, 160 60 C180 75, 175 100, 165 120" stroke="#1a2332" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.15"/>
      {/* Brain shape */}
      <path d="M65 140 C50 130, 42 110, 48 92 C52 78, 62 72, 72 70 C70 58, 78 46, 92 44 C100 43, 108 48, 112 55 C118 46, 130 42, 140 48 C150 54, 154 66, 148 78 C158 80, 164 90, 162 102 C160 112, 152 120, 142 124 C144 132, 138 140, 128 142 C118 144, 108 138, 105 130 C100 138, 90 142, 80 138 C72 134, 66 144, 65 140Z"
        fill="#2196F3"/>
      {/* Brain folds */}
      <path d="M80 78 C88 74, 98 78, 102 86 M72 98 C82 92, 96 96, 100 106 M85 118 C92 112, 104 114, 110 122 M120 70 C126 78, 124 90, 118 96 M132 86 C138 94, 134 108, 126 114"
        stroke="#1565C0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* Cerebellum */}
      <ellipse cx="130" cy="145" rx="18" ry="14" fill="#2196F3" opacity="0.85"/>
      <path d="M120 145 C126 140, 134 140, 140 145" stroke="#1565C0" strokeWidth="2" fill="none" opacity="0.4"/>
    </svg>
  )
}

/* ───────────────── SECTION COMPONENTS ───────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <BrainLogo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
          <div className="leading-tight">
            <span className="font-display text-lg text-navy-800 block">Berenice Balieiro</span>
            <span className="text-[11px] text-brand-600 tracking-widest uppercase font-medium">Neuropsicopedagoga</span>
          </div>
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-500/20">
          <Phone className="w-4 h-4" />
          Agendar Avaliação
        </a>
      </div>
    </nav>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="hero-bg noise-overlay relative min-h-screen flex items-center pt-20 wave-divider">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-teal-600 text-sm font-medium bg-teal-50 px-4 py-1.5 rounded-full mb-8 border border-teal-100">
                <Sparkles className="w-4 h-4" />
                Neuropsicopedagogia Clínica
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-navy-800 animate-fade-up delay-100">
              Quando aprender vira um desafio,
              <span className="text-brand-600"> o cérebro precisa de estratégia</span> — não de culpa.
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-up delay-200">
              Muitas crianças enfrentam dificuldades na escola não por falta de inteligência, mas porque alguns processos cognitivos precisam de apoio especializado.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="cta-pulse inline-flex items-center gap-2.5 bg-brand-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30">
                Agendar Avaliação
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#como-funciona"
                className="inline-flex items-center gap-2 text-brand-700 px-6 py-4 rounded-full text-base font-medium hover:bg-brand-50 transition-all border border-brand-200">
                Como funciona
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up delay-400 hidden lg:block">
            {/* Decorative brain illustration */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-brand-200/30 to-teal-200/30 rounded-[3rem] blur-3xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-12 border border-white/80 shadow-xl shadow-brand-500/5">
                <BrainLogo className="w-full max-w-[320px] mx-auto" />
                <div className="absolute -right-4 top-12 bg-white rounded-2xl shadow-lg px-4 py-3 border border-brand-100">
                  <div className="flex items-center gap-2 text-sm">
                    <Activity className="w-5 h-5 text-teal-500" />
                    <span className="text-navy-800 font-medium">Funções Executivas</span>
                  </div>
                </div>
                <div className="absolute -left-4 bottom-16 bg-white rounded-2xl shadow-lg px-4 py-3 border border-teal-100">
                  <div className="flex items-center gap-2 text-sm">
                    <Lightbulb className="w-5 h-5 text-brand-500" />
                    <span className="text-navy-800 font-medium">Avaliação Cognitiva</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce text-brand-400 hidden lg:block">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

/* ── DOR DO PÚBLICO ── */
function PainSection() {
  const { ref, visible } = useInView()
  const pains = [
    { icon: Eye, text: '"Ele é inteligente, mas não presta atenção."' },
    { icon: Brain, text: '"Ela esquece tudo que aprende."' },
    { icon: Clock, text: '"Demora muito para fazer as tarefas."' },
    { icon: Heart, text: '"Fica frustrado quando precisa estudar."' },
    { icon: FolderOpen, text: 'Desorganização e falta de planejamento' },
  ]
  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Você reconhece isso?</span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
            Seu filho é inteligente, mas aprender parece <span className="text-brand-600">muito difícil?</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Talvez você já tenha ouvido frases como essas — e sabe que algo precisa de atenção.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {pains.map((p, i) => (
            <div key={i} className={`card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100 ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-brand-600" />
              </div>
              <p className="text-navy-800 font-medium leading-relaxed">{p.text}</p>
            </div>
          ))}
          <div className={`card-hover bg-gradient-to-br from-brand-50 to-teal-50 rounded-2xl p-6 border border-brand-100 flex items-center ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
            <p className="text-brand-800 text-sm leading-relaxed">
              Essas situações podem estar relacionadas a dificuldades em <strong>funções executivas</strong>, atenção, memória ou processamento cognitivo. Compreender é o primeiro passo para ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── EXPLICAÇÃO CIENTÍFICA ── */
function ScienceSection() {
  const { ref, visible } = useInView()
  const areas = [
    { name: 'Atenção', icon: Eye },
    { name: 'Memória', icon: Brain },
    { name: 'Linguagem', icon: MessageCircle },
    { name: 'Raciocínio', icon: Lightbulb },
    { name: 'Planejamento', icon: Target },
    { name: 'Regulação Emocional', icon: Heart },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Neuropsicopedagogia</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
              O cérebro precisa de <span className="text-brand-600">estratégia</span> para aprender
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              A neuropsicopedagogia clínica investiga a relação entre cérebro, aprendizagem e comportamento. Por meio de avaliação especializada, é possível analisar habilidades cognitivas fundamentais.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              A partir dessa compreensão, são desenvolvidas estratégias personalizadas para apoiar o desenvolvimento da criança.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {areas.map((a, i) => (
              <div key={i} className={`card-hover bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-50 to-teal-50 flex items-center justify-center mx-auto mb-3">
                  <a.icon className="w-5 h-5 text-brand-600" />
                </div>
                <span className="text-sm font-semibold text-navy-800">{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── COMO FUNCIONA ── */
function ProcessSection() {
  const { ref, visible } = useInView()
  const steps = [
    { num: '01', title: 'Entrevista Inicial', desc: 'Conversa com os responsáveis para compreender a história de desenvolvimento e dificuldades atuais.' },
    { num: '02', title: 'Avaliação Cognitiva', desc: 'Sessões de avaliação cognitiva e neuropsicopedagógica com instrumentos especializados.' },
    { num: '03', title: 'Perfil de Aprendizagem', desc: 'Elaboração de um perfil detalhado com base nos resultados da avaliação.' },
    { num: '04', title: 'Plano de Intervenção', desc: 'Construção de um plano personalizado com estratégias baseadas em evidências.' },
    { num: '05', title: 'Orientação para Família e Escola', desc: 'Orientações práticas e aplicáveis para apoiar a criança no cotidiano.' },
  ]
  return (
    <section id="como-funciona" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">O Processo</span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-800 mt-3">
            Como funciona o <span className="text-brand-600">atendimento</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            O processo ocorre em etapas estruturadas, garantindo uma compreensão completa.
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-2">
          {steps.map((s, i) => (
            <div key={i} className={`step-line flex gap-6 ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 120}ms` }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-display text-lg shadow-lg shadow-brand-500/20">
                {s.num}
              </div>
              <div className="pb-8">
                <h3 className="font-display text-xl text-navy-800">{s.title}</h3>
                <p className="text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── DIFERENCIAIS ── */
function DifferentialsSection() {
  const { ref, visible } = useInView()
  const items = [
    { icon: Sparkles, text: 'Abordagem baseada em neurociência' },
    { icon: Target, text: 'Avaliação individualizada' },
    { icon: Brain, text: 'Foco em funções executivas' },
    { icon: Users, text: 'Orientação prática para famílias' },
    { icon: GraduationCap, text: 'Comunicação com escola quando necessário' },
    { icon: Shield, text: 'Integração: cognição, emoção e comportamento' },
  ]
  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
              Atendimento com <span className="text-brand-600">base científica</span> e olhar humano
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              O objetivo é desenvolver autonomia, segurança e estratégias de aprendizagem mais eficientes para cada criança.
            </p>
          </div>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className={`flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100 card-hover ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <span className="text-navy-800 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── SOBRE A PROFISSIONAL ── */
function AboutSection() {
  const { ref, visible } = useInView()
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid lg:grid-cols-5 gap-12 items-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Photo placeholder */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/40 to-teal-200/40 rounded-[2rem] blur-2xl"></div>
              <div className="relative w-72 h-80 rounded-[2rem] bg-gradient-to-br from-brand-100 to-teal-100 flex flex-col items-center justify-center border border-white shadow-xl overflow-hidden">
                {/* Placeholder - trocar por <Image> com a foto real */}
                <BrainLogo className="w-24 h-24 opacity-40" />
                <span className="mt-4 text-brand-600 text-sm font-medium">Foto Profissional</span>
                <span className="text-gray-400 text-xs mt-1">Substituir por imagem real</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest">Sobre</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
              Berenice <span className="text-brand-600">Balieiro</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Neuropsicopedagoga clínica com formação multidisciplinar em neurociência do comportamento, aprendizagem e reabilitação cognitiva.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Seu trabalho é voltado para compreender como o cérebro aprende e desenvolver intervenções baseadas em evidências para apoiar crianças e famílias. Sua abordagem integra conhecimento científico, escuta clínica e orientação prática para o cotidiano.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Neurociência do Comportamento', 'Reabilitação Cognitiva', 'Avaliação Neuropsicopedagógica'].map((tag) => (
                <span key={tag} className="bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-medium border border-brand-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PARA QUEM É INDICADO ── */
function IndicationsSection() {
  const { ref, visible } = useInView()
  const indications = [
    'Crianças com dificuldade de aprendizagem',
    'Suspeita de TDAH',
    'Dificuldade de atenção e memória',
    'Problemas de organização e planejamento',
    'Baixo rendimento escolar',
    'Dificuldades emocionais relacionadas à escola',
  ]
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500 rounded-full blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Indicações</span>
          <h2 className="font-display text-3xl sm:text-4xl mt-3 leading-tight">
            Para quem é <span className="text-brand-400">indicado</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            A avaliação neuropsicopedagógica pode ser indicada para:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {indications.map((item, i) => (
            <div key={i} className={`flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10 ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
              <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span className="text-gray-200 text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA FINAL ── */
function CTASection() {
  const { ref, visible } = useInView()
  return (
    <section className="py-24 hero-bg relative" ref={ref}>
      <div className={`max-w-3xl mx-auto px-6 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
        <BrainLogo className="w-16 h-16 mx-auto mb-8 opacity-60" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-800 leading-tight">
          Quando entendemos como o cérebro aprende, <span className="text-brand-600">novos caminhos</span> se tornam possíveis.
        </h2>
        <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
          Uma avaliação especializada pode ajudar a identificar as causas das dificuldades e orientar estratégias mais eficazes para o desenvolvimento da criança.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center justify-center gap-2.5 bg-brand-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/25 hover:shadow-2xl hover:shadow-brand-500/30">
            Agendar Avaliação
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.229 0-4.296-.656-6.04-1.781l-.433-.282-2.834.95.95-2.834-.282-.433A9.72 9.72 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <BrainLogo className="w-8 h-8 opacity-60" />
            <span className="font-display text-white text-lg">Berenice Balieiro</span>
          </div>
          <p className="text-sm text-center sm:text-right">
            Neuropsicopedagoga Clínica · Especialista em Neurociência do Comportamento
          </p>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Berenice Balieiro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

/* ── WhatsApp Float ── */
function WhatsAppFloat() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
      className={`whatsapp-float transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="WhatsApp">
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.229 0-4.296-.656-6.04-1.781l-.433-.282-2.834.95.95-2.834-.282-.433A9.72 9.72 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
    </a>
  )
}

/* ───────────────── MAIN PAGE ───────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainSection />
      <ScienceSection />
      <ProcessSection />
      <DifferentialsSection />
      <AboutSection />
      <IndicationsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
