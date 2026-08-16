import { Phone, Mail, User, MessageSquare, Send } from "lucide-react";
import { phoneNumber, siteName } from "@/lib/products";

export function Contact() {
  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Свържете се с нас
            </h2>
            <p className="mt-4 text-muted-foreground">
              Имате въпроси или искате да направите поръчка? Позвънете директно или изпратете
              съобщение — ще отговорим възможно най-скоро.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`tel:+359${phoneNumber.replace(/^0/, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {phoneNumber}
                  </p>
                </div>
              </a>

            </div>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = data.get("name");
              const email = data.get("email");
              const message = data.get("message");
              const body = encodeURIComponent(
                `Запитване от ${siteName}\n\nИме: ${name}\nИмейл: ${email}\n\nСъобщение:\n${message}`,
              );
              window.location.href = `mailto:?subject=Запитване от ${siteName}&body=${body}`;
            }}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Вашето име
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Иван Иванов"
                    className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-foreground outline-none ring-offset-background transition-all focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Имейл или телефон
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    placeholder="email@example.com или 088..."
                    className="w-full rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-foreground outline-none ring-offset-background transition-all focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Съобщение
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Какви продукти и количества ви интересуват?"
                    className="w-full resize-none rounded-xl border border-input bg-background py-3 pl-10 pr-4 text-foreground outline-none ring-offset-background transition-all focus:border-primary focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                Изпрати запитване
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
