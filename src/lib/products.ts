import mealwormsImg from "../assets/mealworms.jpg";
import morioImg from "../assets/morio.jpg";
import cockroachesImg from "../assets/cockroaches.jpg";
import grasshoppersImg from "../assets/grasshoppers.jpg";

export interface Product {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  benefits: string[];
  image: string;
  available: boolean;
  comingSoon?: boolean;
}

export const products: Product[] = [
  {
    id: "mealworms",
    name: "Брашнян червей",
    scientificName: "Tenebrio molitor",
    description:
      "Класическа и любима жива храна за влечуги, птици, рибки и малки бозайници. Лесен за усвояване, богат на протеини и подходящ за ежедневно хранене.",
    benefits: ["Високо съдържание на протеин", "Лесен за отглеждане", "Подходящ за повечето влечуги"],
    image: mealwormsImg,
    available: true,
  },
  {
    id: "morio",
    name: "Морио",
    scientificName: "Zophobas morio",
    description:
      "По-големи и по-мазни от брашния червей, морио ларвите са отличен избор за по-едри влечуги като бородати агами и големи гекони.",
    benefits: ["По-висока мазнина", "По-голям размер", "Енергийна храна"],
    image: morioImg,
    available: true,
  },
  {
    id: "cockroaches",
    name: "Хлебарки",
    scientificName: "Blaptica dubia",
    description:
      "Дубия хлебарките са един от най-добрите източници на протеин за влечуги. Тихи, непретенциозни и безопасни за домашния терариум.",
    benefits: ["Богати на протеин", "Тихи и спокойни", "Добро съотношение месо/котка"],
    image: cockroachesImg,
    available: true,
  },
  {
    id: "grasshoppers",
    name: "Скакалци",
    scientificName: "Locusta migratoria",
    description:
      "Скакалците добавят разнообразие към менюто на вашите любимци. Очаквайте скоро в нашата оферта.",
    benefits: ["Разнообразие в храненето", "Висока хранителна стойност", "Естествена храна"],
    image: grasshoppersImg,
    available: false,
    comingSoon: true,
  },
];

export const phoneNumber = "0897880112";
export const ownerName = "Ангел Маркузов";
export const siteName = "nasekomos";
