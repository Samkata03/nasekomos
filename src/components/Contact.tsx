import { Phone } from "lucide-react";
import { phoneNumber } from "@/lib/products";

export function Contact() {
  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Свържете се с нас
          </h2>
          <p className="mt-4 text-muted-foreground">
            Имате въпроси или искате да направите поръчка? Позвънете директно — ще отговорим
            възможно най-скоро.
          </p>

          <a
            href={`tel:+359${phoneNumber.replace(/^0/, "")}`}
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-8 py-5 transition-colors hover:border-primary/30"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-7 w-7 text-primary" aria-hidden="true" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Телефон за поръчки</p>
              <p className="font-heading text-2xl font-semibold text-foreground">{phoneNumber}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
