import { Phone, Leaf, Truck, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { phoneNumber, siteName } from "@/lib/products";

const benefits = [
  { icon: Leaf, label: "Пресни и здрави", description: "Отглеждани с грижа" },
  { icon: Truck, label: "Доставка с Еконт", description: "До цялата страна" },
  { icon: ShieldCheck, label: "Качествена храна", description: "Богата на протеин" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Влечуги до контейнери с жива храна в зелена горска среда"
          className="h-full w-full object-cover"
          width={1536}
          height={768}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">{siteName}</p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
            Жива храна за здрави любимци
          </h1>
          <p className="mt-6 text-lg text-cream/90 sm:text-xl">
            Предлагаме качествени живи насекоми за влечуги, птици и други домашни любимци — брашнян
            червей, морио, хлебарки и скоро скакалци.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-leaf px-6 py-3 text-base font-semibold text-cream transition-colors hover:bg-leaf/90"
            >
              Виж продуктите
            </a>
            <a
              href={`tel:+359${phoneNumber.replace(/^0/, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/30 bg-cream/10 px-6 py-3 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/10 bg-forest/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf/20">
                  <benefit.icon className="h-6 w-6 text-sage" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-cream">{benefit.label}</p>
                  <p className="text-sm text-cream/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
