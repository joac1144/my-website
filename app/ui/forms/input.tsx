type InputProps = {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    ariaDescribedBy?: string;
}

export default function Input({ id, name, type, placeholder, ariaDescribedBy }: InputProps) {
    return (
        <input id={id} name={name} type={type} placeholder={placeholder} autoComplete="off" aria-describedby={ariaDescribedBy} className="w-3/4 md:w-1/2 rounded bg-black/20 border border-purple-700/50 text-gray-200 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600" />
    );
}