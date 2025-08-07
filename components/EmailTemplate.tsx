interface EmailTemplateProps {
    name: string;
    message: string;
    mailto: string;
}

export function EmailTemplate({ name, message, mailto }: EmailTemplateProps) {
    return (
        <div>
            <h1>Bericht van {name},</h1>
            <p>{message}</p>
            <a href={`mailto:${mailto}`} className="text-white no-underline hover:no-underline hover:bg-blue-300 bg-blue-500 p-2 rounded">
                Stuur een e-mail naar {name} op {mailto}
            </a>
        </div>
    );
}