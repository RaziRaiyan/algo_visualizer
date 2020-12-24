import Navbar from "../components/Navbar";

const Layout = ({children, className}) => {
    return (
        <div className={"relative"}>
            <Navbar/>
            <div className={className ? `${className} pt-20` : `pt-20`}>
                {children}
            </div>
        </div>
    )
}

export default Layout;