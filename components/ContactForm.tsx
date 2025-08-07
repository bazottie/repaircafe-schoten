"use client"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HTMLAttributes, useState } from 'react';
import { sendEmail } from '@/app/contact/action';
import { cn } from '@/lib/utils';

export const contactFormSchema = z.object({
    name: z.string().min(2, {
        message: "Vul uw naam in.",
    }),
    email: z.string().email({
        message: "Vul een geldig e-mailadres in.",
    }),
    message: z.string().min(10, {
        message: "Een bericht moet minimaal 10 karakters bevatten.",
    })
})

interface Props extends HTMLAttributes<HTMLFormElement> {

}

export function ContactForm({ ...props }: Props) {
    const [isPending, setIsPending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof contactFormSchema>) {
        setIsPending(true);
        setSuccess(false);
        setFailed(false);
        const response = await sendEmail(values)
        if (response.success) {
            setSuccess(true);
            form.reset();
        } else {
            setFailed(true);
            console.error("Error sending email:", response.error);
        }
        setIsPending(false);
    }

    return (
        <Form {...form}>
            <form
                {...props}
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("not-prose space-y-8 p-4 rounded-xl container bg-accent", {
                    "border border-red-500": failed,
                    "border border-green-500": success,
                    "opacity-50 pointer-events-none": isPending,
                })}
            >
                <h3 className="text-black font-bold text-lg">Contactformulier</h3>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">Naam</FormLabel>
                            <FormControl>
                                <Input placeholder="Naam" {...field} />
                            </FormControl>
                            <FormDescription>
                                Vul hier uw naam in zodat we weten hoe we u kunnen aanspreken.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">E-mailadres</FormLabel>
                            <FormControl>
                                <Input placeholder="E-mailadres" type="email" {...field} />
                            </FormControl>
                            <FormDescription>
                                Vul hier uw e-mailadres in zodat we u kunnen bereiken.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-black">Bericht</FormLabel>
                            <FormControl>
                                <Input placeholder="Ik heb een vraag over..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Laat hier een bericht achter zodat we u kunnen helpen.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    disabled={isPending}
                    className={cn({
                        "bg-green-200 border border-green-500 text-green-800 hover:bg-green-300": success,
                        "bg-red-200 border border-red-500 text-red-800 hover:bg-red-300": failed,
                        "bg-blue-500 hover:bg-blue-600 text-white": !success && !failed && !isPending,
                    })}
                    type="submit"
                >
                    Versturen
                </Button>
                {success && (
                    <p className="text-green-800">Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u
                        op.</p>
                )}
                {failed && (
                    <p className="text-red-800">Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het
                        later opnieuw.</p>
                )}
            </form>
        </Form>
    )
}