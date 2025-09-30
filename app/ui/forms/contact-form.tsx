"use client";

import { useActionState } from "react";
import Input from "@/app/ui/forms/input";
import { sendContactForm, ContactFormState } from "@/app/lib/actions";
import FormError from "@/app/ui/forms/form-error";

export default function ContactForm() {
    const initialState: ContactFormState = { message: null, errors: {} };
    const [formState, formAction] = useActionState(sendContactForm, initialState);

    return (
        <div className="rounded shadow-md shadow-purple-800/40 p-8 ring-1 ring-purple-500/40">
                <form action={formAction} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-300 mb-1">
                            Name
                        </label>
                        <Input id="name" name="name" ariaDescribedBy="name-error" />
                        <FormError id="name-error" errors={formState.errors?.name} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-300 mb-1">
                            Email
                        </label>
                        <Input id="email" name="email" type="email" ariaDescribedBy="email-error" />
                        <FormError id="email-error" errors={formState.errors?.email} />
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-medium text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            aria-describedby="message-error"
                            className="w-full rounded-lg bg-black/5 border border-purple-700/50 text-gray-200 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <FormError id="message-error" errors={formState.errors?.message} />
                        <span className="text-gray-300 text-sm">You will receive a confirmation email with your message.</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-purple-800/50 text-white font-medium rounded-xl shadow-md hover:bg-purple-600/60 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
    );
}