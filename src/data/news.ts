import type { ImageMetadata } from "astro";
import type { NomIcone } from "../components/ui/Icone.astro";
import jeannelleImage from "../assets/images/Jeannelle.jpg";
import soinsImage from "../assets/images/Soins-Soleana.jpg";
import { reservation, bonCadeau } from "./navigation.js";

type Visuel = { image: ImageMetadata; alt: string; lieu: string };

type Bouton = { href: string; texte: string; icone: NomIcone };

type Actualite = {
  categorie: string;
  icone: NomIcone;
  title: string;
  description: string;
  isNew: boolean;
  visuel: Visuel;
  boutons: Bouton[];
};

export const newsData: Actualite[] = [
  {
    categorie: "Idée cadeau",
    icone: "cadeau",
    title: "Offrez un moment de douceur à un proche",
    description:
      "Faites plaisir avec un bon cadeau L'Instant Soleana, à commander en ligne en quelques clics.",
    isNew: true,
    visuel: {
      image: soinsImage,
      alt: "Bougies allumées, serviette roulée et diffuseur de parfum",
      lieu: "À domicile • Perpignan et alentours",
    },
    boutons: [{ href: bonCadeau.href, texte: "Offrir", icone: "cadeau" }],
  },
  {
    categorie: "Lieu partenaire d'exception",
    icone: "boutique",
    title: "Retrouvez L'Instant Soleana chez Jeannelle",
    description:
      "L'Instant Soleana vous propose ses prestations chez Jeannelle, à Millas. Une collaboration pensée pour vous accueillir dans un écrin authentique et apaisant.",
    isNew: false,
    visuel: {
      image: jeannelleImage,
      alt: "Devanture de l'espace Jeannelle à Millas",
      lieu: "Espace Jeannelle • Millas",
    },
    boutons: [
      { href: reservation.href, texte: "Réservez", icone: "calendrier" },
      { href: "/jeannelle/", texte: "Plus d'infos", icone: "oeil" },
    ],
  },
];
