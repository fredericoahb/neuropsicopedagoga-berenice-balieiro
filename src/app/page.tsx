'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Brain, Eye, Clock, Heart, FolderOpen, MessageCircle,
  CheckCircle2, ChevronDown, Phone, Lightbulb, Users,
  Target, GraduationCap, Shield, ArrowRight, Sparkles,
  Activity, BookOpen, Zap, Puzzle, Baby, User, PersonStanding,
  AlertTriangle, RefreshCw
} from 'lucide-react'

const WPP_NUM = '5500000000000'
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

/* ═══════════════════ NAVBAR ═══════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/92 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/logo.jpg" alt="Logo" width={44} height={44} className="rounded-full transition-transform duration-300 group-hover:scale-105" />
          <div className="leading-tight">
            <span className="font-[family-name:var(--font-display)] text-lg text-navy-800 block font-semibold">Berenice Balieiro</span>
            <span className="text-[10px] text-brand-600 tracking-[0.2em] uppercase font-semibold">Neuropsicopedagoga Clínica</span>
          </div>
        </a>
        <div className="hidden sm:flex items-center gap-3">
          <a href="#para-quem" className="text-sm text-brand-700 font-medium hover:text-brand-900 transition-colors px-3 py-2">Para quem</a>
          <a href="#como-funciona" className="text-sm text-brand-700 font-medium hover:text-brand-900 transition-colors px-3 py-2">Como funciona</a>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-500/20">
            <Phone className="w-4 h-4" /> Agendar
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ═══════════════════ 1. HERO — HEADLINE + SUBHEADLINE ═══════════════════ */
function Hero() {
  return (
    <section className="hero-gradient relative min-h-[100svh] flex items-center pt-20">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="anim-up">
              <span className="inline-flex items-center gap-2 text-teal-700 text-sm font-semibold bg-teal-50 px-4 py-1.5 rounded-full mb-8 border border-teal-100">
                <Sparkles className="w-4 h-4" />
                Crianças · Adultos · Idosos
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.12] text-navy-800 anim-up d1">
              Nem toda dificuldade é falta de esforço.
              <span className="text-brand-500 block mt-2">Muitas são sinais que ainda não foram interpretados.</span>
            </h1>
            <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-xl anim-up d2">
              A neuropsicopedagogia investiga como o cérebro aprende, se organiza e regula emoções — e identifica o que precisa de apoio para funcionar melhor.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 anim-up d3">
              <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
                className="cta-glow inline-flex items-center gap-2.5 bg-brand-500 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20">
                Agendar Avaliação <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#identificacao"
                className="inline-flex items-center gap-2 text-brand-600 px-6 py-4 rounded-full text-base font-semibold hover:bg-brand-50 transition-all border border-brand-200">
                Você reconhece isso?
              </a>
            </div>
          </div>
          <div className="relative anim-up d4 hidden lg:flex justify-center">
            <div className="absolute -inset-8 bg-gradient-to-br from-brand-200/20 to-teal-200/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-[2.5rem] p-10 border border-white/70 shadow-xl shadow-brand-500/5">
              <Image src="/logo.jpg" alt="Neuropsicopedagogia — Cérebro e Conexões Neurais" width={320} height={320} className="mx-auto" />
              <div className="absolute -right-3 top-16 bg-white rounded-2xl shadow-lg px-4 py-3 border border-brand-100">
                <div className="flex items-center gap-2 text-sm"><Activity className="w-5 h-5 text-teal-600" /><span className="text-navy-800 font-semibold">Funções Executivas</span></div>
              </div>
              <div className="absolute -left-3 bottom-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-teal-100">
                <div className="flex items-center gap-2 text-sm"><Brain className="w-5 h-5 text-brand-500" /><span className="text-navy-800 font-semibold">Reabilitação Cognitiva</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-400 hidden lg:block animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 2. IDENTIFICAÇÃO DO PROBLEMA ═══════════════════ */
function PainSection() {
  const { ref, vis } = useInView()
  const pains = [
    { icon: Baby, label: 'Crianças', items: [
      'Seu filho parece inteligente, mas não consegue terminar tarefas?',
      'Esquece o que acabou de aprender?',
      'Fica frustrado ou irritado quando precisa estudar?',
    ]},
    { icon: User, label: 'Adultos', items: [
      'Você sente que tenta se organizar, mas não consegue manter?',
      'Procrastina mesmo sabendo que precisa agir?',
      'Tem dificuldade de foco e sobrecarga mental constante?',
    ]},
    { icon: Heart, label: 'Idosos', items: [
      'Seu familiar está esquecendo coisas com frequência?',
      'Perde o fio da conversa ou se confunde com tarefas do dia a dia?',
      'Você não sabe como ajudar?',
    ]},
  ]
  return (
    <section id="identificacao" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Você reconhece isso?</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
            Situações que parecem comuns — mas podem ser <span className="text-brand-500">sinais importantes</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {pains.map((group, gi) => (
            <div key={gi} className={`card-lift bg-gray-50 rounded-2xl p-7 border border-gray-100 ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${gi * 120}ms` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-brand-500" />
                </div>
                <span className="font-[family-name:var(--font-display)] text-lg text-navy-800 font-semibold">{group.label}</span>
              </div>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-[15px] leading-relaxed">
                    <span className="text-brand-400 mt-1 flex-shrink-0">—</span>
                    <span className="italic">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 3. QUEBRA DE CRENÇA ═══════════════════ */
function BeliefBreak() {
  const { ref, vis } = useInView()
  return (
    <section className="section-warm py-20" ref={ref}>
      <div className={`max-w-3xl mx-auto px-6 text-center ${vis ? 'anim-up' : 'opacity-0'}`}>
        <AlertTriangle className="w-10 h-10 text-brand-500 mx-auto mb-6 opacity-70" />
        <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-navy-800 leading-snug">
          O problema pode não ser falta de disciplina, preguiça ou idade.
        </h2>
        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Pode ser <strong className="text-brand-600">sobrecarga cognitiva</strong>, uma falha em funções executivas ou uma dificuldade que ninguém investigou. Quando o cérebro não tem as ferramentas certas para processar informações, o esforço sozinho não resolve.
        </p>
        <p className="mt-4 text-brand-700 font-semibold text-lg">
          Entender a causa muda tudo.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════ 4. EXPLICAÇÃO CIENTÍFICA (AUTORIDADE) ═══════════════════ */
function ScienceSection() {
  const { ref, vis } = useInView()
  const areas = [
    { name: 'Atenção', desc: 'Capacidade de focar e filtrar estímulos', icon: Eye },
    { name: 'Memória', desc: 'Armazenar e recuperar informações', icon: Brain },
    { name: 'Linguagem', desc: 'Compreender e se expressar', icon: MessageCircle },
    { name: 'Raciocínio', desc: 'Resolver problemas e planejar', icon: Lightbulb },
    { name: 'Organização', desc: 'Estruturar tarefas e prioridades', icon: FolderOpen },
    { name: 'Regulação Emocional', desc: 'Lidar com frustrações e impulsos', icon: Heart },
  ]
  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Por que isso acontece</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
              O cérebro depende de <span className="text-brand-500">funções cognitivas</span> para funcionar no dia a dia
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Quando uma ou mais dessas funções não operam bem, surgem dificuldades que parecem comportamentais — mas têm origem neurológica. A neuropsicopedagogia identifica exatamente onde está o ponto de dificuldade e o que pode ser feito.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Não é sobre rotular. É sobre compreender o que está por trás — e intervir com estratégia.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {areas.map((a, i) => (
              <div key={i} className={`card-lift bg-gray-50 rounded-2xl p-5 border border-gray-100 ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-50 to-teal-50 flex items-center justify-center mb-3">
                  <a.icon className="w-5 h-5 text-brand-500" />
                </div>
                <span className="text-sm font-bold text-navy-800 block">{a.name}</span>
                <span className="text-xs text-gray-500 mt-1 block leading-snug">{a.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 5. SOBRE A PROFISSIONAL ═══════════════════ */
function AboutSection() {
  const { ref, vis } = useInView()
  return (
    <section className="py-24 bg-gradient-to-b from-white to-brand-50/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid lg:grid-cols-5 gap-12 items-center ${vis ? 'anim-up' : 'opacity-0'}`}>
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/30 to-teal-200/30 rounded-[2rem] blur-2xl"></div>
              <div className="relative w-72 h-80 rounded-[2rem] bg-gradient-to-br from-brand-100 to-teal-50 flex flex-col items-center justify-center border border-white shadow-xl overflow-hidden">
                {/* TROCAR PELO COMPONENTE Image COM A FOTO REAL */}
                <Image src="/logo.jpg" alt="Berenice Balieiro" width={120} height={120} className="opacity-30" />
                <span className="mt-3 text-brand-600 text-sm font-semibold">Foto Profissional</span>
                <span className="text-gray-400 text-xs">Substituir por imagem real</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Quem sou</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-800 mt-3 leading-tight">
              Berenice <span className="text-brand-500">Balieiro</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Neuropsicopedagoga clínica com formação multidisciplinar em neurociência do comportamento, aprendizagem e reabilitação cognitiva.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Meu trabalho não se limita a identificar dificuldades. Busco compreender a causa real — integrando neurociência, educação e comportamento — para construir intervenções que fazem diferença prática na vida de quem atendo.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Cada pessoa tem um funcionamento único. Minha abordagem respeita essa individualidade, combinando avaliação técnica, escuta clínica e orientações que funcionam no cotidiano.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Neurociência do Comportamento', 'Reabilitação Cognitiva', 'Avaliação Neuropsicopedagógica', 'Orientação Parental'].map((tag) => (
                <span key={tag} className="bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-100">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 6. COMO FUNCIONA ═══════════════════ */
function ProcessSection() {
  const { ref, vis } = useInView()
  const steps = [
    { num: '01', title: 'Escuta Inicial', desc: 'Conversa detalhada com os responsáveis ou com o próprio paciente para compreender a história e as dificuldades atuais.' },
    { num: '02', title: 'Avaliação Neuropsicopedagógica', desc: 'Sessões estruturadas para mapear o funcionamento cognitivo, emocional e comportamental com instrumentos validados.' },
    { num: '03', title: 'Análise e Perfil', desc: 'Elaboração de um perfil detalhado que identifica pontos fortes, dificuldades e caminhos de intervenção.' },
    { num: '04', title: 'Plano de Intervenção', desc: 'Construção de estratégias personalizadas, baseadas em evidências, para cada caso.' },
    { num: '05', title: 'Orientação e Acompanhamento', desc: 'Orientações práticas para família, escola ou o próprio paciente — com acompanhamento da evolução.' },
  ]
  return (
    <section id="como-funciona" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">O processo</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-800 mt-3">
            Como funciona o <span className="text-brand-500">atendimento</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">Cada etapa foi desenhada para oferecer clareza e direção — não apenas respostas.</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-2">
          {steps.map((s, i) => (
            <div key={i} className={`step-connector flex gap-6 ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center font-[family-name:var(--font-display)] text-lg font-bold shadow-lg shadow-brand-500/15">
                {s.num}
              </div>
              <div className="pb-8">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-navy-800 font-semibold">{s.title}</h3>
                <p className="text-gray-500 mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 7. PARA QUEM É (TABS) ═══════════════════ */
function AudienceSection() {
  const [tab, setTab] = useState(0)
  const { ref, vis } = useInView()
  const audiences = [
    {
      label: 'Crianças', icon: Baby,
      title: 'Para crianças com dificuldades de aprendizagem e comportamento',
      items: [
        'Dificuldade de atenção e concentração',
        'Dificuldade de aprendizagem na leitura, escrita ou matemática',
        'Desorganização e falta de planejamento',
        'Comportamento desafiador ou birras intensas',
        'Suspeita de TDAH ou transtornos do neurodesenvolvimento',
        'Baixo rendimento escolar apesar de esforço',
        'Dificuldades emocionais relacionadas à escola',
      ],
    },
    {
      label: 'Adultos', icon: User,
      title: 'Para adultos que enfrentam dificuldades cognitivas e emocionais',
      items: [
        'Dificuldade de foco e concentração',
        'Procrastinação crônica',
        'Sobrecarga mental e sensação de incapacidade',
        'TDAH diagnosticado ou suspeita',
        'Ansiedade e burnout que afetam a produtividade',
        'Dificuldade de organização e planejamento',
        'Sensação de que "deveria conseguir, mas não consegue"',
      ],
    },
    {
      label: 'Idosos', icon: Heart,
      title: 'Para idosos e familiares lidando com declínio cognitivo',
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
    <section id="para-quem" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Para quem</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-800 mt-3">
            A avaliação é indicada para <span className="text-brand-500">diferentes fases da vida</span>
          </h2>
        </div>
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {audiences.map((a, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${tab === i ? 'tab-active shadow-lg shadow-brand-500/15' : 'tab-inactive'}`}>
              <a.icon className="w-4 h-4" /> {a.label}
            </button>
          ))}
        </div>
        {/* Content */}
        <div className={`max-w-2xl mx-auto ${vis ? 'anim-up' : 'opacity-0'}`}>
          <h3 className="font-[family-name:var(--font-display)] text-xl text-navy-800 font-semibold mb-6">{current.title}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {current.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 8. DIFERENCIAIS + BENEFÍCIOS ═══════════════════ */
function DifferentialsSection() {
  const { ref, vis } = useInView()
  const items = [
    { icon: Sparkles, title: 'Baseada em neurociência', desc: 'Intervenções fundamentadas em evidência científica, não em opinião.' },
    { icon: Target, title: 'Avaliação individualizada', desc: 'Cada pessoa é investigada de forma única — sem protocolos genéricos.' },
    { icon: Brain, title: 'Foco na causa, não no sintoma', desc: 'Identifica o que está por trás da dificuldade para intervir com precisão.' },
    { icon: Users, title: 'Orientação prática', desc: 'Famílias e pacientes recebem orientações aplicáveis no cotidiano.' },
    { icon: GraduationCap, title: 'Comunicação com escola', desc: 'Quando necessário, orientação direta à equipe pedagógica.' },
    { icon: RefreshCw, title: 'Acompanhamento contínuo', desc: 'O trabalho não termina no laudo. O progresso é monitorado.' },
  ]
  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-teal-600 text-sm font-bold uppercase tracking-[0.2em]">Diferenciais</span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-navy-800 mt-3">
            Atendimento com <span className="text-brand-500">profundidade técnica</span> e olhar humano
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div key={i} className={`card-lift bg-white rounded-2xl p-6 border border-gray-100 ${vis ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-navy-800 font-bold text-base">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 9. PROVA DE CONFIANÇA ═══════════════════ */
function TrustSection() {
  const { ref, vis } = useInView()
  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className={`max-w-4xl mx-auto px-6 ${vis ? 'anim-up' : 'opacity-0'}`}>
        <div className="bg-brand-50/50 rounded-3xl p-8 sm:p-12 border border-brand-100">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-brand-500" />
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-navy-800 font-semibold">Compromisso com a ética e a ciência</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Todo atendimento segue princípios éticos rigorosos. Não há promessa de cura, diagnóstico por redes sociais ou soluções mágicas.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                O trabalho é pautado em <strong className="text-brand-600">avaliação técnica</strong>, instrumentos validados e intervenções baseadas em evidência.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                A experiência clínica com crianças, adultos e idosos permite uma visão ampla das dificuldades cognitivas em diferentes fases da vida.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Cada laudo, cada orientação e cada intervenção é construída com responsabilidade — porque quem procura ajuda merece <strong className="text-brand-600">seriedade</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════ 10. CTA FINAL + BLOCO DE CONEXÃO ═══════════════════ */
function CTASection() {
  const { ref, vis } = useInView()
  return (
    <section className="py-24 hero-gradient relative" ref={ref}>
      <div className={`max-w-3xl mx-auto px-6 text-center ${vis ? 'anim-up' : 'opacity-0'}`}>
        <Image src="/logo.jpg" alt="" width={64} height={64} className="mx-auto mb-8 rounded-full opacity-50" />
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-[2.8rem] text-navy-800 leading-tight">
          Quando entendemos o que está por trás da dificuldade,
          <span className="text-brand-500 block mt-2">o caminho fica mais claro.</span>
        </h2>
        <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
          Uma avaliação especializada pode ser o primeiro passo para compreender o que está acontecendo — e encontrar estratégias que realmente funcionam.
        </p>
        <p className="mt-4 text-brand-700 font-semibold text-lg">
          Você não precisa ter certeza do que é. Precisa apenas dar o primeiro passo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
            className="cta-glow inline-flex items-center justify-center gap-2.5 bg-brand-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20">
            Agendar Avaliação <ArrowRight className="w-5 h-5" />
          </a>
          <a href={WPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20">
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
    <footer className="bg-navy-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="" width={32} height={32} className="rounded-full opacity-60" />
            <span className="font-[family-name:var(--font-display)] text-white text-lg">Berenice Balieiro</span>
          </div>
          <p className="text-sm text-center sm:text-right">Neuropsicopedagoga Clínica · Neurociência do Comportamento</p>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Berenice Balieiro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════ WHATSAPP FLOAT ═══════════════════ */
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
      <WppIcon className="w-7 h-7 text-white" />
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
