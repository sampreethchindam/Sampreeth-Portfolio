import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/motion'
import { scoreboard } from '../data'
import { Squiggle } from './Bits'
import Wave from './Wave'
import Odometer from './Odometer'

export default function Milestones() {
  const root = useRef(null)
  useGSAP(() => {
    gsap.utils.toArray('.squiggle path', root.current).forEach((p) =>
      gsap.to(p, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: p, start: 'top 85%' } }))
    const tl = gsap.timeline({ scrollTrigger: { trigger: '.nums', start: 'top 82%' } })
    tl.from('.num-cell', { y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out' })
    gsap.utils.toArray('.nums .odo-col', root.current).forEach((col, i) => {
      tl.fromTo(col, { yPercent: 0 }, { yPercent: -((10 + +col.dataset.d) / 20) * 100, duration: 2.2, ease: 'power4.out' }, 0.15 + i * 0.05)
    })
    tl.from('.num-line', { scaleX: 0, stagger: 0.12, duration: 1.2, ease: 'expo.inOut' }, 0.4)
      .from('.num-meta, .num-note', { y: 12, opacity: 0, stagger: 0.08, duration: 0.6 }, 0.9)
  }, { scope: root })
  return <section className="milestones section" id="milestones" ref={root}><Wave flip /><div className="wrap">
    <div className="sec-head center ms-nums-head"><span className="pill">Engineering outcomes</span><h2 className="h2">Impact <span className="hl">by the numbers<Squiggle /></span></h2></div>
    <div className="nums">{scoreboard.map((s) => <div className="num-cell" key={s.label}>
      <div className="num-val"><Odometer value={s.value} /><small>{s.suffix}</small></div>
      <i className="num-line" /><div className="num-meta"><b>{s.label}</b></div><span className="num-note">{s.note}</span>
    </div>)}</div>
  </div></section>
}
