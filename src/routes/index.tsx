import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Clock, MapPin, Phone, Mail, Star, Instagram, Facebook } from "lucide-react";

import hero from "@/assets/hero.jpg";
import chef from "@/assets/chef.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import produce from "@/assets/produce.jpg";
import dish1 from "@/assets/dish-1.jpg";
import gal1 from "@/assets/gallery-1.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import gal3 from "@/assets/gallery-3.jpg";
import gal4 from "@/assets/gallery-4.jpg";


const RESTAURANT = {
  address: "12 Place Pélissière, 24100 Bergerac",
  phone: "+33 5 53 00 00 00",
  phoneDisplay: "05 53 00 00 00",
  email: "contact@aubonvivant-bergerac.fr",
};

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Au Bon Vivant",
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 Place Pélissière",
            addressLocality: "Bergerac",
            postalCode: "24100",
            addressCountry: "FR",
          },
          servesCuisine: "Française",
          priceRange: "€€€",
          telephone: "+33553000000",
          openingHours: ["Tu-Sa 12:00-14:00", "Tu-Sa 19:00-22:00"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "312" },
        }),
      },
    ],
  }),
});

const signatures = [
  {
    n: "01",
    img: dish1,
    name: "Magret de canard rôti",
    origin: "Ferme Lascaux — Sarlat",
    desc: "Sauce au Bergerac rouge, gratin dauphinois à la truffe d'été, jeunes pousses de nos maraîchers.",
    price: "32",
  },
  {
    n: "02",
    img: produce,
    name: "Foie gras mi-cuit du Périgord",
    origin: "Maison Duperier — Thiviers",
    desc: "Chutney de figues noires de Solliès, pain d'épices maison, fleur de sel de Guérande.",
    price: "22",
  },
  {
    n: "03",
    img: gal2,
    name: "Fondant chocolat Valrhona",
    origin: "Manufacture de Tain-l'Hermitage",
    desc: "Cœur coulant Guanaja 70%, glace vanille bourbon de Madagascar, tuile au cacao.",
    price: "12",
  },
];

const reviews = [
  {
    name: "Sophie Martin",
    date: "il y a 2 semaines",
    text: "Une adresse d'exception à Bergerac. Le magret parfaitement cuit, les produits d'une fraîcheur remarquable. Service attentionné, cadre chaleureux. On reviendra sans hésiter.",
  },
  {
    name: "Jean-Pierre Dubois",
    date: "il y a 1 mois",
    text: "Cuisine française authentique et raffinée. Le chef travaille de vrais produits, on le sent à chaque bouchée. Rapport qualité-prix excellent pour de la gastronomie.",
  },
  {
    name: "Claire Fontaine",
    date: "il y a 3 semaines",
    text: "Un dîner mémorable. L'accueil, le service, la carte des vins de Bergerac, tout est pensé. Le foie gras mi-cuit reste dans ma mémoire.",
  },
];

const hours = [
  { day: "Lundi", value: "Fermé" },
  { day: "Mardi", value: "12h – 14h · 19h – 22h" },
  { day: "Mercredi", value: "12h – 14h · 19h – 22h" },
  { day: "Jeudi", value: "12h – 14h · 19h – 22h" },
  { day: "Vendredi", value: "12h – 14h · 19h – 22h30" },
  { day: "Samedi", value: "12h – 14h · 19h – 22h30" },
  { day: "Dimanche", value: "12h – 14h" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-slow");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Chef />
      <Signatures />
      <Gallery />
      <Reservation />
      <Reviews />
      <Practical />
      <Contact />
      <Footer />
    </div>
  );
}


function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-cream">Au Bon Vivant</span>
          <span className="hidden text-[10px] uppercase tracking-[0.4em] text-gold sm:inline">Bergerac · MCMXCIX</span>
        </a>
        <nav className="hidden gap-10 text-[11px] uppercase tracking-[0.28em] text-cream/80 md:flex">
          <a href="#histoire" className="transition hover:text-gold">Maison</a>
          <a href="#signatures" className="transition hover:text-gold">Signatures</a>
          <a href="#galerie" className="transition hover:text-gold">Galerie</a>
          <a href="#avis" className="transition hover:text-gold">Presse</a>
          <a href="#contact" className="transition hover:text-gold">Contact</a>
        </nav>
        <a href="#reserver" className="btn-gold hidden sm:inline-flex">Réserver</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <img
        src={hero}
        alt="Salle du restaurant Au Bon Vivant à Bergerac, éclairée à la bougie"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/90" />
      <div className="absolute inset-0 grain" />

      {/* vertical side labels */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 text-cream/50 lg:block">
        <span className="vertical-label">Est. 1999 — Périgord Pourpre</span>
      </div>
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-cream/50 lg:block">
        <span className="vertical-label">N° 01 — Table gastronomique</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 text-cream lg:px-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="gold-rule" />
          <span className="eyebrow text-cream/80">Restaurant gastronomique · Bergerac</span>
        </div>
        <h1 className="font-display text-[15vw] leading-[0.92] tracking-tight sm:text-[11vw] md:text-[9rem] lg:text-[11rem]">
          Au Bon
          <br />
          <span className="italic font-serif text-gold">Vivant.</span>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-base leading-relaxed text-cream/80 sm:text-lg">
            Une maison discrète au cœur de Bergerac, où la cuisine française
            se raconte à voix basse — au fil des saisons, du terroir et
            de la lumière d'une bougie.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <a href="#reserver" className="btn-gold">Réserver une table</a>
            <a href="#signatures" className="btn-outline-cream">La carte du chef</a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-cream/15 pt-6 text-xs uppercase tracking-[0.28em] text-cream/60">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <span>4,8 · 312 avis Google</span>
          </div>
          <span className="hidden md:inline">Gault &amp; Millau — 2 toques</span>
          <span className="hidden md:inline">Guide du Routard — Coup de cœur</span>
          <span>Menu dégustation — 65 €</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Fait maison", "Périgord", "Saisonnier", "Vins de Bergerac", "Depuis 1999", "Table d'exception"];
  return (
    <div className="border-y border-border bg-cream py-5 overflow-hidden">
      <div className="flex items-center justify-center gap-8 whitespace-nowrap font-display text-2xl italic text-olive/80 sm:gap-14 sm:text-3xl">
        {words.concat(words).map((w, i) => (
          <span key={i} className="flex items-center gap-8 sm:gap-14">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ChapterHeader({ n, eyebrow, title, kicker }: { n: string; eyebrow: string; title: React.ReactNode; kicker?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="chapter-num">— Chapitre {n} —</p>
      <span className="eyebrow mt-4 block">{eyebrow}</span>
      <h2 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">{title}</h2>
      {kicker && <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{kicker}</p>}
      <div className="mx-auto mt-8 h-px w-16 bg-gold" />
    </div>
  );
}

function Story() {
  return (
    <section id="histoire" className="reveal relative py-28 sm:py-40">
      <span className="pointer-events-none absolute right-6 top-24 hidden font-display text-[10rem] leading-none text-olive/5 lg:block">I</span>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:items-center">
        <div className="relative md:col-span-6">
          <img
            src={chef}
            alt="Le chef à l'œuvre en cuisine"
            width={1200}
            height={1500}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-8 -right-4 hidden bg-cream px-8 py-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] sm:block">
            <p className="font-display text-6xl text-olive">XXV</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">années de passion</p>
          </div>
          <div className="absolute left-4 top-4 bg-ink/80 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-cream">
            Chef · Antoine Rochefort
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="chapter-num">— Chapitre I —</p>
          <span className="eyebrow mt-3 block">La maison</span>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
            Une table,<br />
            <em className="not-italic italic text-olive">une mémoire.</em>
          </h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
            <p className="text-lg">
              Depuis 1999, Au Bon Vivant perpétue au cœur de Bergerac l'art
              d'une cuisine française sincère, patiente et généreuse — une
              adresse où l'on prend le temps.
            </p>
            <p>
              Le chef Antoine Rochefort s'entoure des meilleurs producteurs
              du Périgord : maraîchers, éleveurs, vignerons. La carte se
              réécrit chaque saison, fidèle au marché et au geste juste.
            </p>
            <p className="border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-foreground">
              « Cuisiner, c'est offrir à quelqu'un le paysage d'une région
              dans une assiette. »
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">— Antoine Rochefort, chef & propriétaire</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signatures() {
  return (
    <section id="signatures" className="reveal relative bg-ink py-28 text-cream sm:py-40">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="chapter-num">— Chapitre II —</p>
          <span className="eyebrow mt-4 block text-cream/70">Les signatures</span>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] text-cream sm:text-6xl md:text-7xl">
            Les plats du <em className="not-italic italic text-gold">chef</em>.
          </h2>
          <div className="mx-auto mt-8 h-px w-16 bg-gold" />
          <p className="mx-auto mt-8 max-w-xl text-cream/70">
            Trois plats emblématiques qui racontent la maison depuis vingt-cinq ans —
            une géographie du Périgord, servie à la bougie.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {signatures.map((s, i) => (
            <article
              key={s.n}
              className={`grid gap-10 md:grid-cols-12 md:items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="relative md:col-span-7 md:[direction:ltr]">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute -left-2 -top-6 font-display text-[7rem] leading-none text-gold/80 sm:-left-6">{s.n}</span>
              </div>
              <div className="md:col-span-5 md:[direction:ltr]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Origine · {s.origin}</p>
                <h3 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">{s.name}</h3>
                <div className="mt-5 h-px w-12 bg-cream/30" />
                <p className="mt-6 leading-relaxed text-cream/75">{s.desc}</p>
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="font-display text-3xl text-gold">{s.price} €</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Servi le soir</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-cream/10 pt-10 text-center">
          <p className="font-display text-2xl italic text-cream/80">
            Menu déjeuner <span className="text-gold">28 €</span> · Menu dégustation <span className="text-gold">65 €</span> · Accord mets & vins <span className="text-gold">+ 35 €</span>
          </p>
          <a href="#reserver" className="btn-gold mt-10">Réserver une table</a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galerie" className="reveal py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <ChapterHeader
          n="III"
          eyebrow="Galerie"
          title={<>Un <em className="not-italic italic text-olive">instant</em> chez nous</>}
          kicker="Salle voûtée, cave à vins de Bergerac, jardin d'été et cuisine ouverte — la maison en quelques images."
        />
        <div className="mt-20 grid grid-cols-12 gap-4 sm:gap-6">
          <figure className="col-span-12 md:col-span-7">
            <div className="overflow-hidden">
              <img src={gal1} alt="Salle voûtée du restaurant" loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>N° 01 — La salle voûtée</span><span className="text-gold">↗</span>
            </figcaption>
          </figure>
          <figure className="col-span-6 md:col-span-5">
            <div className="overflow-hidden">
              <img src={produce} alt="Produits frais de saison" loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">N° 02 — Marché du matin</figcaption>
          </figure>
          <figure className="col-span-6 md:col-span-4">
            <div className="overflow-hidden">
              <img src={gal3} alt="Vin de Bergerac servi" loading="lazy" className="aspect-square w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">N° 03 — Château Monestier</figcaption>
          </figure>
          <figure className="col-span-6 md:col-span-4">
            <div className="overflow-hidden">
              <img src={gal2} alt="Dessert au chocolat" loading="lazy" className="aspect-square w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">N° 04 — Fondant Valrhona</figcaption>
          </figure>
          <figure className="col-span-12 md:col-span-4">
            <div className="overflow-hidden">
              <img src={gal4} alt="Plateau de fromages affinés" loading="lazy" className="aspect-square w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">N° 05 — Maîtres fromagers</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section id="reserver" className="reveal relative overflow-hidden bg-ink py-28 text-cream sm:py-40">
      <div className="absolute inset-0 grain" />
      <span className="pointer-events-none absolute -left-10 top-10 font-display text-[12rem] italic text-cream/5">Table</span>
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="chapter-num">— Chapitre IV —</p>
          <span className="eyebrow mt-4 block text-cream/70">Réservation</span>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] text-cream sm:text-6xl md:text-7xl">
            Votre table<br />vous <em className="not-italic italic text-gold">attend</em>.
          </h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <p className="mt-8 max-w-md leading-relaxed text-cream/75">
            Nous accueillons vingt-quatre convives par service.
            Pour une expérience à la hauteur, nous vous conseillons de
            réserver quelques jours à l'avance.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <div className="flex items-center gap-3 text-cream/80">
              <Phone className="h-4 w-4 text-gold" /> {RESTAURANT.phoneDisplay}
            </div>
            <div className="flex items-center gap-3 text-cream/80">
              <Mail className="h-4 w-4 text-gold" /> {RESTAURANT.email}
            </div>
          </div>
        </div>

        {/* mockup form card */}
        <div className="border border-cream/15 bg-ink/40 p-8 backdrop-blur-sm sm:p-12">
          <p className="eyebrow text-cream/70">Formulaire — service du soir</p>
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Field label="Date" value="Sam. 24 août" />
              <Field label="Heure" value="20:00" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Field label="Couverts" value="2 personnes" />
              <Field label="Occasion" value="Anniversaire" />
            </div>
            <Field label="Nom" value="Mme Fontaine" />
            <Field label="Téléphone" value="06 12 34 56 78" />
            <Field label="Message" value="Table près de la cheminée si possible." multiline />
            <button type="button" className="btn-gold w-full">Confirmer la réservation</button>
            <p className="text-center text-[11px] uppercase tracking-[0.3em] text-cream/50">Réponse sous 2 heures</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className="border-b border-cream/20 pb-3">
      <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{label}</p>
      <p className={`mt-2 font-display text-cream ${multiline ? "text-base italic" : "text-xl"}`}>{value}</p>
    </div>
  );
}

function Reviews() {
  return (
    <section id="avis" className="reveal py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <ChapterHeader
          n="V"
          eyebrow="Presse & avis Google"
          title={<>Ce qu'ils en <em className="not-italic italic text-olive">disent</em></>}
        />
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex gap-1 text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <span className="font-display text-3xl">4,8</span>
          <span className="text-sm text-muted-foreground">/ 5 · 312 avis</span>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={r.name} className="relative flex flex-col border border-border bg-card p-10">
              <span className="absolute -top-6 left-8 font-display text-7xl text-gold">“</span>
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-6 flex-1 font-display text-xl italic leading-relaxed text-foreground">
                {r.text}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-medium">{r.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{r.date} · Avis n° {i + 1}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practical() {
  return (
    <section className="reveal bg-secondary py-28 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="chapter-num">— Chapitre VI —</p>
          <span className="eyebrow mt-4 block">Horaires</span>
          <h2 className="mt-5 font-display text-5xl">Nous vous <em className="not-italic italic text-olive">accueillons</em></h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <ul className="mt-12 divide-y divide-border">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-4">
                <span className="font-display text-lg">{h.day}</span>
                <span className={`text-sm tracking-wide ${h.value === "Fermé" ? "text-muted-foreground italic" : "text-foreground"}`}>
                  {h.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">Nous trouver</span>
          <h2 className="mt-4 font-display text-5xl">Au cœur de <em className="not-italic italic text-olive">Bergerac</em></h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <div className="mt-12 aspect-[4/3] overflow-hidden border border-border">
            <iframe
              title="Carte — Au Bon Vivant, Bergerac"
              src="https://www.google.com/maps?q=Place+P%C3%A9lissi%C3%A8re+Bergerac&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale contrast-125"
            />
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" /> {RESTAURANT.address}
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="reveal py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ChapterHeader
          n="VII"
          eyebrow="Contact"
          title={<>À très <em className="not-italic italic text-olive">bientôt</em></>}
          kicker="Pour toute demande — réservation, événement privé, privatisation — nous vous répondons dans la journée."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className="group border border-border bg-card p-10 transition hover:border-gold">
            <Phone className="mx-auto h-5 w-5 text-olive transition group-hover:text-gold" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Téléphone</p>
            <p className="mt-3 font-display text-2xl">{RESTAURANT.phoneDisplay}</p>
          </a>
          <a href={`mailto:${RESTAURANT.email}`} className="group border border-border bg-card p-10 transition hover:border-gold">
            <Mail className="mx-auto h-5 w-5 text-olive transition group-hover:text-gold" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Email</p>
            <p className="mt-3 break-all font-display text-lg">{RESTAURANT.email}</p>
          </a>
          <div className="border border-border bg-card p-10">
            <MapPin className="mx-auto h-5 w-5 text-olive" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">Adresse</p>
            <p className="mt-3 font-display text-lg">{RESTAURANT.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-ink py-20 text-cream">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-display text-6xl italic sm:text-8xl">Au Bon Vivant</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-gold">Bergerac · Périgord · Depuis 1999</p>
        </div>
        <div className="mt-16 grid gap-10 border-t border-cream/10 pt-10 text-sm sm:grid-cols-3">
          <div>
            <p className="eyebrow text-cream/70">La maison</p>
            <p className="mt-4 leading-relaxed text-cream/70">{RESTAURANT.address}</p>
            <p className="mt-2 text-cream/70">{RESTAURANT.phoneDisplay}</p>
            <p className="text-cream/70">{RESTAURANT.email}</p>
          </div>
          <div>
            <p className="eyebrow text-cream/70">Horaires</p>
            <p className="mt-4 flex items-center gap-2 text-cream/70"><Clock className="h-4 w-4 text-gold" /> Mar – Sam · 12h – 22h30</p>
            <p className="mt-2 text-cream/70">Dimanche · déjeuner uniquement</p>
            <p className="text-cream/70">Fermé le lundi</p>
          </div>
          <div>
            <p className="eyebrow text-cream/70">Suivez-nous</p>
            <div className="mt-4 flex gap-4">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border border-cream/20 transition hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center border border-cream/20 transition hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
            </div>
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-cream/40">Michelin · Gault &amp; Millau · Routard</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.3em] text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Au Bon Vivant — Tous droits réservés</p>
          <p>Site conçu à Bergerac — avec soin</p>
        </div>
      </div>
    </footer>
  );
}

function Chef() {
  return (
    <section id="chef" className="relative overflow-hidden bg-ink py-28 text-cream sm:py-40">
      <div className="absolute inset-0 grain" />
      <span className="pointer-events-none absolute -right-6 top-16 hidden font-display text-[16rem] italic leading-none text-cream/[0.04] lg:block">
        Chef
      </span>
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:items-center">
        <div className="reveal md:col-span-6">
          <p className="chapter-num">— Chapitre I bis —</p>
          <span className="eyebrow mt-4 block text-cream/70">Le chef</span>
          <h2 className="mt-5 font-display text-5xl leading-[1.02] text-cream sm:text-6xl md:text-7xl">
            Antoine<br />
            <em className="not-italic italic text-gold">Rochefort.</em>
          </h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <div className="mt-10 space-y-6 leading-relaxed text-cream/75">
            <p className="text-lg">
              Formé dans les grandes maisons de Bordeaux et de Lyon, Antoine
              revient au pays en 1999 pour ouvrir sa propre table — celle
              du souvenir, celle de la famille, celle du Périgord.
            </p>
            <p>
              Vingt-cinq ans plus tard, le geste est intact : cuissons lentes,
              sauces montées à la minute, respect absolu du produit. Chaque
              plat porte la signature d'une main patiente.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.32em] text-gold">Formation</dt>
              <dd className="mt-2 font-display text-xl text-cream">Bordeaux · Lyon</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.32em] text-gold">Distinctions</dt>
              <dd className="mt-2 font-display text-xl text-cream">2 toques</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.32em] text-gold">Aux fourneaux</dt>
              <dd className="mt-2 font-display text-xl text-cream">Depuis 1999</dd>
            </div>
          </dl>
        </div>

        <div className="reveal-slow relative md:col-span-6">
          <img
            src={chefPortrait}
            alt="Portrait du chef Antoine Rochefort en cuisine"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -left-4 hidden bg-gold px-6 py-4 sm:block">
            <p className="font-display text-3xl italic text-ink">« Le geste juste. »</p>
          </div>
          <span className="absolute left-4 top-4 bg-ink/80 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-cream">
            Portrait · Été 2024
          </span>
        </div>
      </div>
    </section>
  );
}
