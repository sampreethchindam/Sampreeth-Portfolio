import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/motion'
import { projects } from '../data'
import Art from './Art'
import { Squiggle } from './Bits'
import Wave from './Wave'

const scatter = [ { x: 90, y: 60, r: -9 }, { x: 0, y: 140, r: 7 }, { x: -90, y: 40, r: -5 } ]
function ProjectCard({ p, i }) {
  return <article className="wk-card">
    <div className="wk-window" style={{ background: p.color }}><div className="wk-bar"><i /><i /><i /><span>{p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.app</span></div>
      <div className="wk-art">{p.image ? <img src={p.image} alt={`${p.title} project illustration`} /> : <Art kind={p.visual} />}</div>
    </div>
    <div className="wk-body"><div className="wk-top"><span className="wk-no">0{i + 1}</span><span className="wk-tag">{p.tag}</span></div>
      <h3>{p.title}</h3><p>{p.text}</p>
      <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
      {p.link ? <a className="wk-link" href={p.link} target="_blank" rel="noreferrer">View project <span>↗</span></a> : <span className="wk-link" aria-label="Private company work">Professional case study · private source</span>}
    </div>
  </article>
}
export default function Work() {
  const root = useRef(null)
  useGSAP(() => {
    gsap.to('.wk-title .squiggle path', { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: '.wk-title', start: 'top 80%' } })
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1001px)', () => gsap.utils.toArray('.wk-card', root.current).forEach((c, i) => {
      const s = scatter[i % scatter.length]
      gsap.fromTo(c, { x: s.x, y: s.y, rotate: s.r }, { x: 0, y: 0, rotate: 0, ease: 'none', scrollTrigger: { trigger: '.wk-cards', start: 'top 95%', end: 'top 35%', scrub: 0.6 } })
    }))
    mm.add('(max-width: 1000px)', () => gsap.utils.toArray('.wk-card', root.current).forEach((c, i) => {
      gsap.from(c, { y: 60, rotate: i % 2 ? 4 : -4, opacity: 0, duration: 1, scrollTrigger: { trigger: c, start: 'top 88%' } })
    }))
  }, { scope: root })
  return <section className="work section" id="work" ref={root}><Wave flip /><div className="wrap">
    <div className="sec-head"><span className="pill">Selected work</span><h2 className="h2 wk-title">Things I’ve <span className="hl">built<Squiggle /></span></h2><p className="hand sec-note">real systems, practical impact ↓</p></div>
    <div className="wk-cards">{projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}</div>
  </div></section>
}
