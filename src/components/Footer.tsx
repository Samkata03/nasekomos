import { Bug, Phone } from "lucide-react";
import { phoneNumber, siteName } from "@/lib/products";

const footerLinks = [
  { href: "#products", label: "Продукти" },
  { href: "#about", label: "За нас" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contact", label: "Контакт" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-forest py-12 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2 text-cream">
              <Bug className="h-6 w-6 text-sage" aria-hidden="true" />
              <span className="font-heading text-xl font-bold tracking-tight">{siteName}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Качествена жива храна за домашни любимци. Брашнян червей, морио, хлебарки и скакалци.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-cream">Бързи връзки</h3>
            <nav className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-cream">Контакти</h3>
            <div className="mt-4 space-y-2 text-sm text-cream/70">
              <a
                href={`tel:+359${phoneNumber.replace(/^0/, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-cream"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-sm text-cream/50">
          © {currentYear} {siteName}. Всички права запазени.
        </div>
      </div>
    </footer>
  );
}
