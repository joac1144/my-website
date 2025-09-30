type FormErrorProps = {
  id: string;
  errors?: string[];
};

export default function FormError({ id, errors }: FormErrorProps) {
    if (!errors || errors.length === 0) {
        return null;
    }

    return (
        <div id={id} aria-live="polite" aria-atomic="true">
            {
                errors.map((error: string) => (
                    <p key={error} className="text-red-500 text-sm mt-1">
                        {error}
                    </p>
                ))
            }
        </div>
    )
}