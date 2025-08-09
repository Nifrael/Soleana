import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

const nameRegex = /^[a-zA-Zà-ÿÀ-Ÿ' -]+$/;
const phoneRegex = /^(\+)?[\d. ]{10,20}$/;

export const server = {
  contact: defineAction({
    input: z.object({
      name: z
        .string()
        .min(3, "Le nom doit contenir au moins 3 caractères.")
        .regex(nameRegex, "Le nom contient des caractères non autorisés."),
      email: z.string().email("L'adresse e-mail n'est pas valide."),
      message: z.string().min(20, "Le message doit contenir au moins 20 caractères."),
      phoneNumber: z
        .string()
        .regex(phoneRegex, "Le format du numéro de téléphone est invalide.")
        .optional(),
    }),

    handler: async (input) => {
      console.log("Nouvelle demande de contact reçue :");
      console.log("Nom:", input.name);
      console.log("Email:", input.email);
      console.log("Message:", input.message);
      console.log("Numéro de téléphone:", input.phoneNumber);



      // On retourne un message de succès.
      // Ce message pourra être affiché à l'utilisateur.
      return {
        success: true,
        message: "Votre message a bien été envoyé !",
      };
    },
  }),
};