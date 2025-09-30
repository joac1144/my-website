import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";

type EmailSelfTemplateProps = {
    name: string;
    email: string;
    message: string;
};

type EmailSenderTemplateProps = {
    name: string;
    message: string;
};


export function EmailSelfTemplate({ name, email, message }: EmailSelfTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>New contact form submission from {name}</Preview>
            <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
                <Container style={{ margin: "40px auto", padding: "24px", backgroundColor: "#ffffff", borderRadius: "8px", maxWidth: "600px", border: "1px solid #e5e7eb" }}>
                    <Heading style={{ fontSize: "20px", marginBottom: "16px", color: "#4B0082" }}>
                        New Contact Form Submission
                    </Heading>
                    <Section style={{ marginBottom: "12px" }}>
                        <Text><strong>Name:</strong> {name}</Text>
                        <Text><strong>Email:</strong> {email}</Text>
                    </Section>
                    <Section>
                        <Text style={{ marginBottom: "8px" }}><strong>Message:</strong></Text>
                        <Text style={{ whiteSpace: "pre-wrap", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                            {message}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export function EmailSenderTemplate({ name, message }: EmailSenderTemplateProps) {
    return (
        <Html>
            <Head />
            <Preview>Thanks for reaching out, {name}!</Preview>
            <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
                <Container style={{ margin: "40px auto", padding: "24px", backgroundColor: "#ffffff", borderRadius: "8px", maxWidth: "600px", border: "1px solid #e5e7eb" }}>
                    <Heading style={{ fontSize: "20px", marginBottom: "16px", color: "#2c004cff" }}>
                        Thank you for reaching out, {name}!
                    </Heading>
                    <Text style={{ marginBottom: "16px" }}>
                        I&apos;ve received your message and will get back to you as soon as possible.
                    </Text>
                    <Section>
                        <Text style={{ marginBottom: "8px" }}><strong>Your Message:</strong></Text>
                        <Text style={{ whiteSpace: "pre-wrap", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                            {message}
                        </Text>
                    </Section>
                    <Text style={{ marginTop: "24px" }}>
                        Best regards,<br />
                        Joachim
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}