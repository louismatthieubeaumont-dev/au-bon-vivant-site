import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Mail, Star, Utensils, Leaf, ChefHat } from "lucide-react";

import hero from "@/assets/hero.jpg";
import chef from "@/assets/chef.jpg";
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
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "312",
          },
        }),
      },
    ],
  }),
});

const menu = {
  entrees: [
    { name: "Foie gras mi-cuit du Périgord", desc: "Chutney de figues, pain d'épices maison", price: "22" },
    { name: "Œuf parfait", desc: "Cèpes de nos bois, émulsion au comté affiné", price: "18" },
    { name: "Salade de gésiers confits", desc: "Salade du marché, noix de Grenoble, vieux vinaigre", price: "16" },
  ],
  plats: [
    { name: "Magret de canard rôti", desc: "Sauce au Bergerac rouge, gratin dauphinois", price: "32" },
    { name: "Filet de bœuf du Limousin", desc: "Pommes grenaille, jus corsé aux échalotes", price: "38" },
    { name: "Sandre de la Dordogne", desc: "Beurre blanc, légumes racines de saison", price: "28" },
  ],
  desserts: [
    { name: "Fondant au chocolat Valrhona", desc: "Cœur coulant, glace vanille bourbon", price: "12" },
    { name: "Tarte fine aux pommes", desc: "Caramel au beurre salé, chantilly maison", price: "11" },
    { name: "Assiette de fromages affinés", desc: "Sélection de nos maîtres fromagers", price: "14" },
  ],
};

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

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Cuisine />
      <MenuSection />
      <Gallery />
      <Reviews />
      <Practical />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-xl tracking-wide text-cream">
          Au Bon Vivant
          <span className="ml-2 text-[10px] uppercase tracking-[0.32em] text-gold">Bergerac</span>
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-cream/80 md:flex">
          <a href="#histoire" className="transition hover:text-gold">Histoire</a>
          <a href="#menu" className="transition hover:text-gold">Menu</a>
          <a href="#galerie" className="transition hover:text-gold">Galerie</a>
          <a href="#avis" className="transition hover:text-gold">Avis</a>
          <a href="#contact" className="transition hover:text-gold">Contact</a>
        </nav>
        <a href="#reserver" className="btn-gold hidden sm:inline-flex">Réserver</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Salle du restaurant Au Bon Vivant à Bergerac"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="gold-rule" />
          <span className="eyebrow">Restaurant gastronomique · Bergerac</span>
          <span className="gold-rule" />
        </div>
        <h1 className="font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          L'art de la table,<br />
          <em className="font-normal not-italic text-gold">à la française.</em>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base text-cream/80 sm:text-lg">
          Cuisine traditionnelle faite maison, produits frais de saison
          et savoir-faire du Périgord au cœur de Bergerac.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#reserver" className="btn-gold">Réserver une table</a>
          <a href="#menu" className="btn-outline-cream">Découvrir le menu</a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-cream/70">
          <div className="flex gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="ml-2">4,8 · 312 avis Google</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, kicker }: { eyebrow: string; title: React.ReactNode; kicker?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
      {kicker && <p className="mt-5 text-muted-foreground">{kicker}</p>}
      <div className="mx-auto mt-6 h-px w-16 bg-gold" />
    </div>
  );
}

function Story() {
  return (
    <section id="histoire" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img
            src={chef}
            alt="Le chef à l'œuvre en cuisine"
            width={1200}
            height={1400}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden bg-olive-dark px-8 py-6 text-cream sm:block">
            <p className="font-serif text-4xl text-gold">25</p>
            <p className="text-xs uppercase tracking-[0.2em]">années de passion</p>
          </div>
        </div>
        <div>
          <span className="eyebrow">Notre histoire</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Une maison,<br />une <em className="not-italic text-olive">tradition</em>.
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Depuis 1999, Au Bon Vivant perpétue au cœur de Bergerac l'art
              d'une cuisine française sincère, patiente et généreuse.
              Une adresse où l'on prend le temps.
            </p>
            <p>
              Notre chef s'entoure des meilleurs producteurs du Périgord —
              maraîchers, éleveurs, vignerons — pour bâtir chaque jour une
              carte fidèle aux saisons et au terroir.
            </p>
            <p>
              Dans un décor de pierre et de bois, éclairé à la bougie, nous
              cultivons une hospitalité chaleureuse : celle qui transforme
              un dîner en souvenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cuisine() {
  const items = [
    { icon: Leaf, title: "Produits frais", text: "Légumes du marché et herbes de nos jardins, sélectionnés chaque matin." },
    { icon: ChefHat, title: "Fait maison", text: "Pains, sauces, glaces et pâtisseries élaborés au sein de nos cuisines." },
    { icon: Utensils, title: "Terroir du Périgord", text: "Foie gras, canard, truffe et vins de Bergerac : le meilleur de la région." },
  ];
  return (
    <section className="bg-olive-dark py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <span className="eyebrow">Cuisine & produits</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream sm:text-5xl">
            Le goût du <em className="not-italic text-gold">vrai</em>.
          </h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-8 leading-relaxed text-cream/75">
            Une grande cuisine commence par une matière première irréprochable.
            Chaque assiette raconte le travail d'un producteur, la précision
            d'un geste, la fidélité à une recette transmise.
          </p>
          <div className="mt-10 space-y-6">
            {items.map((it) => (
              <div key={it.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-cream">{it.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 grid grid-cols-2 gap-4 md:order-2">
          <img src={produce} alt="Produits frais de saison" width={1200} height={1400} loading="lazy" className="aspect-[3/4] w-full object-cover" />
          <img src={dish1} alt="Plat gastronomique dressé" width={1000} height={1200} loading="lazy" className="mt-10 aspect-[3/4] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Notre carte"
          title={<>Le menu du <em className="not-italic text-olive">chef</em></>}
          kicker="Une carte renouvelée au fil des saisons, accompagnée d'une sélection de vins de Bergerac et du Sud-Ouest."
        />
        <div className="mt-16 grid gap-14 md:grid-cols-3">
          {(["entrees", "plats", "desserts"] as const).map((cat) => (
            <div key={cat}>
              <h3 className="mb-8 text-center font-serif text-2xl">
                {cat === "entrees" ? "Entrées" : cat === "plats" ? "Plats" : "Desserts"}
              </h3>
              <div className="mx-auto mb-8 h-px w-10 bg-gold" />
              <ul className="space-y-7">
                {menu[cat].map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline gap-3">
                      <h4 className="font-serif text-lg text-foreground">{item.name}</h4>
                      <span className="flex-1 border-b border-dotted border-border" />
                      <span className="font-serif text-lg text-olive">{item.price} €</span>
                    </div>
                    <p className="mt-1 text-sm italic text-muted-foreground">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Menu déjeuner à <span className="font-medium text-olive">28 €</span> · Menu dégustation à <span className="font-medium text-olive">65 €</span>
          </p>
          <a href="#reserver" className="btn-gold mt-8">Réserver une table</a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: gal1, alt: "Salle du restaurant", span: "row-span-2" },
    { src: gal2, alt: "Dessert au chocolat" },
    { src: gal3, alt: "Vin de Bergerac servi" },
    { src: gal4, alt: "Plateau de fromages affinés", span: "col-span-2" },
  ];
  return (
    <section id="galerie" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Galerie" title={<>Un <em className="not-italic text-olive">instant</em> chez nous</>} />
        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden ${img.span ?? ""}`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="avis" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Avis Google" title={<>Ce qu'ils en <em className="not-italic text-olive">disent</em></>} />
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="font-serif text-2xl">4,8</span>
          <span className="text-sm text-muted-foreground">/ 5 · 312 avis</span>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col border border-border bg-card p-8">
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-foreground">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
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
    <section className="bg-olive-dark py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Horaires</span>
          <h2 className="mt-4 font-serif text-4xl text-cream">Nous vous accueillons</h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <ul className="mt-10 divide-y divide-cream/10">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3.5">
                <span className="text-cream/90">{h.day}</span>
                <span className={`font-serif text-lg ${h.value === "Fermé" ? "text-cream/40" : "text-gold"}`}>
                  {h.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="eyebrow">Nous trouver</span>
          <h2 className="mt-4 font-serif text-4xl text-cream">Au cœur de Bergerac</h2>
          <div className="mt-6 h-px w-16 bg-gold" />
          <div className="mt-10 aspect-[4/3] overflow-hidden border border-cream/10">
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
          <p className="mt-5 text-sm text-cream/70">{RESTAURANT.address}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div id="reserver" className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeader
          eyebrow="Réservation & Contact"
          title={<>Réservez votre <em className="not-italic text-olive">table</em></>}
          kicker="Pour toute réservation, appelez-nous directement ou écrivez-nous — nous vous répondons dans la journée."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className="border border-border bg-card p-8 transition hover:border-gold">
            <Phone className="mx-auto h-6 w-6 text-olive" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Téléphone</p>
            <p className="mt-2 font-serif text-xl">{RESTAURANT.phoneDisplay}</p>
          </a>
          <a href={`mailto:${RESTAURANT.email}`} className="border border-border bg-card p-8 transition hover:border-gold">
            <Mail className="mx-auto h-6 w-6 text-olive" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
            <p className="mt-2 break-all font-serif text-base">{RESTAURANT.email}</p>
          </a>
          <div className="border border-border bg-card p-8">
            <MapPin className="mx-auto h-6 w-6 text-olive" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Adresse</p>
            <p className="mt-2 font-serif text-base">{RESTAURANT.address}</p>
          </div>
        </div>
        <a href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`} className="btn-gold mt-14">
          Réserver une table
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-serif text-lg text-foreground">Au Bon Vivant</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">Bergerac · depuis 1999</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Clock className="h-4 w-4" />
          Fermé le lundi
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Au Bon Vivant. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
