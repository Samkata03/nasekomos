import { Check, Clock, Package } from "lucide-react";
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

                {product.packaging && (
                  <div className="mt-5 rounded-xl border border-border bg-background/50 p-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Package className="h-4 w-4 text-leaf" aria-hidden="true" />
                      Опаковка
                    </div>
                    <ul className="mt-2 space-y-2">
                      {product.packaging.map((option) => (
                        <li
                          key={option.label}
                          className="flex items-start justify-between gap-3 text-sm"
                        >
                          <span className="text-foreground/80">
                            {option.label}
                            {option.note && (
                              <span className="ml-1 text-xs text-muted-foreground">
                                ({option.note})
                              </span>
                            )}
                          </span>
                          <span className="shrink-0 font-semibold text-forest">{option.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.details && (
                  <details className="mt-4 rounded-xl border border-border bg-background/50">
                    <summary className="cursor-pointer list-none p-3 text-sm font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between">
                        Повече информация
                        <svg
                          className="h-4 w-4 text-muted-foreground transition-transform group-open/details:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="space-y-3 px-3 pb-3">
                      {product.details.map((detail) => (
                        <div key={detail.title}>
                          <h4 className="text-sm font-semibold text-foreground">{detail.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {detail.content}
                          </p>
                        </div>
                      ))}
                      {product.extraInfo && (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {product.extraInfo}
                        </p>
                      )}
                    </div>
                  </details>
                )}

                {product.available ? (
                  <a
                    href={`tel:+359${phoneNumber.replace(/^0/, "")}`}
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
