import type { ImageMetadata } from "astro";
import type { NomIcone } from "../components/ui/Icone.astro";
import jeannelleImage from "../assets/images/Jeannelle.jpg";
import { reservation } from "./navigation.js";

// Chaque actualité a un visuel :
// - "calendrier" : illustration décorative, sans vraies dates. `jour` est la colonne
//   mise en avant (0 = lundi … 6 = dimanche) ;
// - "image" : photo arrondie, avec le lieu en surimpression.
type Visuel =
  | {
      type: "calendrier";
      titre: string;
      lieu: string;
      mention: string;
      jour: number;
    }
  | { type: "image"; image: ImageMetadata; alt: string; lieu: string };

type Actualite = {
  categorie: string;
  icone: NomIcone;
  title: string;
  description: string;
  isNew: boolean;
  visuel: Visuel;
  link?: string;
  linkText: string;
  boutonIcone: NomIcone;
};

export const newsData: Actualite[] = [
  {
    categorie: "Rendez-vous hebdomadaire",
    icone: "calendrier",
    title:
      "Réservez votre moment de douceur parmi une sélection de prestations",
    description:
      "Retrouvez-moi à Millas, les samedis, sur rendez-vous. Profitez d'un créneau dédié à la détente dans un espace spécialement agencé.",
    isNew: true,
    visuel: {
      type: "calendrier",
      titre: "Samedis du mois",
      lieu: "Millas",
      mention: "Créneaux ouverts",
      jour: 5,
    },
    link: reservation.href,
    linkText: "Réserver",
    boutonIcone: "calendrier",
  },
  {
    categorie: "Lieu partenaire d'exception",
    icone: "boutique",
    title: "Retrouvez L'Instant Soleana chez Jeannelle",
    description:
      "L'Instant Soleana vous propose ses prestations chez Jeannelle, à Millas. Une collaboration pensée pour vous accueillir dans un écrin authentique et apaisant.",
    isNew: false,
    visuel: {
      type: "image",
      image: jeannelleImage,
      alt: "Devanture de l'espace Jeannelle à Millas",
      lieu: "Espace Jeannelle • Millas",
    },
    link: "/jeannelle",
    linkText: "En savoir plus",
    boutonIcone: "oeil",
  },
];
