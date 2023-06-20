
export default function Card({children, className}) {
    return (
        <div className={` card p-4 bg-gray-100 shadow-xl ${className}`}>
            {children}
        </div>
    )
}