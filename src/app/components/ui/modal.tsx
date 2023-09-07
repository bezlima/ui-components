import { ReactNode } from "react"

interface ModalType {
    children?: ReactNode
    width: string;
    height: string;
    closeModal: any;
}

export default function Modal({children, width, height, closeModal}:ModalType) {
    return (
        <div 
            className="
                fixed top-0 left-0
                w-screen h-screen
                bg-green-800/70
                flex items-center justify-center
            "
        >
            <div
                className={`
                    ${width} ${height}
                    bg-green-400
                    rounded-3xl
                    p-6
                    z-10
                `}
            >
                {children}
            </div>
            <div 
            onClick={() => closeModal(false)}
            className="
                fixed top-0 left-0
                w-screen h-screen
                flex items-center justify-center
                cursor-pointer
            "
            ></div>
        </div>
    )
}