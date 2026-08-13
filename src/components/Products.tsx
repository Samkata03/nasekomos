import { Check, Clock } from "lucide-react";
import { products, phoneNumber } from "@/lib/products";

export function Products() {
  return (
    <section id="products" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Нашите продукти
          </h2>
          <p className="mt-4 text-muted-foreground">
            Всички насекоми се отглеждат при подходящи условия, за да бъдат здрави, питателни и
            безопасна храна за вашите любимци.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1024}
                  height={1024}
                  loading="lazy"
                />
                {product.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-forest/60 backdrop-blur-[2px]">
                    <span className="rounded-full bg-cream px-4 py-1.5 text-sm font-semibold text-forest">
                      Очаквайте скоро
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium italic text-muted-foreground">
                  {product.scientificName}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {product.available ? (
                  <a
                    href={`tel:+359${phoneNumber.replace(/^0, "")}`}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Поръчай по телефона
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-muted px-4 py-2.5 text-sm font-semibold text-muted-foreground"
                  >
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    Очаквайте скоро
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
