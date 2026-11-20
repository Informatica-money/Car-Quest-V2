import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CarFront, Gamepad2, Search, Sparkles, X } from 'lucide-react'

const games = [{
  title: 'Car Quest', category: 'Rijden',
  description: 'Pak het stuur, kies je auto en geniet van een ontspannen rit door een kleurrijke wereld.',
  image: '/images/car-quest-driving.png', label: 'Nu speelbaar',
  href: 'https://informatica-money.github.io/Car-Quest-V2/',
}]

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Playroom — games om even in te verdwijnen' },
    { name: 'description', content: 'Ontdek rustige, leuke browsergames. Begin je rit met Car Quest.' },
  ] }),
  component: Home,
})

function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Alles')
  const categories = ['Alles', 'Rijden', 'Avontuur', 'Puzzel']
  const filteredGames = useMemo(() => games.filter((game) =>
    (category === 'Alles' || game.category === category) &&
    `${game.title} ${game.description} ${game.category}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category])

  return <main className="min-h-dvh overflow-hidden bg-background text-foreground">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-10">
      <a href="#top" aria-label="Playroom startpagina" className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm"><Gamepad2 size={22} /></span><span className="font-serif text-2xl font-semibold tracking-tight">playroom<span className="text-primary">.</span></span></a>
      <a href="#games" className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm">Ontdek games <ArrowRight className="ml-1 inline" size={15} /></a>
    </header>
    <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-10 md:grid-cols-[0.9fr_1.1fr] md:pb-24 md:pt-14">
      <div className="relative z-10"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold tracking-wide text-muted-foreground"><Sparkles size={14} className="text-primary" /> EEN KLEIN PLEKJE VOOR GROOT PLEZIER</div>
        <h1 className="max-w-xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Even weg.<br /><span className="italic text-primary">Lekker spelen.</span></h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Welkom bij Playroom: fijne browsergames, zonder drukte. Kies iets leuks en speel meteen.</p>
        <a href="#games" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]">Vind jouw game <ArrowRight size={18} /></a>
        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><span className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-background bg-accent text-foreground"><CarFront size={16} /></span><span className="grid size-8 place-items-center rounded-full border-2 border-background bg-secondary"><Gamepad2 size={16} /></span></span> Rustig gekozen. Makkelijk gevonden.</div>
      </div>
      <div className="relative mx-auto w-full max-w-2xl"><div className="absolute -right-8 -top-8 size-40 rounded-full bg-accent/40 blur-3xl" /><div className="absolute -bottom-10 -left-8 size-40 rounded-full bg-primary/15 blur-3xl" />
        <a href={games[0].href} target="_blank" rel="noreferrer" aria-label="Speel Car Quest" className="relative block rotate-[1deg] overflow-hidden rounded-[2rem] border-[8px] border-card shadow-lg transition duration-500 hover:rotate-0">
          <img src="/images/car-quest-driving.png" alt="Car Quest: een rode auto rijdt over een rustige weg door een groene wereld" className="aspect-[1.5/1] w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10182a]/90 via-[#10182a]/45 to-transparent p-6 pt-20 text-[#f8eee8] sm:p-8 sm:pt-24"><span className="mb-3 inline-flex rounded-full bg-[#22484c]/90 px-3 py-1 text-xs font-semibold">NU BESPEELBAAR</span><div className="flex items-end justify-between gap-3"><div><p className="text-sm text-[#f8eee8]/75">Onze eerste game</p><p className="font-serif text-3xl sm:text-4xl">Car Quest</p></div><span className="grid size-12 place-items-center rounded-full bg-[#f2dfd1] text-[#172033]"><ArrowRight /></span></div></div>
        </a><div className="absolute -bottom-5 left-4 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-md sm:flex"><span className="size-2 rounded-full bg-primary" /> Een ontspannen rit wacht op je</div>
      </div>
    </section>
    <section id="games" className="border-t border-border/80 bg-secondary/55 px-5 py-16 sm:px-10 sm:py-20"><div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">De collectie</p><h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">Wat speel je vandaag?</h2><p className="mt-3 text-muted-foreground">Een overzichtelijke plek voor al je volgende favorieten.</p></div>
        <label className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm transition focus-within:ring-2 focus-within:ring-ring md:max-w-sm"><Search size={19} className="shrink-0 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Zoek een game..." className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" aria-label="Zoek een game" />{query && <button onClick={() => setQuery('')} aria-label="Wis zoekopdracht" className="rounded-full p-1 text-muted-foreground hover:bg-secondary"><X size={16} /></button>}</label>
      </div>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter op genre">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 ${category === item ? 'bg-primary text-primary-foreground shadow-sm' : 'border border-border bg-card text-muted-foreground hover:text-foreground'}`}>{item}</button>)}</div>
      {filteredGames.length ? <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filteredGames.map((game) => <a key={game.title} href={game.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative overflow-hidden"><img src={game.image} alt="" className="aspect-[1.75/1] w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">{game.label}</span></div>
        <div className="p-5 sm:p-6"><div className="flex items-center justify-between"><h3 className="font-serif text-2xl font-semibold">{game.title}</h3><span className="grid size-10 place-items-center rounded-full bg-secondary text-foreground transition group-hover:bg-primary group-hover:text-primary-foreground"><ArrowRight size={18} /></span></div><p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{game.description}</p><div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm"><span className="text-muted-foreground">{game.category}</span><span className="font-semibold text-primary">Speel nu <ArrowRight className="ml-1 inline" size={14} /></span></div></div>
      </a>)}</div> : <div className="mt-8 rounded-3xl border border-dashed border-border bg-card/70 px-6 py-14 text-center"><Search className="mx-auto mb-3 text-muted-foreground" size={26} /><p className="font-serif text-2xl">Geen games gevonden</p><p className="mt-2 text-sm text-muted-foreground">Probeer een andere zoekterm of kies een ander genre.</p></div>}
    </div></section>
    <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10"><span className="font-serif text-lg font-semibold text-foreground">playroom<span className="text-primary">.</span></span><span>Een rustig hoekje voor leuke browsergames.</span></footer>
  </main>
}
