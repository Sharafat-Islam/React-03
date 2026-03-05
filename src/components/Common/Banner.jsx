

const Banner = ({children, className}) => {
    return (
        <div className={`w-full bg-no-repeat bg-top bg-cover ${className}`}>{children}</div>
    )
}

export default Banner