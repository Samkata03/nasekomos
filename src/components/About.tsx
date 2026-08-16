import { Heart, Sprout, Recycle } from "lucide-react";
import { siteName } from "@/lib/products";

const values = [
  {
    icon: Sprout,
    title: "Отглеждане с грижа",
    description: "Насекомите се отглеждат в чиста и подходяща среда, с правилно хранене и хигиена.",
  },
  {
    icon: Heart,
    title: "Грижа за любимците",
    description: "Вярваме, че качествената храна е основа за здрави и щастливи домашни любимци.",
  },
  {
    icon: Recycle,
    title: "Устойчив подход",
    description:
      "Насекомите са ефективен и екологичен източник на протеин с малък екологичен отпечатък.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              За {siteName}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {siteName} е малък български бизнес, създаден от любов към влечугите и желанието да се
              предложи качествена, свежа и достъпна жива храна. Всички продукти се отглеждат
              внимателно, за да достигнат до вас здрави и питателни.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Независимо дали отглеждате бородата агама, гекон, папагал или друго животинче, при нас
              ще намерите подходяща храна за него.
            </p>

          </div>

          <div className="grid gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <value.icon className="h-6 w-6 text-secondary-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
