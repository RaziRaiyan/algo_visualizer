
const Navbar = () => {
    return (
        <nav
            className={"w-full z-30 bg-gray-100 shadow-lg fixed flex flex-col sm:flex-row" +
            "  justify-between items-center z-20 "}>
            <div className={"py-4 text-center w-full"}>
                <span className={"text-3xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"}>
                    Algorithm Visualizer
                </span>
            </div>
        </nav>
    )
}

export default Navbar;