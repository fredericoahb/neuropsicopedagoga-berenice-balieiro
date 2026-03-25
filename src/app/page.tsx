'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Brain, Eye, Clock, Heart, FolderOpen, MessageCircle,
  CheckCircle2, ChevronDown, Phone, Lightbulb, Users,
  Target, GraduationCap, Shield, ArrowRight, Sparkles,
  Activity, Baby, User, AlertTriangle, RefreshCw
} from 'lucide-react'

const WPP_NUM = '5521993431409'
const WPP_MSG = encodeURIComponent('Olá! Gostaria de agendar uma avaliação neuropsicopedagógica.')
const WPP_LINK = `https://wa.me/${WPP_NUM}?text=${WPP_MSG}`

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, vis }
}

const WppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.229 0-4.296-.656-6.04-1.781l-.433-.282-2.834.95.95-2.834-.282-.433A9.72 9.72 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/></svg>
)

/* ═══════════════════ NAVBAR (#004369 header) ═══════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#004369]/95 backdrop-blur-xl shadow-lg' : 'bg-[#004369]'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full transition-transform duration-300 group-hover:scale-105 ring-2 ring-white/20" />
          <div className="leading-tight">
            <span className="font-[family-name:var(--font-display)] text-base text-white block font-bold">Berenice Balieiro</span>
            <span className="text-[10px] text-brand-200 tracking-[0.18em] uppercase font-medium">Neuropsicopedagoga Clínica</span>
          </div>
        </a>
        <div className="hidden sm:flex items-center gap-1">
          <a href="#para-quem" className="text-sm text-white/80 font-medium hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Para quem</a>
          <a href="#como-funciona" className="text-sm text-white/80 font-medium hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Como funciona</a>
          <a href="#sobre" className="text-sm text-white/80 font-medium hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Sobre</a>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#004369] px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-50 transition-all ml-2">
            <Phone className="w-4 h-4" /> Agendar
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ═══════════════════ HERO (#e8f7ff bg, hierarchy fix) ═══════════════════ */
function Hero() {
  return (
    <section className="hero-gradient relative min-h-[100svh] flex items-center pt-20">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="anim-up">
              <span className="inline-flex items-center gap-2 text-accent-700 text-sm font-semibold bg-accent-50 px-4 py-1.5 rounded-full mb-8 border border-accent-100">
                <Sparkles className="w-4 h-4" />
                Crianças · Adultos · Idosos
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[1.75rem] sm:text-4xl lg:text-[3.2rem] leading-[1.15] sm:leading-[1.1] text-navy-900 anim-up d1 font-bold sm:font-extrabold">
              Nem toda dificuldade de aprendizagem é preguiça ou falta de esforço.
            </h1>
            <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl text-brand-500 mt-3 sm:mt-4 font-bold leading-snug anim-up d2">
              Às vezes, é o cérebro pedindo ajuda.
            </p>
            <p className="mt-7 text-base text-gray-600 leading-relaxed max-w-lg anim-up d3 font-[family-name:var(--font-body)]">
              A avaliação neuropsicopedagógica identifica como o cérebro aprende e onde estão as dificuldades — para que a intervenção seja precisa, e não genérica.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 anim-up d4">
              <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
                className="cta-glow inline-flex items-center gap-2.5 bg-[#004369] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#003554] transition-all shadow-lg shadow-brand-500/20">
                Agendar Avaliação <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#identificacao"
                className="inline-flex items-center gap-2 text-[#004369] px-6 py-4 rounded-full text-base font-semibold hover:bg-brand-50 transition-all border border-brand-200">
                Você reconhece isso?
              </a>
            </div>
          </div>
          <div className="relative anim-up d5 flex justify-center mt-10 lg:mt-0">
            <div className="absolute -inset-8 bg-gradient-to-br from-brand-200/20 to-accent-100/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-xl border border-white/80">
              <Image src="/hero-child.jpg" alt="Criança com dificuldade de aprendizagem" width={480} height={320} className="object-cover w-full" />
              <div className="absolute -right-2 lg:-right-3 top-6 lg:top-10 bg-white rounded-xl lg:rounded-2xl shadow-lg px-3 lg:px-4 py-2 lg:py-3 border border-brand-100 hidden sm:flex">
                <div className="flex items-center gap-2 text-xs lg:text-sm"><Activity className="w-4 h-4 lg:w-5 lg:h-5 text-accent-600" /><span className="text-navy-800 font-semibold">Funções Executivas</span></div>
              </div>
              <div className="absolute -left-2 lg:-left-3 bottom-6 lg:bottom-10 bg-white rounded-xl lg:rounded-2xl shadow-lg px-3 lg:px-4 py-2 lg:py-3 border border-accent-100 hidden sm:flex">
                <div className="flex items-center gap-2 text-xs lg:text-sm"><Brain className="w-4 h-4 lg:w-5 lg:h-5 text-brand-500" /><span className="text-navy-800 font-semibold">Reabilitação Cognitiva</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-300 hidden lg:block animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ PAIN SECTION (with microcopy) ═══════════════════ */
function PainSection() {
  const { ref, vis } = useInView()
  const pains = [
    { icon: Baby, label: 'Crianças', items: [
      'Seu filho parece inteligente, mas não consegue terminar tarefas?',
      'Esquece o que acabou de aprender?',
      'Fica frustrado ou irritado quando precisa estudar?',
    ]},
    { icon: User, label: 'Adultos', items: [
      'Tenta se organizar, mas não consegue manter a rotina?',
      'Procrastina mesmo sabendo que precisa agir?',
      'Sobrecarga mental constante e dificuldade de foco?',
    ]},
    { icon: Heart, label: 'Idosos', items: [
      'Seu familiar está esquecendo coisas com frequência?',
      'Perde o fio da conversa ou se confunde no dia a dia?',
      'Você não sabe como ajudar?',
    ]},
  ]
  return (
    <section id="identificacao" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-accent-600 text-sm font-bold uppercase tracking-[0.2em]">Você reconhece isso?</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-900 mt-3 leading-tight font-bold">
            Situações que parecem comuns — mas podem ser <span className="text-brand-500">sinais importantes</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7 mt-14">
          {pains.map((group, gi) => (
            <div key={gi} className={`card-lift bg-brand-50/40 rounded-2xl p-7 border border-brand-100/60 ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${gi * 120}ms` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#004369] flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-[family-name:var(--font-display)] text-lg text-navy-900 font-bold">{group.label}</span>
              </div>
              <ul className="space-y-3.5">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-[15px] leading-relaxed">
                    <span className="text-brand-400 mt-0.5 flex-shrink-0">—</span>
                    <span className="italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-500 text-base max-w-xl mx-auto">
          Se você se identificou com alguns desses sinais, <strong className="text-brand-500 font-semibold">vale investigar com mais profundidade.</strong>
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════ BELIEF BREAK (refined) ═══════════════════ */
function BeliefBreak() {
  const { ref, vis } = useInView()
  return (
    <section className="section-warm py-24" ref={ref}>
      <div className={`max-w-3xl mx-auto px-6 text-center ${vis ? 'anim-up' : 'opacity-0'}`}>
        <AlertTriangle className="w-9 h-9 text-brand-500 mx-auto mb-6 opacity-60" />
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-navy-900 leading-snug font-bold">
          O problema pode não ser falta de disciplina, preguiça ou idade.
        </h2>
        <p className="mt-5 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Pode ser <strong className="text-brand-500 font-semibold">sobrecarga cognitiva</strong>, uma falha em <strong className="text-brand-500 font-semibold">funções executivas</strong> ou uma dificuldade que ninguém investigou.
        </p>
        <p className="mt-6 text-[#004369] font-bold text-xl font-[family-name:var(--font-display)]">
          Entender a causa muda tudo.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════ SCIENCE SECTION (better cards) ═══════════════════ */
function ScienceSection() {
  const { ref, vis } = useInView()
  const areas = [
    { name: 'Atenção', desc: 'Focar e filtrar estímulos', icon: Eye },
    { name: 'Memória', desc: 'Armazenar e recuperar informações', icon: Brain },
    { name: 'Linguagem', desc: 'Compreender e se expressar', icon: MessageCircle },
    { name: 'Raciocínio', desc: 'Resolver problemas e planejar', icon: Lightbulb },
    { name: 'Organização', desc: 'Estruturar tarefas e prioridades', icon: FolderOpen },
    { name: 'Regulação Emocional', desc: 'Lidar com frustrações', icon: Heart },
  ]
  return (
    <section className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-600 text-sm font-bold uppercase tracking-[0.2em]">Por que isso acontece</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-900 mt-3 leading-tight font-bold">
              O cérebro depende de <span className="text-brand-500">funções cognitivas</span> para funcionar
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-base">
              Quando essas funções não operam bem, surgem dificuldades que parecem comportamentais — mas têm origem neurológica. A neuropsicopedagogia identifica o ponto exato da dificuldade.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {areas.map((a, i) => (
              <div key={i} className={`card-lift bg-brand-50/50 rounded-2xl p-5 border border-brand-100/60 text-center ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-full bg-[#004369] flex items-center justify-center mx-auto mb-3">
                  <a.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-bold text-navy-900 block font-[family-name:var(--font-display)]">{a.name}</span>
                <span className="text-xs text-gray-500 mt-1 block leading-snug">{a.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ ABOUT (better scanability, bold keywords) ═══════════════════ */
function AboutSection() {
  const { ref, vis } = useInView()
  return (
    <section id="sobre" className="py-28 bg-gradient-to-b from-white to-brand-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid lg:grid-cols-5 gap-14 items-center ${vis ? 'anim-up' : 'opacity-0'}`}>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/25 to-accent-100/25 rounded-[2rem] blur-2xl"></div>
              <div className="relative w-72 h-80 rounded-[2rem] border border-white shadow-xl overflow-hidden">
                <Image src="/berenice.jpg" alt="Berenice Balieiro — Neuropsicopedagoga Clínica" fill className="object-cover object-top" sizes="288px" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-accent-600 text-sm font-bold uppercase tracking-[0.2em]">Quem sou</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-900 mt-3 leading-tight font-extrabold">
              Berenice <span className="text-brand-500">Balieiro</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-base">
              Neuropsicopedagoga clínica com formação multidisciplinar em <strong className="text-navy-900">neurociência</strong> do comportamento, <strong className="text-navy-900">aprendizagem</strong> e <strong className="text-navy-900">reabilitação cognitiva</strong>.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed text-base">
              Busco compreender a causa real das dificuldades — integrando neurociência, educação e comportamento — para construir intervenções que fazem diferença prática.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed text-base">
              Cada pessoa tem um funcionamento único. Minha abordagem combina avaliação técnica, escuta clínica e orientações aplicáveis no cotidiano.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Neurociência do Comportamento', 'Reabilitação Cognitiva', 'Avaliação Neuropsicopedagógica', 'Orientação Parental'].map((tag) => (
                <span key={tag} className="bg-brand-50 text-brand-500 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ PROCESS (tighter copy, more spacing) ═══════════════════ */
function ProcessSection() {
  const { ref, vis } = useInView()
  const steps = [
    { num: '01', title: 'Escuta Inicial', desc: 'Conversa com responsáveis ou paciente para compreender a história e dificuldades.' },
    { num: '02', title: 'Avaliação', desc: 'Sessões estruturadas com instrumentos validados para mapear o funcionamento cognitivo.' },
    { num: '03', title: 'Perfil Detalhado', desc: 'Identificação de pontos fortes, dificuldades e caminhos de intervenção.' },
    { num: '04', title: 'Plano de Intervenção', desc: 'Estratégias personalizadas e baseadas em evidências para cada caso.' },
    { num: '05', title: 'Acompanhamento', desc: 'Orientações para família e escola, com monitoramento da evolução.' },
  ]
  return (
    <section id="como-funciona" className="py-28 bg-brand-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-600 text-sm font-bold uppercase tracking-[0.2em]">O processo</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-900 mt-3 font-bold">
            Como funciona o <span className="text-brand-500">atendimento</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((s, i) => (
            <div key={i} className={`step-connector flex gap-6 ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#004369] text-white flex items-center justify-center font-[family-name:var(--font-display)] text-lg font-bold shadow-lg shadow-brand-500/15">
                {s.num}
              </div>
              <div className="pb-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg text-navy-900 font-bold">{s.title}</h3>
                <p className="text-gray-500 mt-1 leading-relaxed text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ AUDIENCE TABS (refined title) ═══════════════════ */
function AudienceSection() {
  const [tab, setTab] = useState(0)
  const { ref, vis } = useInView()
  const audiences = [
    {
      label: 'Crianças', icon: Baby,
      title: 'Quando a criança apresenta:',
      items: [
        'Dificuldade de atenção e concentração',
        'Dificuldade na leitura, escrita ou matemática',
        'Desorganização e falta de planejamento',
        'Comportamento desafiador ou birras intensas',
        'Suspeita de TDAH ou transtornos do neurodesenvolvimento',
        'Baixo rendimento escolar apesar de esforço',
        'Dificuldades emocionais relacionadas à escola',
      ],
    },
    {
      label: 'Adultos', icon: User,
      title: 'Quando o adulto percebe:',
      items: [
        'Dificuldade de foco e concentração',
        'Procrastinação crônica',
        'Sobrecarga mental e sensação de incapacidade',
        'TDAH diagnosticado ou suspeita',
        'Ansiedade e burnout que afetam a produtividade',
        'Dificuldade de organização e planejamento',
        '"Deveria conseguir, mas não consigo"',
      ],
    },
    {
      label: 'Idosos', icon: Heart,
      title: 'Quando o familiar nota:',
      items: [
        'Perda progressiva de memória',
        'Confusão com tarefas do dia a dia',
        'Dificuldade em manter conversas',
        'Necessidade de estimulação cognitiva',
        'Declínio nas funções executivas',
        'Familiares que precisam de orientação',
      ],
    },
  ]
  const current = audiences[tab]

  return (
    <section id="para-quem" className="py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent-600 text-sm font-bold uppercase tracking-[0.2em]">Para quem</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-900 mt-3 font-bold">
            A avaliação pode ajudar quando <span className="text-brand-500">você percebe:</span>
          </h2>
        </div>
        <div className="flex justify-center gap-3 mb-12">
          {audiences.map((a, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${tab === i ? 'tab-active' : 'tab-inactive'}`}>
              <a.icon className="w-4 h-4" /> {a.label}
            </button>
          ))}
        </div>
        <div className={`max-w-2xl mx-auto ${vis ? 'anim-up' : 'opacity-0'}`}>
          <h3 className="font-[family-name:var(--font-display)] text-lg text-navy-900 font-bold mb-6">{current.title}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {current.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-brand-50/40 rounded-xl px-5 py-4 border border-brand-100/50">
                <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ DIFFERENTIALS (stronger titles, tighter copy) ═══════════════════ */
function DifferentialsSection() {
  const { ref, vis } = useInView()
  const items = [
    { icon: Sparkles, title: 'Baseada em neurociência', desc: 'Evidência científica, não opinião.' },
    { icon: Target, title: 'Avaliação individualizada', desc: 'Cada pessoa investigada de forma única.' },
    { icon: Brain, title: 'Foco na causa', desc: 'Identifica o que está por trás da dificuldade.' },
    { icon: Users, title: 'Orientação prática', desc: 'Orientações aplicáveis no cotidiano.' },
    { icon: GraduationCap, title: 'Comunicação com escola', desc: 'Orientação direta à equipe pedagógica.' },
    { icon: RefreshCw, title: 'Acompanhamento contínuo', desc: 'O progresso é monitorado de perto.' },
  ]
  return (
    <section className="py-28 bg-brand-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent-600 text-sm font-bold uppercase tracking-[0.2em]">Diferenciais</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-900 mt-3 font-bold">
            Profundidade técnica com <span className="text-brand-500">olhar humano</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className={`card-lift bg-white rounded-2xl p-6 border border-brand-100/40 shadow-sm ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-11 h-11 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent-600" />
              </div>
              <h3 className="text-navy-900 font-bold text-base font-[family-name:var(--font-display)]">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ TRUST (better spacing) ═══════════════════ */
function TrustSection() {
  const { ref, vis } = useInView()
  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className={`max-w-4xl mx-auto px-6 ${vis ? 'anim-up' : 'opacity-0'}`}>
        <div className="bg-brand-50/50 rounded-3xl p-10 sm:p-14 border border-brand-100/60">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-brand-500" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy-900 font-bold">Compromisso com a ética e a ciência</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
                Todo atendimento segue princípios éticos rigorosos. Não há promessa de cura, diagnóstico por redes sociais ou soluções mágicas.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-base">
                O trabalho é pautado em <strong className="text-brand-500">avaliação técnica</strong>, instrumentos validados e intervenções baseadas em evidência.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-base">
                A experiência clínica com crianças, adultos e idosos permite uma visão ampla das dificuldades cognitivas em diferentes fases da vida.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4 text-base">
                Cada laudo e cada intervenção é construída com responsabilidade — porque quem procura ajuda merece <strong className="text-brand-500">seriedade</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ CTA FINAL (premium WhatsApp, more spacing) ═══════════════════ */
function CTASection() {
  const { ref, vis } = useInView()
  return (
    <section className="py-28 hero-gradient relative" ref={ref}>
      <div className={`max-w-3xl mx-auto px-6 text-center ${vis ? 'anim-up' : 'opacity-0'}`}>
        <Image src="/logo.jpg" alt="" width={56} height={56} className="mx-auto mb-8 rounded-full opacity-40" />
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.7rem] text-navy-900 leading-tight font-bold">
          Quando entendemos o que está por trás da dificuldade,
          <span className="text-brand-500 block mt-3">o caminho fica mais claro.</span>
        </h2>
        <p className="mt-7 text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
          Uma avaliação especializada pode ser o primeiro passo para compreender o que está acontecendo — e encontrar estratégias que funcionam.
        </p>
        <p className="mt-4 text-[#004369] font-bold text-lg font-[family-name:var(--font-display)]">
          Você não precisa ter certeza do que é. Precisa apenas dar o primeiro passo.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
            className="cta-glow inline-flex items-center justify-center gap-2.5 bg-[#004369] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#003554] transition-all shadow-xl shadow-brand-500/15">
            Agendar Avaliação <ArrowRight className="w-5 h-5" />
          </a>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#004369]/90 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#003554] transition-all shadow-lg shadow-brand-500/10">
            <WppIcon /> Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ FOOTER ═══════════════════ */
function Footer() {
  return (
    <footer className="bg-[#004369] text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="" width={32} height={32} className="rounded-full opacity-70 ring-1 ring-white/20" />
            <span className="font-[family-name:var(--font-display)] text-white text-lg font-bold">Berenice Balieiro</span>
          </div>
          <p className="text-sm text-center sm:text-right text-white/60">Neuropsicopedagoga Clínica · Neurociência do Comportamento</p>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Berenice Balieiro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════ WHATSAPP FLOAT (premium style) ═══════════════════ */
function WhatsAppFloat() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
      className={`wpp-float transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="WhatsApp">
      <WppIcon className="w-6 h-6 text-white" />
    </a>
  )
}

/* ═══════════════════ PAGE ═══════════════════ */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PainSection />
      <BeliefBreak />
      <ScienceSection />
      <AboutSection />
      <ProcessSection />
      <AudienceSection />
      <DifferentialsSection />
      <TrustSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
