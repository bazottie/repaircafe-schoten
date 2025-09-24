"use server";
import { Resend } from 'resend';
import { z } from 'zod';
import { contactFormSchema } from '@/components/ContactForm';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({name, email, message}: z.infer<typeof contactFormSchema>) {
    console.log({ name, email, message });
    try {
        const { data, error } = await resend.emails.send({
            from: `${name} <noreply@repaircafe-schoten.nl>`,
            to: ['repair.schoten@gmail.com'],
            subject: `${name} via contactformulier`,
            react: EmailTemplate({ name, message, mailto: email }),
        });

        if (error) {
            return {error, status: 500};
        }

        return { data, success: true, status: 200 };
    } catch (error) {
        return {error, status: 500};
    }
}