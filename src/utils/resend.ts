"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "./validations/contactSchema";
import { EmailTemplate } from "@/components/contact/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  emailFormData: z.infer<typeof contactSchema>
) => {
  try {
    const { error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: `${process.env.RESEND_TO_EMAIL}`,
      subject: `${emailFormData.subject}`,
      react: EmailTemplate({
        name: emailFormData.name,
        email: emailFormData.email,
        subject: emailFormData.subject,
        message: emailFormData.message,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
