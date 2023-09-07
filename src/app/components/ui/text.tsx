import { ReactNode } from "react"

interface IText {
    children: ReactNode
}

export default function Text({children}: IText) {
    <p>
        {children}
    </p>
}