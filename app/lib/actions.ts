"use server";

import { z } from "zod";
import { Resend } from 'resend';
import { EmailSelfTemplate, EmailSenderTemplate } from "@/app/ui/contact-email-templates";

const FormSchema = z.object({
    name: z.string().min(1, { error: "Name is required" }),
    email: z.email({ error: "Invalid email address" }),
    message: z.string().min(10, { error: "Message is too short" }).max(1000, { error: "Message is too long" })
});

export type ContactFormState = {
    message?: string | null;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    });

    if (!validatedFields.success) {
        return {
            errors: z.flattenError(validatedFields.error).fieldErrors,
            message: null
        }
    }

    const { name, email, message } = validatedFields.data;

    try {
        await resend.emails.send({
            from: "Joachim <joachim@contact.joac1144.com>",
            to: "jak-ak-k@hotmail.com",
            subject: `New message from ${name}`,
            react: EmailSelfTemplate({ name, email, message })
        });

        await resend.emails.send({
            from: "Joachim <joachim@contact.joac1144.com>",
            to: email,
            subject: `Thank you for reaching out, ${name}!`,
            react: EmailSenderTemplate({ name, message })
        });

        return { message: "success" };
    }
    catch (error) {
        console.error("Error sending email:", error);
        return { message: `error: ${error}` };
    }
}