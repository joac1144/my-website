import ContactForm from "@/app/ui/forms/contact-form";

export default function Page() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-12">

            <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

            <p className="text-gray-400 mb-6">
                Feel free to connect with me on{" "}
                <a
                    href="https://www.linkedin.com/in/joachimakofoed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-500 transition"
                >
                    LinkedIn
                </a>
                , or send me a message using the form below.
            </p>
            <ContactForm />
        </div>
    );
}