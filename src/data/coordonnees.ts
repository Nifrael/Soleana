export const telephone = {
  affiche: "06 25 48 78 61",
  lien: "tel:+33625487861",
};

export const email = "linstant.soleana@gmail.com";

export const jeannelle = {
  adresse: "18 rue Lieutenant Basseras, 66170 Millas",
  horaires: "Le samedi, sur rendez-vous.",
  site: "https://www.jeannelle.me",
};

export const zone = {
  titre: "À domicile ou au Soler",
};

export const localisation = {
  rue: "28 rue des Arbousiers",
  ville: "Le Soler",
  codePostal: "66270",
  departement: "Pyrénées-Orientales",
};

export const adresse = `${localisation.rue}, ${localisation.codePostal} ${localisation.ville}`;

const ouverture = "09:00";
const fermeture = "20:00";

export const horaires = {
  jours: "Du lundi au samedi",
  heures: `De ${Number.parseInt(ouverture)} h à ${Number.parseInt(fermeture)} h`,
  joursSemaine: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  ouverture,
  fermeture,
};

export const praticienne = "Soledad Barranco";
