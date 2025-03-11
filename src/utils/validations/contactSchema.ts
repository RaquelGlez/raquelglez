import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe ser de al menos 3 caracteres",
  }),
  email: z.string().email({
    message: "Ingresa un correo valido",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe ser de al menos 5 caracteres",
  }),
  message: z.string().min(5, {
    message: "El mensaje debe ser de al menos 5 caracteres",
  }),
});
