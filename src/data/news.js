import jeannelleImage from "../assets/images/Jeannelle.jpg";
import Calendar from "../assets/images/Calendrier.jpg";

export const newsData = [
  {
    title:
      "Réservez votre moment de douceur parmi une sélection de prestations",
    date: "",
    description: "Retrouvez-moi à Millas, les samedis, sur rendez-vous.",
    image: Calendar,
    imageAlt: "Calendrier",
    isNew: true,
    link: "https://www.sumupbookings.com/linstant-soleana",
    linkText: "Réservez",
  },
  {
    title: "Retrouvez L'Instant Soleana chez Jeannelle",
    date: "",
    description:
      "L'Instant Soleana vous propose ses prestations chez Jeannelle, à Millas.",
    image: jeannelleImage,
    imageAlt: "Jeannelle",
    isNew: false,
    link: "/jeannelle",
    linkText: "En savoir plus",
  },
];
