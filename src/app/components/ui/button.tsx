import { ReactNode } from "react"

interface ButtonType {
    children: ReactNode;
    disabled?: boolean;
    width?: string;
    height?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    type?: "button" | "submit" | "reset" | undefined;
    bgColor?: string;
    textColor?: string;
    hoverColor?:string;
    extraClass?: string
}

export default function Button ({extraClass, height, children, disabled, width, onClick, type, bgColor, textColor, hoverColor}:ButtonType) {
    return (
        <button 
            type={type}
            onClick={onClick}
            disabled={disabled || false}
            className={`
                ${textColor ?? 'text-gray-900'}
                text-xl
                font-bold
                tracking-wider
                ${bgColor ?? 'bg-neutral-50'}
                h-14
                rounded
                ${hoverColor ? `hover:${hoverColor}` : 'hover:bg-sky-300'}
                hover:${hoverColor ?? 'bg-neutral-50'}
                disabled:bg-gray-200
                ${width ?? 'w-96'}
                flex items-center justify-evenly
                ${height ?? ''}
                ${extraClass ?? ''}
            `}
        >
            {children}
        </button>
    )
}