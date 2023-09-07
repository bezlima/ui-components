'use client'
export default function Alert({message, error, hideAlert}:{message:string, error:boolean, hideAlert:any}) {
    return (
        <div className={`w-[500px] fixed top-4 right-4 ${error ? 'bg-red-400' : 'bg-green-400'}`}>
            <div className="flex justify-end items-center">
                <p 
                onClick={hideAlert}
                className="px-4 text-gray-50 font-bold text-md cursor-pointer"
                > 
                    X 
                </p>
            </div>
            <div className="flex items-center justify-center px-4 mb-1">
                <p className="text-gray-50 break-all">
                    {message}
                </p>
            </div>
        </div>
    )
}