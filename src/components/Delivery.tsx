import { Truck, Package, MapPin, Phone } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Свържете се с нас",
    description: "Позвънете, за да заявите желаните продукти и количества.",
  },
  {
    icon: Package,
    title: "Внимателно опаковане",
    description: "Опаковаме насекомите така, че да пристигнат живи и в добро състояние.",
  },
  {
    icon: Truck,
    title: "Доставка с Еконт",
    description: "Изпращаме с Еконт до офис или личен адрес в цялата страна.",
  },
  {
    icon: MapPin,
    title: "Получавате поръчката",
    description: "Плащане при получаване. Бързо, лесно и сигурно.",
  },
];

export function Delivery() {
  return (
    <section id="delivery" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Доставка с Еконт
          </h2>
          <p className="mt-4 text-muted-foreground">
            Изпращаме поръчки до цялата страна. Всяка пратка е опакована с грижа, за да запазим
            насекомите живи и свежи.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf text-xs font-bold text-cream">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
