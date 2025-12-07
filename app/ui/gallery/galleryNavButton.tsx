import Image from "next/image";

type Props = {
    selected: boolean;
    onClick: () => void;
    image: { url: string; alt: string | null};
};

export default function GalleryNavButton({ selected, onClick, image }: Props) {
    return (
        <div
            className={`flex-[0_0_30%] min-w-0 cursor-pointer ${selected ? "opacity-100" : "opacity-50 hover:opacity-75"
                }`}
        >
            <button
                onClick={onClick}
                type="button"
                className={`relative w-full h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selected ? "border-purple-700" : "border-transparent"
                    }`}
            >
                <Image
                    src={image.url}
                    alt={image.alt || ""}
                    fill
                    className="object-cover select-none"
                />
            </button>
        </div>
    );
}