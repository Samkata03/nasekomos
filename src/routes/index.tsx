import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Delivery } from "@/components/Delivery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "nasekomos — жива храна за домашни любимци" },
      {
        name: "description",
        content:
          "nasekomos предлага качествена жива храна за домашни любимци: брашнян червей, морио, хлебарки и скакалци. Доставка с Еконт от Ангел Маркузов.",
      },
      {
        property: "og:title",
        content: "nasekomos — жива храна за домашни любимци",
      },
      {
        property: "og:description",
        content:
          "Качествена жива храна за влечуги, птици и други любимци. Брашнян червей, морио, хлебарки и скакалци. Доставка с Еконт.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
