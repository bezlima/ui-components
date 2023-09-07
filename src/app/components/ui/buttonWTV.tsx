import { ButtonHTMLAttributes, ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
    base: '',
    variants: {
        size: {
            default: ''
        }
    }
})

export type ButtonProps = ComponentProps<'button'> 
    & VariantProps<typeof button> & {
        
}

function Button({ className, size, ...props} : ButtonProps) {
    return (
        <button 
            className={button({ size, className })} 
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button